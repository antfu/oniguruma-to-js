import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "^(\\s*)(instance)(\\b(?!'))",
    "instance Yesod WebApp\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/^(\\s*)(instance)(\\b(?!'))/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "instance",
        "",
        "instance",
        "",
      ]
    `)

  expect(indices).toEqual([
  {
    "start": 0,
    "end": 8,
    "length": 8
  },
  {
    "start": 0,
    "end": 0,
    "length": 0
  },
  {
    "start": 0,
    "end": 8,
    "length": 8
  },
  {
    "start": 8,
    "end": 8,
    "length": 0
  }
])
})