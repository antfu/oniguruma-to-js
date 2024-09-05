import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?x)\n\n# The negative lookahead below ensures that we don\'t match nested types\n# or other declarations as properties.\n(?![[:word:][:space:]]*\\b(?:class|interface|struct|enum|event)\\b)\n\n(?<return_type>\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\\s+\n)\n(?<interface_name>\\g<type_name>\\s*\\.\\s*)?\n(?<property_name>\\g<identifier>)\\s*\n(?=\\{|=>|//|/\\*|$)',
    '    {\n',
    5,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?![\\w\\s]*\\b(?:class|interface|struct|enum|event)\\b)(?<return_type>(?<type_name>(?:(?:ref\\s+(?:readonly\\s+)?)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\k<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\k<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\k<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\k<tuple>)+\\)))(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*))\\s+)(?<interface_name>\\k<type_name>\\s*\\.\\s*)?(?<property_name>\\k<identifier>)\\s*(?=\\{|=>|\\/\\/|\\/\\*|$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "
    ",
      "
    ",
      "",
      undefined,
      "",
      undefined,
      undefined,
      undefined,
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        5,
        6,
      ],
      [
        5,
        6,
      ],
      [
        5,
        5,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        5,
        5,
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
        6,
        6,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '(?x)\n\n# The negative lookahead below ensures that we don\'t match nested types\n# or other declarations as properties.\n(?![[:word:][:space:]]*\\b(?:class|interface|struct|enum|event)\\b)\n\n(?<return_type>\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\\s+\n)\n(?<interface_name>\\g<type_name>\\s*\\.\\s*)?\n(?<property_name>\\g<identifier>)\\s*\n(?=\\{|=>|//|/\\*|$)',
    '        }\n',
    9,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?![\\w\\s]*\\b(?:class|interface|struct|enum|event)\\b)(?<return_type>(?<type_name>(?:(?:ref\\s+(?:readonly\\s+)?)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\k<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\k<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\k<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\k<tuple>)+\\)))(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*))\\s+)(?<interface_name>\\k<type_name>\\s*\\.\\s*)?(?<property_name>\\k<identifier>)\\s*(?=\\{|=>|\\/\\/|\\/\\*|$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "
    ",
      "
    ",
      "",
      undefined,
      "",
      undefined,
      undefined,
      undefined,
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        9,
        10,
      ],
      [
        9,
        10,
      ],
      [
        9,
        9,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        9,
        9,
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
        10,
        10,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '(?x)\n\n# The negative lookahead below ensures that we don\'t match nested types\n# or other declarations as properties.\n(?![[:word:][:space:]]*\\b(?:class|interface|struct|enum|event)\\b)\n\n(?<return_type>\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\\s+\n)\n(?<interface_name>\\g<type_name>\\s*\\.\\s*)?\n(?<property_name>\\g<identifier>)\\s*\n(?=\\{|=>|//|/\\*|$)',
    '                });\n',
    19,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?![\\w\\s]*\\b(?:class|interface|struct|enum|event)\\b)(?<return_type>(?<type_name>(?:(?:ref\\s+(?:readonly\\s+)?)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\k<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\k<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\k<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\k<tuple>)+\\)))(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*))\\s+)(?<interface_name>\\k<type_name>\\s*\\.\\s*)?(?<property_name>\\k<identifier>)\\s*(?=\\{|=>|\\/\\/|\\/\\*|$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "
    ",
      "
    ",
      "",
      undefined,
      "",
      undefined,
      undefined,
      undefined,
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        19,
        20,
      ],
      [
        19,
        20,
      ],
      [
        19,
        19,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        19,
        19,
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
        20,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?x)\n(?<return_type>\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\\s+\n)\n(?<interface_name>\\g<type_name>\\s*\\.\\s*)?\n(\\g<identifier>)\\s*\n(<([^<>]+)>)?\\s*\n(?=\\()',
    '        public static void Main(string[] args)\n',
    21,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<return_type>(?<type_name>(?:(?:ref\\s+(?:readonly\\s+)?)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\k<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\k<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\k<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\k<tuple>)+\\)))(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*))\\s+)(?<interface_name>\\k<type_name>\\s*\\.\\s*)?(\\k<identifier>)\\s*(<([^<>]+)>)?\\s*(?=\\()"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[22, 31], [22, 27], [22, 26], [27, 31], [22, 26], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [27, 31], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(?:\\b(ref|params|out|in|this)\\b)\\s+)?\n(?<type_name>\n  (?:\n    (?:ref\\s+)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^()]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s+\n(\\g<identifier>)',
    '        public static void Main(string[] args)\n',
    32,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:\\b(ref|params|out|in|this)\\b)\\s+)?(?<type_name>(?:(?:ref\\s+)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\k<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\k<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\k<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\k<tuple>)+\\)))(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*))\\s+(\\k<identifier>)"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        38,
        41,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        38,
        40,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        38,
        38,
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
        41,
        41,
      ],
    ]
  `)
  expect(indices).toMatchObject([[32, 45], [4294967295, 4294967295], [32, 40], [41, 45], [32, 38], [4294967295, 4294967295], [4294967295, 4294967295], [41, 45]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*[?*]\\s*)? # nullable or pointer suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?!=>)\n(?=,|;|=|\\))',
    '            var host = CreateHostBuilder(args).Build();\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)|(?<type_name>(?:(?:ref\\s+(?:readonly\\s+)?)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\k<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\k<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\k<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\k<tuple>)+\\)))(?:\\s*[?*]\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*)))\\s+(\\k<identifier>)\\s*(?!=>)(?=,|;|=|\\))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        20,
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
        4294967295,
        4294967295,
      ],
      [
        20,
        20,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        20,
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
        21,
        21,
      ],
    ]
  `)
  expect(indices).toMatchObject([[12, 21], [4294967295, 4294967295], [4294967295, 4294967295], [12, 15], [4294967295, 4294967295], [16, 20], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [16, 20]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*[?*]\\s*)? # nullable or pointer suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?!=>)\n(?=,|;|=|\\))',
    '            using (var scope = host.Services.CreateScope())\n',
    19,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)|(?<type_name>(?:(?:ref\\s+(?:readonly\\s+)?)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\k<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\k<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\k<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\k<tuple>)+\\)))(?:\\s*[?*]\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*)))\\s+(\\k<identifier>)\\s*(?!=>)(?=,|;|=|\\))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        28,
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
        4294967295,
        4294967295,
      ],
      [
        28,
        28,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        28,
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
        29,
        29,
      ],
    ]
  `)
  expect(indices).toMatchObject([[19, 29], [4294967295, 4294967295], [4294967295, 4294967295], [19, 22], [4294967295, 4294967295], [23, 28], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [23, 28]])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*[?*]\\s*)? # nullable or pointer suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?!=>)\n(?=,|;|=|\\))',
    '                var db = scope.ServiceProvider.GetRequiredService<KCTestContext>();\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)|(?<type_name>(?:(?:ref\\s+(?:readonly\\s+)?)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\k<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\k<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\k<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\k<tuple>)+\\)))(?:\\s*[?*]\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*)))\\s+(\\k<identifier>)\\s*(?!=>)(?=,|;|=|\\))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        22,
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
        4294967295,
        4294967295,
      ],
      [
        22,
        22,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        22,
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
        23,
        23,
      ],
    ]
  `)
  expect(indices).toMatchObject([[16, 23], [4294967295, 4294967295], [4294967295, 4294967295], [16, 19], [4294967295, 4294967295], [20, 22], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [20, 22]])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '(?x)\n(?<return_type>\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\\s+\n)\n(?<interface_name>\\g<type_name>\\s*\\.\\s*)?\n(\\g<identifier>)\\s*\n(<([^<>]+)>)?\\s*\n(?=\\()',
    '        public static IHostBuilder CreateHostBuilder(string[] args) =>\n',
    21,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<return_type>(?<type_name>(?:(?:ref\\s+(?:readonly\\s+)?)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\k<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\k<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\k<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\k<tuple>)+\\)))(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*))\\s+)(?<interface_name>\\k<type_name>\\s*\\.\\s*)?(\\k<identifier>)\\s*(<([^<>]+)>)?\\s*(?=\\()"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[22, 52], [22, 35], [22, 34], [35, 52], [22, 34], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [35, 52], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(?:\\b(ref|params|out|in|this)\\b)\\s+)?\n(?<type_name>\n  (?:\n    (?:ref\\s+)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^()]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s+\n(\\g<identifier>)',
    '        public static IHostBuilder CreateHostBuilder(string[] args) =>\n',
    53,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(?:\\b(ref|params|out|in|this)\\b)\\s+)?(?<type_name>(?:(?:ref\\s+)?(?:(?:(?<identifier>@?[_A-Za-z][_0-9A-Za-z]*)\\s*::\\s*)?(?<name_and_type_args>\\k<identifier>\\s*(?<type_args>\\s*<(?:[^<>]|\\k<type_args>)+>\\s*)?)(?:\\s*\\.\\s*\\k<name_and_type_args>)*|(?<tuple>\\s*\\((?:[^()]|\\k<tuple>)+\\)))(?:\\s*\\?\\s*)?(?:\\s*\\[(?:\\s*,\\s*)*\\]\\s*(?:\\?)?\\s*)*))\\s+(\\k<identifier>)"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        59,
        62,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        59,
        61,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        59,
        59,
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
        62,
        62,
      ],
    ]
  `)
  expect(indices).toMatchObject([[53, 66], [4294967295, 4294967295], [53, 61], [62, 66], [53, 59], [4294967295, 4294967295], [4294967295, 4294967295], [62, 66]])
})
