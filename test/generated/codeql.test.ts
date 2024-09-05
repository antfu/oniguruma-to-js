import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?x)(^|\\G)\\s*([^*]|\\*(?!/))(?=([^*]|[*](?!/))*$)',
    ' */\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^|)\\s*([^*]|\\*(?!\\/))(?=([^*]|[*](?!\\/))*$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "/",
      "",
      "/",
      "
    ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        2,
        3,
      ],
      [
        2,
        2,
      ],
      [
        2,
        3,
      ],
      [
        3,
        4,
      ],
    ]
  `)
  expect(match).toBe(null)
})
