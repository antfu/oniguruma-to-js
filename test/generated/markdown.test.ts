import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "^(-{3,})(?=[ \\t]*$\\n?)",
    "------------\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/^(-{3,})(?=[ \\t]*$\\n?)/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "------------",
        "------------",
      ]
    `)

  expect(indices).toEqual([
  {
    "start": 0,
    "end": 12,
    "length": 12
  },
  {
    "start": 0,
    "end": 12,
    "length": 12
  }
])
})