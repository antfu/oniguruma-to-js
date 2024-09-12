import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)',
    '1 Rick 623.3 IT\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)',
    '2 Dan 515.2 Operations\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)',
    '3 Michelle 611 IT\n',
    14,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)',
    '4 Ryan 729 HR\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 4', () => {
  const { match, indices, regex } = execute(
    '([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)',
    '5 Gary 843.25 Finance\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 5', () => {
  const { match, indices, regex } = execute(
    '([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)',
    '6 Nina 578 IT\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 6', () => {
  const { match, indices, regex } = execute(
    '([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)',
    '7 Simon 632.8 Operations\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 7', () => {
  const { match, indices, regex } = execute(
    '([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)',
    '8 Guru 722.5 Finance\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"([¬<>^~]?=(:)?|>|<|\\||!|¦|¬|^|~|<>|><|\\|\\|)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})
