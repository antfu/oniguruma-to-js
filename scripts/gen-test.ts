import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'
import { basename } from 'node:path'
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

interface UnexpectedMatch {
  input: string
  regex: string
  startIndex: number
}

interface ExpectedMatch {
  input: string
  regex: string
  startIndex: number
  indices: [number, number][]
}

export async function run(): Promise<void> {
  await fs.rm(new URL('../test-generated', import.meta.url), { recursive: true, force: true })
  await fs.mkdir(new URL('../test-generated', import.meta.url), { recursive: true })

  await loadWasm(import('@shikijs/core/wasm-inlined'))

  const files = await fg('*.json', {
    cwd: fileURLToPath(new URL('../textmate-grammars-themes/packages/tm-grammars/raw', import.meta.url)),
    absolute: true,
  })
    .then(files => Promise.all(files.sort().map(async (f) => {
      const content = JSON.parse(await fs.readFile(f, 'utf-8'))
      const name = basename(f, '.json')
      const sample = await fs.readFile(new URL(`../textmate-grammars-themes/samples/${name}.sample`, import.meta.url), 'utf-8').catch(() => '')
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
    const engineWasm = await createWasmOnigEngine()
    const engineJs = createJavaScriptRegexEngine({
      regexConstructor,
      forgiving: true,
    })

    const instances: Instance[] = []

    const unexpectedMatches: UnexpectedMatch[] = []
    const expectedMatches: ExpectedMatch[] = []

    const engine: RegexEngine = {
      createScanner(patterns) {
        const scannerWasm = engineWasm.createScanner(patterns)
        const scannerJS = engineJs.createScanner(patterns)
        const instance: Instance = {
          constractor: [patterns],
          executions: [],
        }
        instances.push(instance)
        return {
          findNextMatchSync(...args) {
            const resultWasm = scannerWasm.findNextMatchSync(...args)
            let resultJs: IOnigMatch | null = null
            try {
              resultJs = scannerJS.findNextMatchSync(...args)
            }
            catch (e) {
              console.error(e)
            }
            const input = typeof args[0] === 'string' ? args[0] : args[0].content
            const startIndex = args[1]
            const indexWasm = resultWasm?.index
            const indexJs = resultJs?.index
            if (
              (indexWasm == null && indexJs != null)
            ) {
              unexpectedMatches.push({
                input,
                startIndex,
                regex: patterns[indexJs],
              })
            }
            else if (
              indexWasm != null && indexWasm !== indexJs
            ) {
              expectedMatches.push({
                input,
                startIndex,
                regex: patterns[indexWasm],
                indices: resultWasm?.captureIndices.map(i => [i.start, i.end]) || [],
              })
            }
            return resultWasm
          },
        }
      },
      createString(s) {
        return engineWasm.createString(s)
      },
    }

    const shiki = await createHighlighterCore({
      langs: [file.content],
      themes: [vitesseDark],
      engine,
    })
    shiki.codeToTokensBase(file.sample, { lang: file.name, theme: 'vitesse-dark' })
    shiki.dispose()

    if (!unexpectedMatches.length && !expectedMatches.length) {
      continue
    }

    const testCode = [
      `import { expect, it } from 'vitest'`,
      `import { execute } from '../test/_execute'`,
      '',
    ]

    unexpectedMatches.forEach((un, i) => {
      testCode.push(
        '',
        `it('unexpected match: ${i}', () => {`,
        `  const { match, indices, regex } = execute(`,
        `    ${JSON.stringify(un.regex)},`,
        `    ${JSON.stringify(un.input)},`,
        `    ${JSON.stringify(un.startIndex)},`,
        `  )`,
        `  expect.soft(regex.source).toMatchInlineSnapshot()`,
        `  expect.soft(regex.flags).toMatchInlineSnapshot()`,
        `  expect.soft(match).toMatchInlineSnapshot()`,
        `  expect.soft(indices).toMatchInlineSnapshot()`,
        `  expect(match).toBe(null)`,
        `})`,
        '',
      )
    })

    expectedMatches.forEach((ex, i) => {
      testCode.push(
        '',
        `it('expected match: ${i}', () => {`,
        `  const { indices, regex } = execute(`,
        `    ${JSON.stringify(ex.regex)},`,
        `    ${JSON.stringify(ex.input)},`,
        `    ${JSON.stringify(ex.startIndex)},`,
        `  )`,
        `  expect.soft(regex.source).toMatchInlineSnapshot()`,
        `  expect.soft(indices).toMatchInlineSnapshot()`,
        `  expect(indices).toMatchObject(${JSON.stringify(ex.indices)})`,
        `})`,
        '',
      )
    })

    await fs.writeFile(new URL(`../test-generated/${file.name}.test.ts`, import.meta.url), testCode.join('\n'))
    continue
  }
}

run()
