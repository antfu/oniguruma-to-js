import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(^|\\￿)(?!\\s*([:]{2,})\\s*$)',
    '  ::\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^|\\￿)(?!\\s*([:]{2,})\\s*$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "",
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        5,
        5,
      ],
      [
        5,
        5,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '(^|\\￿)(\\s*)(.*)',
    '  ::\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^|\\￿)(\\s*)(.*)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "",
      "",
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        5,
        5,
      ],
      [
        5,
        5,
      ],
      [
        5,
        5,
      ],
      [
        5,
        5,
      ],
    ]
  `)
  expect(match).toBe(null)
})
