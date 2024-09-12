import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '^(?!\\s*\\*).*?(?:(?=\\*\\/)|$\\n?)',
    '    /**\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?!\\s*\\*).*?(?:(?=\\*\\/)|$\\n?)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '^(?!\\s*\\*).*?(?:(?=\\*\\/)|$\\n?)',
    '     * Define the application\'s command schedule.\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?!\\s*\\*).*?(?:(?=\\*\\/)|$\\n?)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '^(?!\\s*\\*).*?(?:(?=\\*\\/)|$\\n?)',
    '    /**\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?!\\s*\\*).*?(?:(?=\\*\\/)|$\\n?)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '^(?!\\s*\\*).*?(?:(?=\\*\\/)|$\\n?)',
    '     * Register the commands for the application.\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^(?!\\s*\\*).*?(?:(?=\\*\\/)|$\\n?)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})
