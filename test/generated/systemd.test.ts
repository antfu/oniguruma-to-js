import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "(?<!\\\\)\\n",
    "ExecStart=/usr/bin/emacs --fg-daemon\n",
    10,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/(?<!\\\\)\\n/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "
      ",
      ]
    `)

  expect(indices).toEqual([
  {
    "start": 36,
    "end": 37,
    "length": 1
  }
])
})