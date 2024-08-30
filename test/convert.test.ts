import { expect, it } from 'vitest'
import { onigurumaToRegexp } from '../src'

it('convert', () => {
  expect(onigurumaToRegexp('((?<![_$[:alnum:])\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$[:alnum:]]return|^case|[^\\._$[:alnum:]]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))').source)
    .toMatchInlineSnapshot(`"((?<![_$0-9A-Za-z)\\]]|\\+\\+|--|}|\\*\\/)|((?<=^return|[^\\._$0-9A-Za-z]return|^case|[^\\._$0-9A-Za-z]case))\\s*)\\/(?![\\/*])(?=(?:[^\\/\\\\\\[]|\\\\.|\\[([^\\]\\\\]|\\\\.)*\\])+\\/([dgimsuy]+|(?![\\/\\*])|(?=\\/\\*))(?!\\s*[a-zA-Z0-9_$]))"`)
})

it('with flags', () => {
  expect(onigurumaToRegexp('(?i)foo'))
    .toMatchInlineSnapshot(`/foo/i`)
})

it('unicode case', () => {
  const regex = onigurumaToRegexp('\\s*(--)((?:[[-\\w][^\\x{00}-\\x{7F}]]|(?:\\\\\\h{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f\\h]))+)')
  expect(regex.source)
    .toMatchInlineSnapshot(`"\\s*(--)((?:[[-\\w][^\\u0000-\\u007F]]|(?:\\\\[ \\t]{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f \\t]))+)"`)
})

it('*+', () => {
  expect(onigurumaToRegexp('^\\s*+(-)\\s*+(behaviour)\\s*+(\\()\\s*+([a-z][a-zA-Z\\d@_]*+)\\s*+(\\))\\s*+(\\.)').source)
    .toMatchInlineSnapshot(`"^\\s*(-)\\s*(behaviour)\\s*(\\()\\s*([a-z][a-zA-Z\\d@_]*)\\s*(\\))\\s*(\\.)"`)
})

it('unicode with atomic group', () => {
  expect(onigurumaToRegexp('(-?(?!\\d)(?>[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)\\s*(?=[~|^\\]$*=]|/\\*)').source)
    .toMatchInlineSnapshot(`"(-?(?!\\d)(?:[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)\\s*(?=[~|^\\]$*=]|\\/\\*)"`)
})

it('\\G', () => {
  expect(
    onigurumaToRegexp('\\G((?=https?://)(?:[^|}\\s*]|\\*[/])+)(\\|)?', {
      ignoreContiguousAnchors: true,
    }).source,
  )
    .toMatchInlineSnapshot(`"((?=https?:\\/\\/)(?:[^|}\\s*]|\\*[/])+)(\\|)?"`)
})
