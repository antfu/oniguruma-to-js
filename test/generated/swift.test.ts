import { expect, it } from 'vitest'
import { execute, regexConstructor } from '../_execute'

it('should parse 0', () => {
  const regex = regexConstructor("(?x)\n(((\\#+)?)/)     # (1) for captures, (2) for matching end, (3) for conditionals\n(?(3)|(?!/))   # is not a comment\n(?(3)|(?!\\s))  # does not start with a space or tab\n(\\\\\\s)? # (4) may start with an escaped space or tab\n(?<guts>\n  (?>   # no backtracking, avoids issues with negative lookbehind at end\n    (?:\n      \\\\Q\n        (?:(?!\\\\E)(?!/\\2).)*+\n        (?:\\\\E\n          # A quoted sequence may not have a closing E, in which case it extends to the end of the regex\n          | (?(3)|(?<!\\s))(?=/\\2)\n        )\n      | \\\\.\n      | \\(\\?\\#[^)]*\\)\n      | \\(\\?\n          # we only support a fixed maximum number of braces because otherwise we can't balance the number of open and close braces\n          \\{(?<g1>\\{)?+(?<g2>\\{)?+(?<g3>\\{)?+(?<g4>\\{)?+(?<g5>\\{)?+\n          .+?\n          \\}(?(<g1>)\\})(?(<g2>)\\})(?(<g3>)\\})(?(<g4>)\\})(?(<g5>)\\})\n          (?:\\[(?!\\d)\\w+\\])?\n          [X<>]?\n        \\)\n      | (?<class>\\[ (?:\\\\. | [^\\[\\]] | \\g<class>)+ \\])\n      | \\(\\g<guts>?+\\)\n      | (?:(?!/\\2)[^()\\[\\\\])+  # any character (until end)\n    )+\n  )\n)?+\n# may end with a space only if it is an extended literal or contains only a single escaped space\n(?(3)|(?(5)(?<!\\s)))\n(/\\2)     # (12)\n| \\#+/.+(\\n)")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})

it('should parse 1', () => {
  const regex = regexConstructor("(?x)(\\\\[gk](<)|\\\\[gk]') (?: ((?!\\d)\\w+) (?:([+-])(\\d+))? | ([+-]?\\d+) (?:([+-])(\\d+))? ) ((?(2)>|'))")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})

it('should parse 2', () => {
  const regex = regexConstructor("(?x)\n# PCRECallout\n(\\()(?<keyw>\\?C)\n  (?:\n    (?<num>\\d+)\n    | `(?<name>(?:[^`]|``)*)`\n    | '(?<name>(?:[^']|'')*)'\n    | \"(?<name>(?:[^\"]|\"\")*)\"\n    | \\^(?<name>(?:[^\\^]|\\^\\^)*)\\^\n    | %(?<name>(?:[^%]|%%)*)%\n    | \\#(?<name>(?:[^#]|\\#\\#)*)\\#\n    | \\$(?<name>(?:[^$]|\\$\\$)*)\\$\n    | \\{(?<name>(?:[^}]|\\}\\})*)\\}\n  )?\n(\\))\n# NamedCallout\n| (\\()(?<keyw>\\*)\n    (?<name>(?!\\d)\\w+)\n    (?:\\[(?<tag>(?!\\d)\\w+)\\])?\n    (?:\\{ [^,}]+ (?:,[^,}]+)* \\})?\n  (\\))\n# InterpolatedCallout\n| (\\()(?<keyw>\\?)\n    # we only support a fixed maximum number of braces because otherwise we can't balance the number of open and close braces\n    (\\{(?<g1>\\{)?+(?<g2>\\{)?+(?<g3>\\{)?+(?<g4>\\{)?+(?<g5>\\{)?+) .+? \\}(?(<g1>)\\})(?(<g2>)\\})(?(<g3>)\\})(?(<g4>)\\})(?(<g5>)\\})\n    (?:\\[(?<tag>(?!\\d)\\w+)\\])?\n    (?<keyw>[X<>]?)\n  (\\))")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})

it('should parse 3', () => {
  const regex = regexConstructor("(?x)\n# KnownConditionalStart\n(\\() (?<cond>\\?\\()\n  (?:\n    (?<NumberRef> (?<num>[+-]?\\d+)(?:(?<op>[+-])(?<num>\\d+))? )\n    | (?<cond>R) \\g<NumberRef>?\n    | (?<cond>R&) (?<NamedRef> (?<name>(?!\\d)\\w+) (?:(?<op>[+-])(?<num>\\d+))? )\n    | (?<cond><) (?:\\g<NamedRef>|\\g<NumberRef>) (?<cond>>)\n    | (?<cond>') (?:\\g<NamedRef>|\\g<NumberRef>) (?<cond>')\n    | (?<cond>DEFINE)\n    | (?<cond>VERSION)(?<compar>>?=)(?<num>\\d+\\.\\d+)\n  )\n(?<cond>\\))\n| (\\()(?<cond>\\?)(?=\\()")
  expect.soft(regex.toString())
    .toMatchInlineSnapshot()
})
