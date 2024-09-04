import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "(Theorem|Lemma|Remark|Fact|Corollary|Property|Proposition|Goal)\\s+((\\p{L}|[_\\u00A0])(\\p{L}|[0-9_\\u00A0'])*)",
    "Set Default Goal Selector \"!\".\n",
    3,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/(Theorem|Lemma|Remark|Fact|Corollary|Property|Proposition|Goal)\\s+((\\p{L}|[_\\u00A0])(\\p{L}|[0-9_\\u00A0'])*)/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`null`)

  expect(indices).toEqual([
  {
    "start": 12,
    "end": 25,
    "length": 13
  },
  {
    "start": 12,
    "end": 16,
    "length": 4
  },
  {
    "start": 17,
    "end": 25,
    "length": 8
  },
  {
    "start": 17,
    "end": 18,
    "length": 1
  },
  {
    "start": 24,
    "end": 25,
    "length": 1
  }
])
})