import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it('should parse 0', () => {
  const regex = regexConstructor("(?=(;|\\))")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})
