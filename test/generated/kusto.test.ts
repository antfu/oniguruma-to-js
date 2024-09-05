import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '\\b(datetime|timespan|time)\\b',
    'let dt = datetime(2017-01-29 09:00:05);\n',
    3,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(datetime|timespan|time)\\b"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        9,
        17,
      ],
      [
        9,
        17,
      ],
    ]
  `)
  expect(indices).toMatchObject([[9, 17], [9, 17]])
})
