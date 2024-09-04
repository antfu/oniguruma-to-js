import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it('should parse 0', () => {
  const regex = regexConstructor("(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>'\"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})

it('should parse 1', () => {
  const regex = regexConstructor("(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>'\"%@`]]\n                                | [?:-] \\S\n                            ")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})

it('should parse 2', () => {
  const regex = regexConstructor("(?x)\n                        (?=\n                            (?:\n                                [^\\s[-?:,\\[\\]{}#&*!|>'\"%@`]]\n                              | [?:-] [^\\s[\\[\\]{},]]\n                            )\n                            (\n                                  [^\\s:[\\[\\]{},]]\n                                | : [^\\s[\\[\\]{},]]\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})

it('should parse 3', () => {
  const regex = regexConstructor("(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>'\"%@`]]\n                                | [?:-] [^\\s[\\[\\]{},]]\n                            ")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})

it('should parse 4', () => {
  const regex = regexConstructor("(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>'\"%@`]]\n                        | [?:-] [^\\s[\\[\\]{},]]\n                    ")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})

it('should parse 5', () => {
  const regex = regexConstructor("(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>'\"%@`]]\n                        | [?:-] \\S\n                    ")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})
