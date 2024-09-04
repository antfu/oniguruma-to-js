import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "\\s*(pr(ogram|ogra|ogr|og|o)?)\\s+((di(r)?|drop|l(ist|is|i)?)\\s+)([\\w&&[^0-9]]\\w{0,31})",
    "capture program drop exit_message\n",
    7,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/\\s*(pr(ogram|ogra|ogr|og|o)?)\\s+((di(r)?|drop|l(ist|is|i)?)\\s+)([\\w&&[^0-9]]\\w{0,31})/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`null`)

  expect(indices).toEqual([
  {
    "start": 7,
    "end": 33,
    "length": 26
  },
  {
    "start": 8,
    "end": 15,
    "length": 7
  },
  {
    "start": 10,
    "end": 15,
    "length": 5
  },
  {
    "start": 16,
    "end": 21,
    "length": 5
  },
  {
    "start": 16,
    "end": 20,
    "length": 4
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  },
  {
    "start": 21,
    "end": 33,
    "length": 12
  }
])
})