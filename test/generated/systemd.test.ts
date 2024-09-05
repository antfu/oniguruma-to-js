import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?<!\\\\)\\n',
    'ExecStart=/usr/bin/emacs --fg-daemon\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\\\)\\n"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        36,
        37,
      ],
    ]
  `)
  expect(indices).toMatchObject([
    [
      36,
      37,
    ],
  ])
})
