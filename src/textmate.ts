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
    handlePattern = pattern => syntaxLowering(pattern, { preserveFlags: true }).pattern,
  } = options

  function handle(regex: string): string {
    return handlePattern(regex, clone)
  }

  function traverse(a: any): void {
    if (Array.isArray(a)) {
      a.forEach((j: any) => {
        traverse(j)
      })
      return
    }
    if (!a || typeof a !== 'object')
      return
    if (a.foldingStartMarker) {
      a.foldingStartMarker = handle(a.foldingStartMarker)
    }
    if (a.foldingStopMarker) {
      a.foldingStopMarker = handle(a.foldingStopMarker)
    }
    if (a.firstLineMatch) {
      a.firstLineMatch = handle(a.firstLineMatch)
    }
    if (a.match)
      a.match = handle(a.match)
    if (a.begin)
      a.begin = handle(a.begin)
    if (a.end)
      a.end = handle(a.end)
    if (a.while)
      a.while = handle(a.while)
    if (a.patterns) {
      traverse(a.patterns)
    }
    if (a.captures) {
      traverse(Object.values(a.captures))
    }
    if (a.beginCaptures) {
      traverse(Object.values(a.beginCaptures))
    }
    if (a.endCaptures) {
      traverse(Object.values(a.endCaptures))
    }
    Object.values(a.repository || {}).forEach((j: any) => {
      traverse(j)
    })
  }

  traverse(clone)

  return clone
}
