import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(^|\\￿)(?!\\s*([:]{2,})\\s*$)',
    '  ::\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^|\\￿)(?!\\s*([:]{2,})\\s*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '(^|\\￿)(\\s*)(.*)',
    '  ::\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^|\\￿)(\\s*)(.*)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})
