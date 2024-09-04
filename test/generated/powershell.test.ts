import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "(?i:(\\$|@)((?:\\p{L}|\\d|_)+:)?((?:\\p{L}|\\d|_)+))((?:\\.(?:\\p{L}|\\d|_)+)*\\b)?",
    "$ServiceName = 'EventLog'\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/(?:(\\$|@)((?:\\p{L}|\\d|_)+:)?((?:\\p{L}|\\d|_)+))((?:\\.(?:\\p{L}|\\d|_)+)*\\b)?/dgim"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`null`)

  expect(indices).toEqual([
  {
    "start": 0,
    "end": 12,
    "length": 12
  },
  {
    "start": 0,
    "end": 1,
    "length": 1
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  },
  {
    "start": 1,
    "end": 12,
    "length": 11
  },
  {
    "start": 12,
    "end": 12,
    "length": 0
  }
])
})