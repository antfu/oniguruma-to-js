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
    .toMatchInlineSnapshot(`"\\s*(--)((?:[\\-\\w^\\u0000-\\u007F]|(?:\\\\[0-9A-Fa-f]{1,6}[\\s\\t\\n\\f]?|\\\\[^\\n\\f0-9A-Fa-f]))+)"`)
})

it('*+', () => {
  expect(onigurumaToRegexp('^\\s*+(-)\\s*+(behaviour)\\s*+(\\()\\s*+([a-z][a-zA-Z\\d@_]*+)\\s*+(\\))\\s*+(\\.)').source)
    .toMatchInlineSnapshot(`"^(?:(?=(\\s*))\\1)(-)(?:(?=(\\s*))\\3)(behaviour)(?:(?=(\\s*))\\5)(\\()(?:(?=(\\s*))\\7)([a-z](?:(?=([a-zA-Z\\d@_]*))\\9))(?:(?=(\\s*))\\10)(\\))(?:(?=(\\s*))\\12)(\\.)"`)
})

it('unicode with atomic group', () => {
  expect(onigurumaToRegexp('(-?(?!\\d)(?>[\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.))+)\\s*(?=[~|^\\]$*=]|/\\*)').source)
    .toMatchInlineSnapshot(`"(-?(?!\\d)(?:(?=([\\w-]|[^\\x00-\\x7F]|\\\\(?:[0-9a-fA-F]{1,6}|.)))\\2)+)\\s*(?=[~|^\\]$*=]|\\/\\*)"`)
})

it('\\G', () => {
  expect(
    onigurumaToRegexp('\\G((?=https?://)(?:[^|}\\s*]|\\*[/])+)(\\|)?', {
      ignoreContiguousAnchors: true,
    }).source,
  )
    .toMatchInlineSnapshot(`"((?=https?:\\/\\/)(?:[^|}\\s*]|\\*[/])+)(\\|)?"`)
})

it('\\Z', () => {
  expect(onigurumaToRegexp('((?<!\\w)alignas(?!\\w))((?:(?:(?:\\s*+(\\/\\*)((?:[^\\*]++|\\*+(?!\\/))*+(\\*\\/))\\s*+)+)|(?:\\s++)|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|\\A|\\Z))(\\()').source)
    .toMatchInlineSnapshot(`"((?<!\\w)alignas(?!\\w))((?:(?:(?:(?:(?=(\\s*))\\3)(\\/\\*)((?:(?=((?:(?:(?=([^\\*]+))\\7)|\\*+(?!\\/))*))\\6)(\\*\\/))(?:(?=(\\s*))\\9))+)|(?:(?:(?=(\\s+))\\10))|(?<=\\W)|(?=\\W)|^|(?:\\n?$)|^|(?=\\n?$)))(\\()"`)
})

it('\\p{*}', () => {
  expect(onigurumaToRegexp('^\\p{Blank}*$').source)
    .toMatchInlineSnapshot(`"^[\\s]*$"`)

  expect(onigurumaToRegexp('(?<!\\\\)(\\[{3})([\\p{Word}:][\\p{Word}:.-]*?)(\\]{3})').source)
    .toMatchInlineSnapshot(`"(?<!\\\\)(\\[{3})([\\w:][\\w:.-]*?)(\\]{3})"`)

  expect(onigurumaToRegexp('(\\\\)(?:[cgl]_+[_\\p{Alphabetic}@]+_[a-z]+|[qs]_[_\\p{Alphabetic}@]+[\\p{Alphabetic}@])').source)
    .toMatchInlineSnapshot(`"(\\\\)(?:[cgl]_+[_A-Za-z@]+_[a-z]+|[qs]_[_A-Za-z@]+[A-Za-z@])"`)
})

it('invalid escape', () => {
  expect(onigurumaToRegexp('([\\p{L}\\.\\-\\_\\+\\=\\>\\<\\!\\?\\*][\\w\\.\\-\\_\\:\\+\\=\\>\\<\\!\\?\\*\\d]*)/').source)
    .toMatchInlineSnapshot(`"([\\p{L}\\.\\-_+=><!?\\*][\\w\\.\\-_:+=><!?\\*\\d]*)\\/"`)

  // TODO: fix this
  // expect(onigurumaToRegexp('(?:^|\\G)[\\t ]*(\\[)((?:[^\\[\\\\\\]]|\\\\[\\[\\\\\\]]?)+?)(\\])(:)[ \\t]*(?:(<)((?:[^\\n<\\\\>]|\\\\[<\\\\>]?)*)(>)|(\\g<destination_raw>))(?:[\\t ]+(?:(")((?:[^"\\\\]|\\\\["\\\\]?)*)(")|(\')((?:[^\'\\\\]|\\\\[\'\\\\]?)*)(\')|(\\()((?:[^\\)\\\\]|\\\\[\\)\\\\]?)*)(\\))))?$(?<destination_raw>(?!\\<)(?:(?:[^\\p{Cc}\\ \\\\\\(\\)]|\\\\[\\(\\)\\\\]?)|\\(\\g<destination_raw>*\\))+){0}').source)
  //   .toMatchInlineSnapshot()
})

it('yaml case', () => {
  expect(onigurumaToRegexp('[^\\s[-?:,\\[\\]{}#&*!|>\'"%@]]|[?:-]\\S').source)
    .toMatchInlineSnapshot(`"[^\\s\\-?:,\\[\\]{}#&*!|>'"%@]|[?:-]\\S"`)
})

it('html', () => {
  expect(onigurumaToRegexp('/\\*|^#|^\\*|^\\b|*#?region|^\\.').source)
    .toMatchInlineSnapshot(`"\\/\\*|^#|^\\*|^\\b|\\*#?region|^\\."`)
})
