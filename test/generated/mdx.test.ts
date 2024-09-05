import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?<=\\S)\\*|\\*(?=\\S)',
    '{/* From https://mdxjs.com/docs/what-is-mdx/#mdx-syntax */}\n',
    3,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=\\S)\\*|\\*(?=\\S)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "*",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        56,
        57,
      ],
    ]
  `)
  expect(match).toBe(null)
})
