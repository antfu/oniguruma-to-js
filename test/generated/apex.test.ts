import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it("mismatch", () => {
  const { match, indices, regex } = execute(
    "(?x)\n(?:\n  (?:(\\bref)\\s+)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?=,|;|=|\\))",
    "String address = 'YOUR_EMAIL_ADDRESS';\n",
    0,
  )

  expect.soft(regex.toString())
    .toMatchInlineSnapshot(`"/(?:(?:(\\bref)\\s+)?(\\bvar\\b)|(?<type_name>(?:(?:ref\\s+)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*\\:\\:\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*)(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)*)))\\s+(\\g<identifier>)\\s*(?=,|;|=|\\))/dgm"`)

  expect.soft(match)
    .toMatchInlineSnapshot(`null`)

  expect(indices).toEqual([
  {
    "start": 0,
    "end": 15,
    "length": 15
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  },
  {
    "start": 0,
    "end": 6,
    "length": 6
  },
  {
    "start": 7,
    "end": 14,
    "length": 7
  },
  {
    "start": 0,
    "end": 6,
    "length": 6
  },
  {
    "start": 4294967295,
    "end": 4294967295,
    "length": 0
  },
  {
    "start": 7,
    "end": 14,
    "length": 7
  }
])
})