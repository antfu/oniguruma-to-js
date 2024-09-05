import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?x)(^|\\G)\\s*([^*]|\\*(?!/))(?=([^*]|[*](?!/))*$)',
    ' */\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(match).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(match).toBe(null)
})
