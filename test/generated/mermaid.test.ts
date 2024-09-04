import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "^\\s*(graph|flowchart)\\s+([\\p{Letter}\\ 0-9]+)",
    "graph TB\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/^\\s*(graph|flowchart)\\s+([\\p{Letter}\\ 0-9]+)/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`null`)

  expect(indices).toEqual([
  {
    "start": 0,
    "end": 8,
    "length": 8
  },
  {
    "start": 0,
    "end": 5,
    "length": 5
  },
  {
    "start": 6,
    "end": 8,
    "length": 2
  }
])
})