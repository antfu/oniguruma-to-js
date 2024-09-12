import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?x)\n(?<return_type>\n  (?<type_name>\n    (?:\n      (?:ref\\s+)?   # ref return\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\\s+\n)\n(?<interface_name>\\g<type_name>\\s*\\.\\s*)?\n(\\g<identifier>)\\s*\n(<([^<>]+)>)?\\s*\n(?=\\()',
    '    public static void sendMail(String address, String subject, String body) {\n',
    17,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[18, 31], [18, 23], [18, 22], [23, 31], [18, 22], [4294967295, 4294967295], [4294967295, 4294967295], [23, 31], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(?:\\b(this)\\b)\\s+)?\n(?<type_name>\n  (?:\n    (?:ref\\s+)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n  )\n)\\s+\n(\\g<identifier>)',
    '    public static void sendMail(String address, String subject, String body) {\n',
    32,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[32, 46], [4294967295, 4294967295], [32, 38], [39, 46], [32, 38], [4294967295, 4294967295], [39, 46]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(?:\\b(this)\\b)\\s+)?\n(?<type_name>\n  (?:\n    (?:ref\\s+)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n  )\n)\\s+\n(\\g<identifier>)',
    '    public static void sendMail(String address, String subject, String body) {\n',
    47,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[48, 62], [4294967295, 4294967295], [48, 54], [55, 62], [48, 54], [4294967295, 4294967295], [55, 62]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(?:\\b(this)\\b)\\s+)?\n(?<type_name>\n  (?:\n    (?:ref\\s+)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n  )\n)\\s+\n(\\g<identifier>)',
    '    public static void sendMail(String address, String subject, String body) {\n',
    63,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[64, 75], [4294967295, 4294967295], [64, 70], [71, 75], [64, 70], [4294967295, 4294967295], [71, 75]])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?=,|;|=|\\))',
    '        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 42], [4294967295, 4294967295], [4294967295, 4294967295], [8, 36], [37, 41], [18, 36], [4294967295, 4294967295], [37, 41]])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '(?x)\n(delete|insert|undelete|update|upsert)?\n\\s*(new)\\s+\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n  )\n)\\s*\n(?=\\()',
    '        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();\n',
    43,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[43, 76], [4294967295, 4294967295], [44, 47], [48, 76], [58, 76], [58, 76], [4294967295, 4294967295]])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?=,|;|=|\\))',
    '        String[] toAddresses = new String[] {address};\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 29], [4294967295, 4294967295], [4294967295, 4294967295], [8, 16], [17, 28], [8, 14], [4294967295, 4294967295], [17, 28]])
})

it('expected match: 7', () => {
  const { indices, regex } = execute(
    '(?x)\n(delete|insert|undelete|update|upsert)?\n\\s*(new)\\s+\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n  )\n)\\s*\n(?=\\{|$)',
    '        String[] toAddresses = new String[] {address};\n',
    30,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[30, 44], [4294967295, 4294967295], [31, 34], [35, 44], [35, 41], [35, 41], [4294967295, 4294967295]])
})

it('expected match: 8', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(\\??\\.)\\s*)?                                  # safe navigator or accessor\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                 # method name\n(?<type_args>\\s*<([^<>]|\\g<type_args>)+>\\s*)?\\s* # type arguments\n(?=\\()                                           # open paren of argument list',
    '        mail.setToAddresses(toAddresses);\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 27], [12, 13], [13, 27], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 9', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(\\??\\.)\\s*)?                                  # safe navigator or accessor\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                 # method name\n(?<type_args>\\s*<([^<>]|\\g<type_args>)+>\\s*)?\\s* # type arguments\n(?=\\()                                           # open paren of argument list',
    '        mail.setSubject(subject);\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 23], [12, 13], [13, 23], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 10', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(\\??\\.)\\s*)?                                  # safe navigator or accessor\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                 # method name\n(?<type_args>\\s*<([^<>]|\\g<type_args>)+>\\s*)?\\s* # type arguments\n(?=\\()                                           # open paren of argument list',
    '        mail.setPlainTextBody(body);\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 29], [12, 13], [13, 29], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 11', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(\\??\\.)\\s*)?                                  # safe navigator or accessor\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                 # method name\n(?<type_args>\\s*<([^<>]|\\g<type_args>)+>\\s*)?\\s* # type arguments\n(?=\\()                                           # open paren of argument list',
    '        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });\n',
    17,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[17, 27], [17, 18], [18, 27], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 12', () => {
  const { indices, regex } = execute(
    '(?x)\n(delete|insert|undelete|update|upsert)?\n\\s*(new)\\s+\n(?<type_name>\n  (?:\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n  )\n)\\s*\n(?=\\{|$)',
    '        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });\n',
    28,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[28, 63], [4294967295, 4294967295], [28, 31], [32, 63], [42, 60], [42, 60], [4294967295, 4294967295]])
})

it('expected match: 13', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?=,|;|=|\\))',
    'String address = \'YOUR_EMAIL_ADDRESS\';\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 15], [4294967295, 4294967295], [4294967295, 4294967295], [0, 6], [7, 14], [0, 6], [4294967295, 4294967295], [7, 14]])
})

it('expected match: 14', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?=,|;|=|\\))',
    'String subject = \'Speaker Confirmation\';\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 15], [4294967295, 4294967295], [4294967295, 4294967295], [0, 6], [7, 14], [0, 6], [4294967295, 4294967295], [7, 14]])
})

it('expected match: 15', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)*\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*)* # array suffix?\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?=,|;|=|\\))',
    'String body = \'Thank you for speaking at the conference.\';\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 12], [4294967295, 4294967295], [4294967295, 4294967295], [0, 6], [7, 11], [0, 6], [4294967295, 4294967295], [7, 11]])
})

it('expected match: 16', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(\\??\\.)\\s*)?                                  # safe navigator or accessor\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                 # method name\n(?<type_args>\\s*<([^<>]|\\g<type_args>)+>\\s*)?\\s* # type arguments\n(?=\\()                                           # open paren of argument list',
    'EmailManager.sendMail(address, subject, body);\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 21], [12, 13], [13, 21], [4294967295, 4294967295], [4294967295, 4294967295]])
})
