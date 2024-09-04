import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "^[a-z][a-zA-Z0-9_]*\\b",
    "init =\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/^[a-z][a-zA-Z0-9_]*\\b/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "init",
      ]
    `)

  expect(indices).toEqual([
  {
    "start": 0,
    "end": 4,
    "length": 4
  }
])
})