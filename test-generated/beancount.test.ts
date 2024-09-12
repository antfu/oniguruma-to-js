import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?=(^\\s*$|^\\S))',
    '2012-11-03 * "Transfer to pay credit card"\n',
    43,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=(^\\s*$|^\\S))"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '(?=(^\\s*$|^\\S|^\\s*[A-Z]))',
    '  Assets:MyBank:Checking            -400.00 USD\n',
    47,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=(^\\s*$|^\\S|^\\s*[A-Z]))"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '(?=(^\\s*$|^\\S|^\\s*[A-Z]))',
    '  Liabilities:CreditCard             400.00 USD\n',
    47,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=(^\\s*$|^\\S|^\\s*[A-Z]))"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '(?=(^\\s*$|^\\S))',
    '2012-11-03 * "Transfer to account in Canada"\n',
    45,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=(^\\s*$|^\\S))"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 4', () => {
  const { match, indices, regex } = execute(
    '(?=(^\\s*$|^\\S|^\\s*[A-Z]))',
    '  Assets:MyBank:Checking            -400.00 USD @ 1.09 CAD\n',
    58,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=(^\\s*$|^\\S|^\\s*[A-Z]))"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 5', () => {
  const { match, indices, regex } = execute(
    '(?=(^\\s*$|^\\S|^\\s*[A-Z]))',
    '  Assets:FR:SocGen:Checking          436.01 CAD\n',
    47,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=(^\\s*$|^\\S|^\\s*[A-Z]))"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})
