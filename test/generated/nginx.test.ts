import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    ";",
    "      fastcgi_pass   127.0.0.1:1025;\n",
    19,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/;/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        ";",
      ]
    `)

  expect(indices).toEqual([
  {
    "start": 35,
    "end": 36,
    "length": 1
  }
])
})