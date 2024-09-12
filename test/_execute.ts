import { onigurumaToRegexp } from '../src'

const MAX = 4294967295

export function execute(
  pattern: string,
  input: string,
  startIndex: number,
): {
    regex: RegExp
    match: RegExpExecArray | null
    indices: Array<[start: number, end: number]>
  } {
  let startAnchor = false
  // Contiguous anchors simulation
  if (pattern.startsWith('(^|\\G)') || pattern.startsWith('(\\G|^)'))
    startAnchor = true

  const regex = regexConstructor(pattern)
  let offset = 0
  regex.lastIndex = startIndex
  let match = regex.exec(input)
  if (!match && startAnchor) {
    offset = startIndex
    match = regex.exec(input.slice(startIndex))
  }
  const indices = match?.indices?.map((indice) => {
    if (indice == null) {
      return [MAX, MAX] as [number, number]
    }
    if (offset) {
      return [
        indice[0] + offset,
        indice[1] + offset,
      ] as [number, number]
    }
    return indice
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
      flags: 'dg',
      ignoreContiguousAnchors: true,
    },
  )
}
