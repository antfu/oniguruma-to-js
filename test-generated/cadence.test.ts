import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '^',
    '    // Declare a public field of type String.\n',
    6,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '^',
    '    //\n',
    6,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '^',
    '    // All fields must be initialized in the init() function.\n',
    6,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '^',
    '    // The init() function is required if the contract contains any fields.\n',
    6,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 4', () => {
  const { match, indices, regex } = execute(
    '^',
    '    // Public function that returns our friendly greeting!\n',
    6,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 5', () => {
  const { match, indices, regex } = execute(
    '^',
    '// From https://docs.onflow.org/cadence/tutorial/02-hello-world/\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})
