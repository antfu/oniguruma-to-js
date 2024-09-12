import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '^(?=\\s)|^\\s*$',
    'This is a normal text paragraph again.\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=\\s)|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '^(?=\\S)|^\\s*$',
    '.. From https://devguide.python.org/documentation/markup/\n',
    3,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?=\\S)|^\\s*$"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})
