import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("should not match", () => {
  const { match, indices, regex } = execute(
    "(^|\\￿)(?!\\s*([:]{2,})\\s*$)",
    "  ::\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/(^|\\￿)(?!\\s*([:]{2,})\\s*$)/dgm"`)

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