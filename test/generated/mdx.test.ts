import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("should not match", () => {
  const { match, indices, regex } = execute(
    "(?<=\\S)\\*|\\*(?=\\S)",
    "{/* From https://mdxjs.com/docs/what-is-mdx/#mdx-syntax */}\n",
    3,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/(?<=\\S)\\*|\\*(?=\\S)/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "*",
      ]
    `)

  expect(match).toEqual(null)
})