import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("should not match", () => {
  const { match, indices, regex } = execute(
    "(?<=^|---|>|})",
    "// Your component script here!\n",
    30,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/(?<=^|---|>|})/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "",
      ]
    `)

  expect(match).toEqual(null)
})