import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("should not match", () => {
  const { match, indices, regex } = execute(
    "^\\s*",
    "doctype html\n",
    12,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/^\\s*/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "",
      ]
    `)

  expect(match).toEqual(null)
})