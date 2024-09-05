import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?=@?[_[:alpha:]][_[:alnum:]]*\\s*\\()',
    '    public static void sendMail(String address, String subject, String body) {\n',
    17,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=@?[_A-Za-z][_0-9A-Za-z]*\\s*\\()"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        23,
        23,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '(\\))',
    '    public static void sendMail(String address, String subject, String body) {\n',
    63,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(\\))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      ")",
      ")",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        75,
        76,
      ],
      [
        75,
        76,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(?:\\b(this)\\b)\\s+)?\n(?<type_name>\n  (?:\n    (?:ref\\s+)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n  )\n)\\s+\n(\\g<identifier>)',
    '    public static void sendMail(String address, String subject, String body) {\n',
    32,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:\\b(this)\\b)\\s+)?(?<type_name>(?:(?:ref\\s+)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*)(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)*))\\s+(\\g<identifier>)"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      32,
      46,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      32,
      38,
    ],
    [
      39,
      46,
    ],
    [
      32,
      38,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      39,
      46,
    ],
  ])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(?:\\b(this)\\b)\\s+)?\n(?<type_name>\n  (?:\n    (?:ref\\s+)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n  )\n)\\s+\n(\\g<identifier>)',
    '    public static void sendMail(String address, String subject, String body) {\n',
    47,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:\\b(this)\\b)\\s+)?(?<type_name>(?:(?:ref\\s+)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*)(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)*))\\s+(\\g<identifier>)"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      48,
      62,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      48,
      54,
    ],
    [
      55,
      62,
    ],
    [
      48,
      54,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      55,
      62,
    ],
  ])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?=,|;|=|\\))',
    '        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:(\\bref)\\s+)?(\\bvar\\b)|(?<type_name>(?:(?:ref\\s+)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*)(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)*)))\\s+(\\g<identifier>)\\s*(?=,|;|=|\\))"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      8,
      42,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      8,
      36,
    ],
    [
      37,
      41,
    ],
    [
      18,
      36,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      37,
      41,
    ],
  ])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '(?x)\n(delete|insert|undelete|update|upsert)?\n\\s*(new)\\s+\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n  )\n)\\s*\n(?=\\()',
    '        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();\n',
    43,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(delete|insert|undelete|update|upsert)?\\s*(new)\\s+(?<type_name>(?:(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*)(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)*))\\s*(?=\\()"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      43,
      76,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      44,
      47,
    ],
    [
      48,
      76,
    ],
    [
      58,
      76,
    ],
    [
      58,
      76,
    ],
    [
      4294967295,
      4294967295,
    ],
  ])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?=,|;|=|\\))',
    '        String[] toAddresses = new String[] {address};\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:(\\bref)\\s+)?(\\bvar\\b)|(?<type_name>(?:(?:ref\\s+)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*)(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)*)))\\s+(\\g<identifier>)\\s*(?=,|;|=|\\))"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      8,
      29,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      8,
      16,
    ],
    [
      17,
      28,
    ],
    [
      8,
      14,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      17,
      28,
    ],
  ])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '(?x)\n(delete|insert|undelete|update|upsert)?\n\\s*(new)\\s+\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n  )\n)\\s*\n(?=\\{|$)',
    '        String[] toAddresses = new String[] {address};\n',
    30,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(delete|insert|undelete|update|upsert)?\\s*(new)\\s+(?<type_name>(?:(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*)(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)*))\\s*(?=\\{|$)"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      30,
      44,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      31,
      34,
    ],
    [
      35,
      44,
    ],
    [
      35,
      41,
    ],
    [
      35,
      41,
    ],
    [
      4294967295,
      4294967295,
    ],
  ])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '(?x)\n(delete|insert|undelete|update|upsert)?\n\\s*(new)\\s+\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n  )\n)\\s*\n(?=\\{|$)',
    '        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });\n',
    28,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(delete|insert|undelete|update|upsert)?\\s*(new)\\s+(?<type_name>(?:(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*)(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)*))\\s*(?=\\{|$)"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      28,
      63,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      28,
      31,
    ],
    [
      32,
      63,
    ],
    [
      42,
      60,
    ],
    [
      42,
      60,
    ],
    [
      4294967295,
      4294967295,
    ],
  ])
})

it('expected match: 7', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?=,|;|=|\\))',
    'String address = \'YOUR_EMAIL_ADDRESS\';\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:(\\bref)\\s+)?(\\bvar\\b)|(?<type_name>(?:(?:ref\\s+)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*)(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)*)))\\s+(\\g<identifier>)\\s*(?=,|;|=|\\))"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      0,
      15,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      0,
      6,
    ],
    [
      7,
      14,
    ],
    [
      0,
      6,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      7,
      14,
    ],
  ])
})

it('expected match: 8', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?=,|;|=|\\))',
    'String subject = \'Speaker Confirmation\';\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:(\\bref)\\s+)?(\\bvar\\b)|(?<type_name>(?:(?:ref\\s+)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*)(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)*)))\\s+(\\g<identifier>)\\s*(?=,|;|=|\\))"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      0,
      15,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      0,
      6,
    ],
    [
      7,
      14,
    ],
    [
      0,
      6,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      7,
      14,
    ],
  ])
})

it('expected match: 9', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?=,|;|=|\\))',
    'String body = \'Thank you for speaking at the conference.\';\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:(\\bref)\\s+)?(\\bvar\\b)|(?<type_name>(?:(?:ref\\s+)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*)(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)*)))\\s+(\\g<identifier>)\\s*(?=,|;|=|\\))"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      0,
      12,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      0,
      6,
    ],
    [
      7,
      11,
    ],
    [
      0,
      6,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      7,
      11,
    ],
  ])
})
