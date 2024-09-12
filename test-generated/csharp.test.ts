import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?x)\n(?<return_type>\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\\s+\n)\n(?<interface_name>\\g<type_name>\\s*\\.\\s*)?\n(\\g<identifier>)\\s*\n(<([^<>]+)>)?\\s*\n(?=\\()',
    '        public static void Main(string[] args)\n',
    21,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[22, 31], [22, 27], [22, 26], [27, 31], [22, 26], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [27, 31], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(?:\\b(ref|params|out|in|this)\\b)\\s+)?\n(?<type_name>\n  (?:\n    (?:ref\\s+)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^()]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s+\n(\\g<identifier>)',
    '        public static void Main(string[] args)\n',
    32,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[32, 45], [4294967295, 4294967295], [32, 40], [41, 45], [32, 38], [4294967295, 4294967295], [4294967295, 4294967295], [41, 45]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*[?*]\\s*)? # nullable or pointer suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?!=>)\n(?=,|;|=|\\))',
    '            var host = CreateHostBuilder(args).Build();\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 21], [4294967295, 4294967295], [4294967295, 4294967295], [12, 15], [4294967295, 4294967295], [16, 20], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [16, 20]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\?)\\s*)?                                    # preceding null-conditional operator?\n  (\\.)\\s*|                                        # preceding dot?\n  (->)\\s*                                         # preceding pointer arrow?\n)?\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                  # method name\n(\n  <\n  (?<type_args>\n    [^<>()]++|\n    <\\g<type_args>*+>|\n    \\(\\g<type_args>*+\\)\n  )*+\n  >\\s*\n)?                                                # type arguments\n(?=\\()                                            # open paren of argument list',
    '            var host = CreateHostBuilder(args).Build();\n',
    22,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[23, 40], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [23, 40], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\?)\\s*)?                                    # preceding null-conditional operator?\n  (\\.)\\s*|                                        # preceding dot?\n  (->)\\s*                                         # preceding pointer arrow?\n)?\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                  # method name\n(\n  <\n  (?<type_args>\n    [^<>()]++|\n    <\\g<type_args>*+>|\n    \\(\\g<type_args>*+\\)\n  )*+\n  >\\s*\n)?                                                # type arguments\n(?=\\()                                            # open paren of argument list',
    '            var host = CreateHostBuilder(args).Build();\n',
    46,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[46, 52], [4294967295, 4294967295], [46, 47], [4294967295, 4294967295], [47, 52], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*[?*]\\s*)? # nullable or pointer suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?!=>)\n(?=,|;|=|\\))',
    '            using (var scope = host.Services.CreateScope())\n',
    19,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[19, 29], [4294967295, 4294967295], [4294967295, 4294967295], [19, 22], [4294967295, 4294967295], [23, 28], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [23, 28]])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\?)\\s*)?                                    # preceding null-conditional operator?\n  (\\.)\\s*|                                        # preceding dot?\n  (->)\\s*                                         # preceding pointer arrow?\n)?\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                  # method name\n(\n  <\n  (?<type_args>\n    [^<>()]++|\n    <\\g<type_args>*+>|\n    \\(\\g<type_args>*+\\)\n  )*+\n  >\\s*\n)?                                                # type arguments\n(?=\\()                                            # open paren of argument list',
    '            using (var scope = host.Services.CreateScope())\n',
    44,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[44, 56], [4294967295, 4294967295], [44, 45], [4294967295, 4294967295], [45, 56], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 7', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\bref)\\s+(?:(\\breadonly)\\s+)?)?(\\bvar\\b)| # ref local\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref local\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*[?*]\\s*)? # nullable or pointer suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\n)\\s+\n(\\g<identifier>)\\s*\n(?!=>)\n(?=,|;|=|\\))',
    '                var db = scope.ServiceProvider.GetRequiredService<KCTestContext>();\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[16, 23], [4294967295, 4294967295], [4294967295, 4294967295], [16, 19], [4294967295, 4294967295], [20, 22], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [20, 22]])
})

it('expected match: 8', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\?)\\s*)?                                    # preceding null-conditional operator?\n  (\\.)\\s*|                                        # preceding dot?\n  (->)\\s*                                         # preceding pointer arrow?\n)?\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                  # method name\n(\n  <\n  (?<type_args>\n    [^<>()]++|\n    <\\g<type_args>*+>|\n    \\(\\g<type_args>*+\\)\n  )*+\n  >\\s*\n)?                                                # type arguments\n(?=\\()                                            # open paren of argument list',
    '                var db = scope.ServiceProvider.GetRequiredService<KCTestContext>();\n',
    46,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[46, 80], [4294967295, 4294967295], [46, 47], [4294967295, 4294967295], [47, 65], [65, 80], [66, 79]])
})

