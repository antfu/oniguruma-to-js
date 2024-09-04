import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("should not match", () => {
  const { match, indices, regex } = execute(
    "[\\p{L}_][\\p{L}0-9_]*",
    "    { title: \"Cypher Basics I\",\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/[\\p{L}_][\\p{L}0-9_]*/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "{",
      ]
    `)

  expect(match).toEqual(null)
})