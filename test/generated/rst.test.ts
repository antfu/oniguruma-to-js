import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "\\[(?:[\\w\\.-]+|[#*])\\]_",
    "Lorem ipsum [#]_ dolor sit amet ... [#]_\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/\\[(?:[\\w\\.-]+|[#*])\\]_/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "[#]_",
      ]
    `)

  expect(indices).toEqual([
  {
    "start": 12,
    "end": 16,
    "length": 4
  }
])
})