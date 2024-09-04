import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "(\\\\)(?:[,;]|(?:[\\p{Alphabetic}@]+))",
    "\\documentclass{article}\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/(\\\\)(?:[,;]|(?:[\\p{Alphabetic}@]+))/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`null`)

  expect(indices).toEqual([
  {
    "start": 0,
    "end": 14,
    "length": 14
  },
  {
    "start": 0,
    "end": 1,
    "length": 1
  }
])
})