import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?=@?[_[:alpha:]][_[:alnum:]]*\\s*\\()',
    '        public static void Main(string[] args)\n',
    21,
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
        27,
        27,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '(\\[)(assembly|module|field|event|method|param|property|return|type)?(\\:)?',
    '        public static void Main(string[] args)\n',
    32,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(\\[)(assembly|module|field|event|method|param|property|return|type)?(:)?"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "[",
      "[",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        38,
        39,
      ],
      [
        38,
        39,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '(?=@?[_[:alpha:]][_[:alnum:]]*\\s*\\()',
    '        public static IHostBuilder CreateHostBuilder(string[] args) =>\n',
    21,
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
        35,
        35,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '(\\[)(assembly|module|field|event|method|param|property|return|type)?(\\:)?',
    '        public static IHostBuilder CreateHostBuilder(string[] args) =>\n',
    53,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(\\[)(assembly|module|field|event|method|param|property|return|type)?(:)?"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "[",
      "[",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        59,
        60,
      ],
      [
        59,
        60,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*[?*]\\s*)? # nullable or pointer suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?!=>)\n(?=,|;|=|\\))',
    '            var host = CreateHostBuilder(args).Build();\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)|(?<type_name>(?:(?:ref\\s+(?:readonly\\s+)?)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\g<tuple>)+\\)))(?:\\s*[?*]\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*)))\\s+(\\g<identifier>)\\s*(?!=>)(?=,|;|=|\\))"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      12,
      21,
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
      12,
      15,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      16,
      20,
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
      4294967295,
      4294967295,
    ],
    [
      16,
      20,
    ],
  ])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*[?*]\\s*)? # nullable or pointer suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?!=>)\n(?=,|;|=|\\))',
    '            using (var scope = host.Services.CreateScope())\n',
    19,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)|(?<type_name>(?:(?:ref\\s+(?:readonly\\s+)?)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\g<tuple>)+\\)))(?:\\s*[?*]\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*)))\\s+(\\g<identifier>)\\s*(?!=>)(?=,|;|=|\\))"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      19,
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
      19,
      22,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      23,
      28,
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
      4294967295,
      4294967295,
    ],
    [
      23,
      28,
    ],
  ])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*[?*]\\s*)? # nullable or pointer suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?!=>)\n(?=,|;|=|\\))',
    '                var db = scope.ServiceProvider.GetRequiredService<KCTestContext>();\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)|(?<type_name>(?:(?:ref\\s+(?:readonly\\s+)?)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\g<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\g<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\g<tuple>)+\\)))(?:\\s*[?*]\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*)))\\s+(\\g<identifier>)\\s*(?!=>)(?=,|;|=|\\))"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([
    [
      16,
      23,
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
      16,
      19,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      20,
      22,
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
      4294967295,
      4294967295,
    ],
    [
      20,
      22,
    ],
  ])
})
