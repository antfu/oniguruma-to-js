import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "^((?:=|#){1})([\\p{Blank}]+)(?=\\S+)",
    "= Heading level 1\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/^((?:=|#){1})([\\p{Blank}]+)(?=\\S+)/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`null`)

  expect(indices).toEqual([
  {
    "start": 0,
    "end": 2,
    "length": 2
  },
  {
    "start": 0,
    "end": 1,
    "length": 1
  },
  {
    "start": 1,
    "end": 2,
    "length": 1
  }
])
})