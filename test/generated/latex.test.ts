import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)([^\\]]*)(\\])){,2}(?:(\\{)([^{}]*)(\\}))?",
    "% The preamble ends with the command \\begin{document}",
    36,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)([^\\]]*)(\\])){,2}(?:(\\{)([^{}]*)(\\}))?/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`null`)

  expect(indices).toEqual([
  {
    "start": 36,
    "end": 53,
    "length": 17
  },
  {
    "start": 37,
    "end": 43,
    "length": 6
  },
  {
    "start": 37,
    "end": 38,
    "length": 1
  },
  {
    "start": 43,
    "end": 44,
    "length": 1
  },
  {
    "start": 44,
    "end": 52,
    "length": 8
  },
  {
    "start": 52,
    "end": 53,
    "length": 1
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  }
])
})