import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "^(\\s*)([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\\s*(?:(::|∷)(?!.*<-))",
    "emptyDict :: ∀ k v. Dict k v\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/^(\\s*)([\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)\\s*(?:(::|∷)(?!.*<-))/dgm"`)

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
    "end": 0,
    "length": 0
  },
  {
    "start": 0,
    "end": 9,
    "length": 9
  },
  {
    "start": 10,
    "end": 12,
    "length": 2
  }
])
})