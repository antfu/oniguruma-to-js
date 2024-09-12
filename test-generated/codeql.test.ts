import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?x)(^|\\G)\\s*([^*]|\\*(?!/))(?=([^*]|[*](?!/))*$)',
    ' */\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)\\s*([^*]|\\*(?!\\/))(?=([^*]|[*](?!\\/))*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgmy"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})
