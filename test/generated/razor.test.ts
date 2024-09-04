import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it('should parse 0', () => {
  const regex = regexConstructor("(?x)\n(?<type-name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name-and-type-args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type-args>\\s*<(?:[^<>]|\\g<type-args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name-and-type-args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n  )\n)\\s*\n(?:(\\g<identifier>)\\b)?")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})

it('should parse 1', () => {
  const regex = regexConstructor("(?x)\n(?:\n  (\\bvar\\b)|\n  (?<type-name>\n    (?:\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name-and-type-args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type-args>\\s*<(?:[^<>]|\\g<type-args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name-and-type-args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s+\n\\b(in)\\b")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})
