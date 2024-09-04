import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "(?x)((?:\\b(?:import)(?:(?!(?:[0-9A-Za-z_])))))",
    "import python\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/((?:\\b(?:import)(?:(?!(?:[0-9A-Za-z_])))))/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "import",
        "import",
      ]
    `)

  expect(indices).toEqual([
  {
    "start": 0,
    "end": 6,
    "length": 6
  },
  {
    "start": 0,
    "end": 6,
    "length": 6
  }
])
})