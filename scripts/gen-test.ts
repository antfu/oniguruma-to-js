import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'
import { basename } from 'node:path'
import test from 'node:test'
import fg from 'fast-glob'
import type { RegexEngine } from '@shikijs/core'
import { createHighlighterCore, createJavaScriptRegexEngine, createWasmOnigEngine, loadWasm } from '@shikijs/core'
import type { IOnigMatch } from '@shikijs/vscode-textmate'
import vitesseDark from 'shiki/themes/vitesse-dark.mjs'
import { regexConstructor } from '../test/_execute'

export interface Instance {
  constractor: [string[]]
  executions: Executions[]
}

export interface Executions {
  args: [str: string, start: number, options?: any]
  result: IOnigMatch | null
}

function createEngineWrapper(engine: RegexEngine): RegexEngine & { instances: Instance[] } {
  const instances: Instance[] = []

  return {
    instances,
    createScanner(patterns) {
      const scanner = engine.createScanner(patterns)
      const instance: Instance = {
        constractor: [patterns],
        executions: [],
      }
      instances.push(instance)
      return {
        findNextMatchSync(...args) {
          const result = scanner.findNextMatchSync(...args)
          instance.executions.push({
            args: [typeof args[0] === 'string' ? args[0] : args[0].content, ...args.slice(1) as any] as any,
            result,
          })
          return result
        },
      }
    },
    createString(s) {
      return engine.createString(s)
    },
  }
}

export function getPatterns(grammar: any): Set<string> {
  const patterns = new Set<string>()

  function traverse(a: any): void {
    if (!a)
      return
    if (a.match)
      patterns.add(a.match)
    if (a.begin)
      patterns.add(a.begin)
    if (a.end)
      patterns.add(a.end)
    if (a.patterns) {
      a.patterns.forEach((j: any) => {
        traverse(j)
      })
    }
    Object.values(a.repository || {}).forEach((j: any) => {
      traverse(j)
    })
  }

  traverse(grammar)

  return patterns
}

export async function run(): Promise<void> {
  await loadWasm(import('@shikijs/core/wasm-inlined'))

  const files = await fg('*.json', {
    cwd: fileURLToPath(new URL('../textmate-grammars-themes/packages/tm-grammars/raw', import.meta.url)),
    absolute: true,
  })
    .then(files => Promise.all(files.sort().map(async (f) => {
      const content = JSON.parse(await fs.readFile(f, 'utf-8'))
      const name = basename(f, '.json')
      const sample = await fs.readFile(new URL(`../textmate-grammars-themes/samples/${name}.sample`, import.meta.url), 'utf-8')
        .catch(() => '')
      return {
        path: f,
        name,
        content,
        sample,
      }
    })))

  for (const file of files) {
    if (!file.sample) {
      console.log('No sample:', file.name)
      continue
    }
    const engineJS = createEngineWrapper(createJavaScriptRegexEngine({
      regexConstructor,
    }))
    const engineWASM = createEngineWrapper(await createWasmOnigEngine())

    const testCode = [
      `import { expect, it } from 'vitest'`,
      `import { execute, regexConstructor } from '../_execute'`,
      '',
    ]

    let hasMismatch = false

    const patterns = getPatterns(file.content)
    const mismatchPatterns = [...patterns].filter((pattern) => {
      try {
        regexConstructor(pattern)
        return false
      }
      catch {
        return true
      }
    })

    if (mismatchPatterns.length) {
      hasMismatch = true
      mismatchPatterns.forEach((pattern, idx) => {
        testCode.push(
          `it('should parse ${idx}', () => {`,
          `  const regex = regexConstructor(${JSON.stringify(pattern)})`,
          `  expect.soft(regex.toString())`,
          `    .toMatchInlineSnapshot()`,
          '})',
          '',
        )
      })
    }
    else {
      const shiki1 = await createHighlighterCore({
        langs: [file.content],
        themes: [vitesseDark],
        engine: engineWASM,
      })
      const shiki2 = await createHighlighterCore({
        langs: [file.content],
        themes: [vitesseDark],
        engine: engineJS,
      })

      shiki1.codeToTokensBase(file.sample, { lang: file.name, theme: 'vitesse-dark' })
      try {
        shiki2.codeToTokensBase(file.sample, { lang: file.name, theme: 'vitesse-dark' })
      }
      catch (e) {
        console.log('Error:', file.name, e)
      }

      shiki1.dispose()
      shiki2.dispose()

      for (let i = 0; i < engineWASM.instances.length; i++) {
        const instance = engineWASM.instances[i]
        for (let j = 0; j < instance.executions.length; j++) {
          const executionWASM = instance.executions?.[j]
          const executionJS = engineJS.instances?.[i]?.executions?.[j]
          const indexWasm = executionWASM.result?.index ?? -1
          const indexJS = executionJS?.result?.index ?? -1
          if (
            (executionWASM.result == null && executionJS?.result != null)
            || (indexJS < indexWasm && indexJS !== -1)
          ) {
            testCode.push(
              `it("should not match", () => {`,
              `  const { match, indices, regex } = execute(`,
              `    ${JSON.stringify(instance.constractor[0][indexJS])},`,
              `    ${JSON.stringify(executionJS.args[0])},`,
              `    ${JSON.stringify(executionJS.args[1])},`,
              `  )`,
              '',
              `  expect.soft(regex.toString())`,
              `    .toMatchInlineSnapshot()`,
              ``,
              `  expect.soft(match)`,
              `    .toMatchInlineSnapshot()`,
              '',
              '  expect(match).toEqual(null)',
              '})',
            )
            hasMismatch = true
            break
          }
          if (executionWASM.result?.index !== executionJS?.result?.index) {
            testCode.push(
              `it("mismatch", () => {`,
              `  const { match, indices, regex } = execute(`,
              `    ${JSON.stringify(instance.constractor[0][executionWASM.result!.index!])},`,
              `    ${JSON.stringify(executionWASM.args[0])},`,
              `    ${JSON.stringify(executionWASM.args[1])},`,
              `  )`,
              '',
              `  expect.soft(regex.toString())`,
              `    .toMatchInlineSnapshot()`,
              ``,
              `  expect.soft(match)`,
              `    .toMatchInlineSnapshot()`,
              '',
              `  expect(indices).toEqual(${JSON.stringify(executionWASM.result?.captureIndices, null, 2)})`,
              `})`,
            )
            console.log('Mismatch:', file.name, executionWASM, executionJS)
            hasMismatch = true
            break
          }
        }
        if (hasMismatch)
          break
      }
    }
    if (hasMismatch) {
      await fs.writeFile(new URL(`../test/generated/${file.name}.test.ts`, import.meta.url), testCode.join('\n'))
      continue
    }
  }
}

run()
