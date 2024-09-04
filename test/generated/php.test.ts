import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "(^\\s+)?(?=//)",
    "// From https://github.com/laravel/laravel/blob/10.x/app/Console/Kernel.php\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/(^\\s+)?(?=\\/\\/)/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "",
        undefined,
      ]
    `)

  expect(indices).toEqual([
  {
    "start": 0,
    "end": 0,
    "length": 0
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  }
])
})