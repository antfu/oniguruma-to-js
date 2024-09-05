import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?<=let ).+(?=\\W*=)',
    'let dt = datetime(2017-01-29 09:00:05);\n',
    3,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=let ).+(?=\\W*=)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "dt ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        7,
      ],
    ]
  `)
  expect(match).toBe(null)
})
