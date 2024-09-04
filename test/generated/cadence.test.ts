import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("should not match", () => {
  const { match, indices, regex } = execute(
    "\\{",
    "pub contract HelloWorld {\n",
    3,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/\\{/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "{",
      ]
    `)

  expect(match).toEqual(null)
})