import { syntaxLowering } from './lowering'

export interface TextmatePatternBasic {
  match?: string
  begin?: string
  end?: string
  patterns?: TextmatePatternBasic[]
}

export interface TextmateGrammarBasic {
  patterns?: TextmatePatternBasic[]
  repository?: Record<string, TextmatePatternBasic>
}

export interface LoweringTextmateGrammarOptions<T extends TextmateGrammarBasic> {
  handlePattern?: (pattern: string, clone: T) => string
}

export function loweringTextmateGrammar<T extends TextmateGrammarBasic>(
  grammar: T,
  options: LoweringTextmateGrammarOptions<T> = {},
): T {
  const clone = structuredClone(grammar)

  const {
    handlePattern = pattern => syntaxLowering(pattern),
  } = options

  function handle(regex: string): string {
    return handlePattern(regex, clone)
  }

  function traverse(a: any): void {
    if (a.match)
      a.match = handle(a.match)
    if (a.begin)
      a.begin = handle(a.begin)
    if (a.end)
      a.end = handle(a.end)
    if (a.patterns) {
      a.patterns.forEach((j: any) => {
        traverse(j)
      })
    }
  }

  if (clone.patterns)
    clone.patterns.forEach(traverse)
  Object.values(clone.repository || {}).forEach((i: any) => {
    traverse(i)
  })

  return clone
}
