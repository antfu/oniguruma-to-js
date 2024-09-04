import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "(?<![\\p{L}\\p{Nd}_\\$\\#])(package)[ \\t]+([\\p{L}\\$\\#][\\p{L}\\p{Nd}_\\$\\#]*)(?![\\p{L}\\p{Nd}_\\$\\#])",
    "package kube\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/(?<![\\p{L}\\p{Nd}_\\$\\#])(package)[ \\t]+([\\p{L}\\$\\#][\\p{L}\\p{Nd}_\\$\\#]*)(?![\\p{L}\\p{Nd}_\\$\\#])/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`null`)

  expect(indices).toEqual([
  {
    "start": 0,
    "end": 12,
    "length": 12
  },
  {
    "start": 0,
    "end": 7,
    "length": 7
  },
  {
    "start": 8,
    "end": 12,
    "length": 4
  }
])
})