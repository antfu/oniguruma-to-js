import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("should not match", () => {
  const { match, indices, regex } = execute(
    "(?<=let ).+(?=\\W*=)",
    "let dt = datetime(2017-01-29 09:00:05);\n",
    3,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/(?<=let ).+(?=\\W*=)/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "dt ",
      ]
    `)

  expect(match).toEqual(null)
})