it('expected match: 9', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\?)\\s*)?                                    # preceding null-conditional operator?\n  (\\.)\\s*|                                        # preceding dot?\n  (->)\\s*                                         # preceding pointer arrow?\n)?\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                  # method name\n(\n  <\n  (?<type_args>\n    [^<>()]++|\n    <\\g<type_args>*+>|\n    \\(\\g<type_args>*+\\)\n  )*+\n  >\\s*\n)?                                                # type arguments\n(?=\\()                                            # open paren of argument list',
    '                db.Database.Migrate();\n',
    27,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[27, 35], [4294967295, 4294967295], [27, 28], [4294967295, 4294967295], [28, 35], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 10', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\?)\\s*)?                                    # preceding null-conditional operator?\n  (\\.)\\s*|                                        # preceding dot?\n  (->)\\s*                                         # preceding pointer arrow?\n)?\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                  # method name\n(\n  <\n  (?<type_args>\n    [^<>()]++|\n    <\\g<type_args>*+>|\n    \\(\\g<type_args>*+\\)\n  )*+\n  >\\s*\n)?                                                # type arguments\n(?=\\()                                            # open paren of argument list',
    '            host.Run();\n',
    16,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[16, 20], [4294967295, 4294967295], [16, 17], [4294967295, 4294967295], [17, 20], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 11', () => {
  const { indices, regex } = execute(
    '(?x)\n(?<return_type>\n  (?<type_name>\n    (?:\n      (?:ref\\s+(?:readonly\\s+)?)?   # ref return\n      (?:\n        (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n        (?<name_and_type_args> # identifier + type arguments (if any)\n          \\g<identifier>\\s*\n          (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n        )\n        (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n        (?<tuple>\\s*\\((?:[^\\(\\)]|\\g<tuple>)+\\))\n      )\n      (?:\\s*\\?\\s*)? # nullable suffix?\n      (?:\\s* # array suffix?\n        \\[\n          (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n        \\]\n        \\s*\n        (?:\\?)? # arrays can be nullable reference types\n        \\s*\n      )*\n    )\n  )\\s+\n)\n(?<interface_name>\\g<type_name>\\s*\\.\\s*)?\n(\\g<identifier>)\\s*\n(<([^<>]+)>)?\\s*\n(?=\\()',
    '        public static IHostBuilder CreateHostBuilder(string[] args) =>\n',
    21,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[22, 52], [22, 35], [22, 34], [35, 52], [22, 34], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [35, 52], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 12', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:(?:\\b(ref|params|out|in|this)\\b)\\s+)?\n(?<type_name>\n  (?:\n    (?:ref\\s+)?   # ref return\n    (?:\n      (?:(?<identifier>@?[_[:alpha:]][_[:alnum:]]*)\\s*\\:\\:\\s*)? # alias-qualification\n      (?<name_and_type_args> # identifier + type arguments (if any)\n        \\g<identifier>\\s*\n        (?<type_args>\\s*<(?:[^<>]|\\g<type_args>)+>\\s*)?\n      )\n      (?:\\s*\\.\\s*\\g<name_and_type_args>)* | # Are there any more names being dotted into?\n      (?<tuple>\\s*\\((?:[^()]|\\g<tuple>)+\\))\n    )\n    (?:\\s*\\?\\s*)? # nullable suffix?\n    (?:\\s* # array suffix?\n      \\[\n        (?:\\s*,\\s*)* # commata for multi-dimensional arrays\n      \\]\n      \\s*\n      (?:\\?)? # arrays can be nullable reference types\n      \\s*\n    )*\n  )\n)\\s+\n(\\g<identifier>)',
    '        public static IHostBuilder CreateHostBuilder(string[] args) =>\n',
    53,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[53, 66], [4294967295, 4294967295], [53, 61], [62, 66], [53, 59], [4294967295, 4294967295], [4294967295, 4294967295], [62, 66]])
})

it('expected match: 13', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\?)\\s*)?                                    # preceding null-conditional operator?\n  (\\.)\\s*|                                        # preceding dot?\n  (->)\\s*                                         # preceding pointer arrow?\n)?\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                  # method name\n(\n  <\n  (?<type_args>\n    [^<>()]++|\n    <\\g<type_args>*+>|\n    \\(\\g<type_args>*+\\)\n  )*+\n  >\\s*\n)?                                                # type arguments\n(?=\\()                                            # open paren of argument list',
    '            Host.CreateDefaultBuilder(args)\n',
    16,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[16, 37], [4294967295, 4294967295], [16, 17], [4294967295, 4294967295], [17, 37], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 14', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\?)\\s*)?                                    # preceding null-conditional operator?\n  (\\.)\\s*|                                        # preceding dot?\n  (->)\\s*                                         # preceding pointer arrow?\n)?\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                  # method name\n(\n  <\n  (?<type_args>\n    [^<>()]++|\n    <\\g<type_args>*+>|\n    \\(\\g<type_args>*+\\)\n  )*+\n  >\\s*\n)?                                                # type arguments\n(?=\\()                                            # open paren of argument list',
    '                .ConfigureWebHostDefaults(webBuilder =>\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[16, 41], [4294967295, 4294967295], [16, 17], [4294967295, 4294967295], [17, 41], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 15', () => {
  const { indices, regex } = execute(
    '(?x)\n((?:\\b(?:async|static)\\b\\s*)*)\n(?:\n  (@?[_[:alpha:]][_[:alnum:]]*)\\b|\n  (\\()\n    (?<tuple>(?:[^()]|\\(\\g<tuple>\\))*)\n  (\\))\n)\\s*\n(=>)',
    '                .ConfigureWebHostDefaults(webBuilder =>\n',
    42,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[42, 55], [42, 42], [42, 52], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [53, 55]])
})

it('expected match: 16', () => {
  const { indices, regex } = execute(
    '(?x)\n(?:\n  (?:(\\?)\\s*)?                                    # preceding null-conditional operator?\n  (\\.)\\s*|                                        # preceding dot?\n  (->)\\s*                                         # preceding pointer arrow?\n)?\n(@?[_[:alpha:]][_[:alnum:]]*)\\s*                  # method name\n(\n  <\n  (?<type_args>\n    [^<>()]++|\n    <\\g<type_args>*+>|\n    \\(\\g<type_args>*+\\)\n  )*+\n  >\\s*\n)?                                                # type arguments\n(?=\\()                                            # open paren of argument list',
    '                    webBuilder.UseStartup<Startup>();\n',
    30,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[30, 50], [4294967295, 4294967295], [30, 31], [4294967295, 4294967295], [31, 41], [41, 50], [42, 49]])
})
