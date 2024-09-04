import { onigurumaToRegexp } from '../src'

const MAX = 4294967295

export function execute(
  pattern: string,
  input: string,
  startIndex: number,
): {
    regex: RegExp
    match: RegExpExecArray | null
    indices: Array<{
      start: number
      length: number
      end: number
    }>
  } {
  const regex = regexConstructor(pattern)
  regex.lastIndex = startIndex
  const match = regex.exec(input)
  const indices = match?.indices?.map((indice) => {
    if (indice == null) {
      return {
        end: MAX,
        start: MAX,
        length: 0,
      }
    }
    return {
      start: indice[0],
      length: indice[1] - indice[0],
      end: indice[1],
    }
  }) ?? []

  return {
    regex,
    indices,
    match,
  }
}

export function regexConstructor(pattern: string): RegExp {
  return onigurumaToRegexp(
    pattern,
    {
      flags: 'dgm',
      ignoreContiguousAnchors: true,
    },
  )
}
