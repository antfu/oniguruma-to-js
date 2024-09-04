import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("should not match", () => {
  const { match, indices, regex } = execute(
    "([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)",
    "1 Rick 623.3 IT\n",
    12,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "",
        "",
        undefined,
      ]
    `)

  expect(match).toEqual(null)
})