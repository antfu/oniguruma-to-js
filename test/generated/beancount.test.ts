import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "([0-9]{4})([\\-|/])([0-9]{2})([\\-|/])([0-9]{2})\\s*(txn|[*!&#?%PSTCURM])\\s*(\".*?\")?\\s*(\".*?\")?",
    "2012-11-03 * \"Transfer to account in Canada\"\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/([0-9]{4})([\\-|/])([0-9]{2})([\\-|/])([0-9]{2})\\s*(txn|[*!&#?%PSTCURM])\\s*(".*?")?\\s*(".*?")?/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "2012-11-03 * "Transfer to account in Canada"
      ",
        "2012",
        "-",
        "11",
        "-",
        "03",
        "*",
        ""Transfer to account in Canada"",
        undefined,
      ]
    `)

  expect(indices).toEqual([
  {
    "start": 0,
    "end": 45,
    "length": 45
  },
  {
    "start": 0,
    "end": 4,
    "length": 4
  },
  {
    "start": 4,
    "end": 5,
    "length": 1
  },
  {
    "start": 5,
    "end": 7,
    "length": 2
  },
  {
    "start": 7,
    "end": 8,
    "length": 1
  },
  {
    "start": 8,
    "end": 10,
    "length": 2
  },
  {
    "start": 11,
    "end": 12,
    "length": 1
  },
  {
    "start": 13,
    "end": 44,
    "length": 31
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  }
])
})