import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("should not match", () => {
  const { match, indices, regex } = execute(
    "^(?=(msgid(_plural)?|msgctxt)\\s*\"[^\"])|^\\s*$",
    "# pan93412 <pan93412@gmail.com>, 2019.\n",
    39,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/^(?=(msgid(_plural)?|msgctxt)\\s*"[^"])|^\\s*$/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`
      [
        "",
        undefined,
        undefined,
      ]
    `)

  expect(match).toEqual(null)
})