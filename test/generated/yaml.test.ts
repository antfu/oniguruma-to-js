import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    'name: Check dist/\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        5,
        6,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '  push:\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "
    ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        6,
        6,
      ],
      [
        7,
        8,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '    branches:\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "
    ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        12,
      ],
      [
        13,
        14,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?x:\n                              (null|Null|NULL|~)\n                            | (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)\n                            | (\n                                (?:\n                                      [-+]? 0b [0-1_]+ # (base 2)\n                                    | [-+]? 0  [0-7_]+ # (base 8)\n                                    | [-+]? (?: 0|[1-9][0-9_]*) # (base 10)\n                                    | [-+]? 0x [0-9a-fA-F_]+ # (base 16)\n                                    | [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+ # (base 60)\n                                )\n                              )\n                            | (\n                                (?x:\n                                      [-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)? # (base 10)\n                                    | [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]* # (base 60)\n                                    | [-+]? \\. (?: inf|Inf|INF) # (infinity)\n                                    |       \\. (?: nan|NaN|NAN) # (not a number)\n                                )\n                              )\n                            | (\n                                (?x:\n                                    \\d{4} - \\d{2} - \\d{2}           # (y-m-d)\n                                  | \\d{4}                           # (year)\n                                    - \\d{1,2}                       # (month)\n                                    - \\d{1,2}                       # (day)\n                                    (?: [Tt] | [ \\t]+) \\d{1,2}      # (hour)\n                                    : \\d{2}                         # (minute)\n                                    : \\d{2}                         # (second)\n                                    (?: \\.\\d*)?                     # (fraction)\n                                    (?:\n                                          (?:[ \\t]*) Z\n                                        | [-+] \\d{1,2} (?: :\\d{1,2})?\n                                    )?                              # (time zone)\n                                )\n                              )\n                            | (=)\n                            | (<<)\n                        )\n                        (?x:\n                            (?=\n                                  \\s* $\n                                | \\s+ \\#\n                                | \\s* : (\\s|$)\n                            )\n                        )\n                    ',
    '      - main\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(null|Null|NULL|~)|(y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)|((?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+))|((?:[-+]?(?:[0-9][0-9_]*)?\\.[0-9.]*(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN)))|((?:\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{1,2}-\\d{1,2}(?:[Tt]|[ \\t]+)\\d{1,2}:\\d{2}:\\d{2}(?:\\.\\d*)?(?:(?:[ \\t]*)Z|[-+]\\d{1,2}(?::\\d{1,2})?)?))|(=)|(<<))(?:(?=\\s*$|\\s+\\#|\\s*:(\\s|$)))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "n",
      undefined,
      "n",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        11,
        12,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        11,
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
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 4', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '    paths-ignore:\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "
    ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        16,
        16,
      ],
      [
        17,
        18,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 5', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '  pull_request:\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "
    ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        14,
        14,
      ],
      [
        15,
        16,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 6', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '    paths-ignore:\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "
    ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        16,
        16,
      ],
      [
        17,
        18,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 7', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    'jobs:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "
    ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        5,
        6,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 8', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '  check-dist:\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "
    ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        12,
      ],
      [
        13,
        14,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 9', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?x:\n                              (null|Null|NULL|~)\n                            | (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)\n                            | (\n                                (?:\n                                      [-+]? 0b [0-1_]+ # (base 2)\n                                    | [-+]? 0  [0-7_]+ # (base 8)\n                                    | [-+]? (?: 0|[1-9][0-9_]*) # (base 10)\n                                    | [-+]? 0x [0-9a-fA-F_]+ # (base 16)\n                                    | [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+ # (base 60)\n                                )\n                              )\n                            | (\n                                (?x:\n                                      [-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)? # (base 10)\n                                    | [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]* # (base 60)\n                                    | [-+]? \\. (?: inf|Inf|INF) # (infinity)\n                                    |       \\. (?: nan|NaN|NAN) # (not a number)\n                                )\n                              )\n                            | (\n                                (?x:\n                                    \\d{4} - \\d{2} - \\d{2}           # (y-m-d)\n                                  | \\d{4}                           # (year)\n                                    - \\d{1,2}                       # (month)\n                                    - \\d{1,2}                       # (day)\n                                    (?: [Tt] | [ \\t]+) \\d{1,2}      # (hour)\n                                    : \\d{2}                         # (minute)\n                                    : \\d{2}                         # (second)\n                                    (?: \\.\\d*)?                     # (fraction)\n                                    (?:\n                                          (?:[ \\t]*) Z\n                                        | [-+] \\d{1,2} (?: :\\d{1,2})?\n                                    )?                              # (time zone)\n                                )\n                              )\n                            | (=)\n                            | (<<)\n                        )\n                        (?x:\n                            (?=\n                                  \\s* $\n                                | \\s+ \\#\n                                | \\s* : (\\s|$)\n                            )\n                        )\n                    ',
    '    runs-on: ubuntu-latest\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(null|Null|NULL|~)|(y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)|((?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+))|((?:[-+]?(?:[0-9][0-9_]*)?\\.[0-9.]*(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN)))|((?:\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{1,2}-\\d{1,2}(?:[Tt]|[ \\t]+)\\d{1,2}:\\d{2}:\\d{2}(?:\\.\\d*)?(?:(?:[ \\t]*)Z|[-+]\\d{1,2}(?::\\d{1,2})?)?))|(=)|(<<))(?:(?=\\s*$|\\s+\\#|\\s*:(\\s|$)))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "on",
      undefined,
      "on",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        9,
        11,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        9,
        11,
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
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        12,
        13,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 10', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '    steps:\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "
    ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        9,
        9,
      ],
      [
        10,
        11,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 11', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '      - uses: actions/checkout@v3\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        12,
      ],
      [
        13,
        14,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 12', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?x:\n                              (null|Null|NULL|~)\n                            | (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)\n                            | (\n                                (?:\n                                      [-+]? 0b [0-1_]+ # (base 2)\n                                    | [-+]? 0  [0-7_]+ # (base 8)\n                                    | [-+]? (?: 0|[1-9][0-9_]*) # (base 10)\n                                    | [-+]? 0x [0-9a-fA-F_]+ # (base 16)\n                                    | [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+ # (base 60)\n                                )\n                              )\n                            | (\n                                (?x:\n                                      [-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)? # (base 10)\n                                    | [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]* # (base 60)\n                                    | [-+]? \\. (?: inf|Inf|INF) # (infinity)\n                                    |       \\. (?: nan|NaN|NAN) # (not a number)\n                                )\n                              )\n                            | (\n                                (?x:\n                                    \\d{4} - \\d{2} - \\d{2}           # (y-m-d)\n                                  | \\d{4}                           # (year)\n                                    - \\d{1,2}                       # (month)\n                                    - \\d{1,2}                       # (day)\n                                    (?: [Tt] | [ \\t]+) \\d{1,2}      # (hour)\n                                    : \\d{2}                         # (minute)\n                                    : \\d{2}                         # (second)\n                                    (?: \\.\\d*)?                     # (fraction)\n                                    (?:\n                                          (?:[ \\t]*) Z\n                                        | [-+] \\d{1,2} (?: :\\d{1,2})?\n                                    )?                              # (time zone)\n                                )\n                              )\n                            | (=)\n                            | (<<)\n                        )\n                        (?x:\n                            (?=\n                                  \\s* $\n                                | \\s+ \\#\n                                | \\s* : (\\s|$)\n                            )\n                        )\n                    ',
    '      - uses: actions/checkout@v3\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(null|Null|NULL|~)|(y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)|((?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+))|((?:[-+]?(?:[0-9][0-9_]*)?\\.[0-9.]*(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN)))|((?:\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{1,2}-\\d{1,2}(?:[Tt]|[ \\t]+)\\d{1,2}:\\d{2}:\\d{2}(?:\\.\\d*)?(?:(?:[ \\t]*)Z|[-+]\\d{1,2}(?::\\d{1,2})?)?))|(=)|(<<))(?:(?=\\s*$|\\s+\\#|\\s*:(\\s|$)))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "3",
      undefined,
      undefined,
      "3",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        32,
        33,
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
        32,
        33,
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

it('unexpected match: 13', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '      - name: Set Node.js 16.x\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        12,
      ],
      [
        13,
        14,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 14', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '        uses: actions/setup-node@v3\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        12,
      ],
      [
        13,
        14,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 15', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?x:\n                              (null|Null|NULL|~)\n                            | (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)\n                            | (\n                                (?:\n                                      [-+]? 0b [0-1_]+ # (base 2)\n                                    | [-+]? 0  [0-7_]+ # (base 8)\n                                    | [-+]? (?: 0|[1-9][0-9_]*) # (base 10)\n                                    | [-+]? 0x [0-9a-fA-F_]+ # (base 16)\n                                    | [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+ # (base 60)\n                                )\n                              )\n                            | (\n                                (?x:\n                                      [-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)? # (base 10)\n                                    | [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]* # (base 60)\n                                    | [-+]? \\. (?: inf|Inf|INF) # (infinity)\n                                    |       \\. (?: nan|NaN|NAN) # (not a number)\n                                )\n                              )\n                            | (\n                                (?x:\n                                    \\d{4} - \\d{2} - \\d{2}           # (y-m-d)\n                                  | \\d{4}                           # (year)\n                                    - \\d{1,2}                       # (month)\n                                    - \\d{1,2}                       # (day)\n                                    (?: [Tt] | [ \\t]+) \\d{1,2}      # (hour)\n                                    : \\d{2}                         # (minute)\n                                    : \\d{2}                         # (second)\n                                    (?: \\.\\d*)?                     # (fraction)\n                                    (?:\n                                          (?:[ \\t]*) Z\n                                        | [-+] \\d{1,2} (?: :\\d{1,2})?\n                                    )?                              # (time zone)\n                                )\n                              )\n                            | (=)\n                            | (<<)\n                        )\n                        (?x:\n                            (?=\n                                  \\s* $\n                                | \\s+ \\#\n                                | \\s* : (\\s|$)\n                            )\n                        )\n                    ',
    '        uses: actions/setup-node@v3\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(null|Null|NULL|~)|(y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)|((?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+))|((?:[-+]?(?:[0-9][0-9_]*)?\\.[0-9.]*(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN)))|((?:\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{1,2}-\\d{1,2}(?:[Tt]|[ \\t]+)\\d{1,2}:\\d{2}:\\d{2}(?:\\.\\d*)?(?:(?:[ \\t]*)Z|[-+]\\d{1,2}(?::\\d{1,2})?)?))|(=)|(<<))(?:(?=\\s*$|\\s+\\#|\\s*:(\\s|$)))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "3",
      undefined,
      undefined,
      "3",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        34,
        35,
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
        34,
        35,
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

it('unexpected match: 16', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '        with:\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "
    ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        12,
      ],
      [
        13,
        14,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 17', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?x:\n                              (null|Null|NULL|~)\n                            | (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)\n                            | (\n                                (?:\n                                      [-+]? 0b [0-1_]+ # (base 2)\n                                    | [-+]? 0  [0-7_]+ # (base 8)\n                                    | [-+]? (?: 0|[1-9][0-9_]*) # (base 10)\n                                    | [-+]? 0x [0-9a-fA-F_]+ # (base 16)\n                                    | [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+ # (base 60)\n                                )\n                              )\n                            | (\n                                (?x:\n                                      [-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)? # (base 10)\n                                    | [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]* # (base 60)\n                                    | [-+]? \\. (?: inf|Inf|INF) # (infinity)\n                                    |       \\. (?: nan|NaN|NAN) # (not a number)\n                                )\n                              )\n                            | (\n                                (?x:\n                                    \\d{4} - \\d{2} - \\d{2}           # (y-m-d)\n                                  | \\d{4}                           # (year)\n                                    - \\d{1,2}                       # (month)\n                                    - \\d{1,2}                       # (day)\n                                    (?: [Tt] | [ \\t]+) \\d{1,2}      # (hour)\n                                    : \\d{2}                         # (minute)\n                                    : \\d{2}                         # (second)\n                                    (?: \\.\\d*)?                     # (fraction)\n                                    (?:\n                                          (?:[ \\t]*) Z\n                                        | [-+] \\d{1,2} (?: :\\d{1,2})?\n                                    )?                              # (time zone)\n                                )\n                              )\n                            | (=)\n                            | (<<)\n                        )\n                        (?x:\n                            (?=\n                                  \\s* $\n                                | \\s+ \\#\n                                | \\s* : (\\s|$)\n                            )\n                        )\n                    ',
    '          node-version: 16.x\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(null|Null|NULL|~)|(y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)|((?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+))|((?:[-+]?(?:[0-9][0-9_]*)?\\.[0-9.]*(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN)))|((?:\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{1,2}-\\d{1,2}(?:[Tt]|[ \\t]+)\\d{1,2}:\\d{2}:\\d{2}(?:\\.\\d*)?(?:(?:[ \\t]*)Z|[-+]\\d{1,2}(?::\\d{1,2})?)?))|(=)|(<<))(?:(?=\\s*$|\\s+\\#|\\s*:(\\s|$)))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "on",
      undefined,
      "on",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        20,
        22,
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
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        23,
        24,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 18', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '          cache: npm\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        15,
        15,
      ],
      [
        16,
        17,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 19', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '      - name: Install dependencies\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        12,
      ],
      [
        13,
        14,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 20', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?x:\n                              (null|Null|NULL|~)\n                            | (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)\n                            | (\n                                (?:\n                                      [-+]? 0b [0-1_]+ # (base 2)\n                                    | [-+]? 0  [0-7_]+ # (base 8)\n                                    | [-+]? (?: 0|[1-9][0-9_]*) # (base 10)\n                                    | [-+]? 0x [0-9a-fA-F_]+ # (base 16)\n                                    | [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+ # (base 60)\n                                )\n                              )\n                            | (\n                                (?x:\n                                      [-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)? # (base 10)\n                                    | [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]* # (base 60)\n                                    | [-+]? \\. (?: inf|Inf|INF) # (infinity)\n                                    |       \\. (?: nan|NaN|NAN) # (not a number)\n                                )\n                              )\n                            | (\n                                (?x:\n                                    \\d{4} - \\d{2} - \\d{2}           # (y-m-d)\n                                  | \\d{4}                           # (year)\n                                    - \\d{1,2}                       # (month)\n                                    - \\d{1,2}                       # (day)\n                                    (?: [Tt] | [ \\t]+) \\d{1,2}      # (hour)\n                                    : \\d{2}                         # (minute)\n                                    : \\d{2}                         # (second)\n                                    (?: \\.\\d*)?                     # (fraction)\n                                    (?:\n                                          (?:[ \\t]*) Z\n                                        | [-+] \\d{1,2} (?: :\\d{1,2})?\n                                    )?                              # (time zone)\n                                )\n                              )\n                            | (=)\n                            | (<<)\n                        )\n                        (?x:\n                            (?=\n                                  \\s* $\n                                | \\s+ \\#\n                                | \\s* : (\\s|$)\n                            )\n                        )\n                    ',
    '        run: npm ci\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(null|Null|NULL|~)|(y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)|((?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+))|((?:[-+]?(?:[0-9][0-9_]*)?\\.[0-9.]*(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN)))|((?:\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{1,2}-\\d{1,2}(?:[Tt]|[ \\t]+)\\d{1,2}:\\d{2}:\\d{2}(?:\\.\\d*)?(?:(?:[ \\t]*)Z|[-+]\\d{1,2}(?::\\d{1,2})?)?))|(=)|(<<))(?:(?=\\s*$|\\s+\\#|\\s*:(\\s|$)))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "n",
      undefined,
      "n",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        10,
        11,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        10,
        11,
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
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        12,
        13,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 21', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '      - name: Rebuild the dist/ directory\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        12,
      ],
      [
        13,
        14,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 22', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?x:\n                              (null|Null|NULL|~)\n                            | (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)\n                            | (\n                                (?:\n                                      [-+]? 0b [0-1_]+ # (base 2)\n                                    | [-+]? 0  [0-7_]+ # (base 8)\n                                    | [-+]? (?: 0|[1-9][0-9_]*) # (base 10)\n                                    | [-+]? 0x [0-9a-fA-F_]+ # (base 16)\n                                    | [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+ # (base 60)\n                                )\n                              )\n                            | (\n                                (?x:\n                                      [-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)? # (base 10)\n                                    | [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]* # (base 60)\n                                    | [-+]? \\. (?: inf|Inf|INF) # (infinity)\n                                    |       \\. (?: nan|NaN|NAN) # (not a number)\n                                )\n                              )\n                            | (\n                                (?x:\n                                    \\d{4} - \\d{2} - \\d{2}           # (y-m-d)\n                                  | \\d{4}                           # (year)\n                                    - \\d{1,2}                       # (month)\n                                    - \\d{1,2}                       # (day)\n                                    (?: [Tt] | [ \\t]+) \\d{1,2}      # (hour)\n                                    : \\d{2}                         # (minute)\n                                    : \\d{2}                         # (second)\n                                    (?: \\.\\d*)?                     # (fraction)\n                                    (?:\n                                          (?:[ \\t]*) Z\n                                        | [-+] \\d{1,2} (?: :\\d{1,2})?\n                                    )?                              # (time zone)\n                                )\n                              )\n                            | (=)\n                            | (<<)\n                        )\n                        (?x:\n                            (?=\n                                  \\s* $\n                                | \\s+ \\#\n                                | \\s* : (\\s|$)\n                            )\n                        )\n                    ',
    '      - name: Rebuild the dist/ directory\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(null|Null|NULL|~)|(y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)|((?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+))|((?:[-+]?(?:[0-9][0-9_]*)?\\.[0-9.]*(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN)))|((?:\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{1,2}-\\d{1,2}(?:[Tt]|[ \\t]+)\\d{1,2}:\\d{2}:\\d{2}(?:\\.\\d*)?(?:(?:[ \\t]*)Z|[-+]\\d{1,2}(?::\\d{1,2})?)?))|(=)|(<<))(?:(?=\\s*$|\\s+\\#|\\s*:(\\s|$)))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "y",
      undefined,
      "y",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        40,
        41,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        40,
        41,
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
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 23', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?x:\n                              (null|Null|NULL|~)\n                            | (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)\n                            | (\n                                (?:\n                                      [-+]? 0b [0-1_]+ # (base 2)\n                                    | [-+]? 0  [0-7_]+ # (base 8)\n                                    | [-+]? (?: 0|[1-9][0-9_]*) # (base 10)\n                                    | [-+]? 0x [0-9a-fA-F_]+ # (base 16)\n                                    | [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+ # (base 60)\n                                )\n                              )\n                            | (\n                                (?x:\n                                      [-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)? # (base 10)\n                                    | [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]* # (base 60)\n                                    | [-+]? \\. (?: inf|Inf|INF) # (infinity)\n                                    |       \\. (?: nan|NaN|NAN) # (not a number)\n                                )\n                              )\n                            | (\n                                (?x:\n                                    \\d{4} - \\d{2} - \\d{2}           # (y-m-d)\n                                  | \\d{4}                           # (year)\n                                    - \\d{1,2}                       # (month)\n                                    - \\d{1,2}                       # (day)\n                                    (?: [Tt] | [ \\t]+) \\d{1,2}      # (hour)\n                                    : \\d{2}                         # (minute)\n                                    : \\d{2}                         # (second)\n                                    (?: \\.\\d*)?                     # (fraction)\n                                    (?:\n                                          (?:[ \\t]*) Z\n                                        | [-+] \\d{1,2} (?: :\\d{1,2})?\n                                    )?                              # (time zone)\n                                )\n                              )\n                            | (=)\n                            | (<<)\n                        )\n                        (?x:\n                            (?=\n                                  \\s* $\n                                | \\s+ \\#\n                                | \\s* : (\\s|$)\n                            )\n                        )\n                    ',
    '        run: |\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(null|Null|NULL|~)|(y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)|((?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+))|((?:[-+]?(?:[0-9][0-9_]*)?\\.[0-9.]*(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN)))|((?:\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{1,2}-\\d{1,2}(?:[Tt]|[ \\t]+)\\d{1,2}:\\d{2}:\\d{2}(?:\\.\\d*)?(?:(?:[ \\t]*)Z|[-+]\\d{1,2}(?::\\d{1,2})?)?))|(=)|(<<))(?:(?=\\s*$|\\s+\\#|\\s*:(\\s|$)))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "n",
      undefined,
      "n",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        10,
        11,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        10,
        11,
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
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        12,
        13,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 24', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '      - name: Compare the expected and actual dist/ directories\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        12,
      ],
      [
        13,
        14,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 25', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?x:\n                              (null|Null|NULL|~)\n                            | (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)\n                            | (\n                                (?:\n                                      [-+]? 0b [0-1_]+ # (base 2)\n                                    | [-+]? 0  [0-7_]+ # (base 8)\n                                    | [-+]? (?: 0|[1-9][0-9_]*) # (base 10)\n                                    | [-+]? 0x [0-9a-fA-F_]+ # (base 16)\n                                    | [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+ # (base 60)\n                                )\n                              )\n                            | (\n                                (?x:\n                                      [-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)? # (base 10)\n                                    | [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]* # (base 60)\n                                    | [-+]? \\. (?: inf|Inf|INF) # (infinity)\n                                    |       \\. (?: nan|NaN|NAN) # (not a number)\n                                )\n                              )\n                            | (\n                                (?x:\n                                    \\d{4} - \\d{2} - \\d{2}           # (y-m-d)\n                                  | \\d{4}                           # (year)\n                                    - \\d{1,2}                       # (month)\n                                    - \\d{1,2}                       # (day)\n                                    (?: [Tt] | [ \\t]+) \\d{1,2}      # (hour)\n                                    : \\d{2}                         # (minute)\n                                    : \\d{2}                         # (second)\n                                    (?: \\.\\d*)?                     # (fraction)\n                                    (?:\n                                          (?:[ \\t]*) Z\n                                        | [-+] \\d{1,2} (?: :\\d{1,2})?\n                                    )?                              # (time zone)\n                                )\n                              )\n                            | (=)\n                            | (<<)\n                        )\n                        (?x:\n                            (?=\n                                  \\s* $\n                                | \\s+ \\#\n                                | \\s* : (\\s|$)\n                            )\n                        )\n                    ',
    '        run: |\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(null|Null|NULL|~)|(y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)|((?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+))|((?:[-+]?(?:[0-9][0-9_]*)?\\.[0-9.]*(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN)))|((?:\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{1,2}-\\d{1,2}(?:[Tt]|[ \\t]+)\\d{1,2}:\\d{2}:\\d{2}(?:\\.\\d*)?(?:(?:[ \\t]*)Z|[-+]\\d{1,2}(?::\\d{1,2})?)?))|(=)|(<<))(?:(?=\\s*$|\\s+\\#|\\s*:(\\s|$)))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "n",
      undefined,
      "n",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        10,
        11,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        10,
        11,
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
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        12,
        13,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 26', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '        id: diff\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        10,
        10,
      ],
      [
        11,
        12,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 27', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '      - uses: actions/upload-artifact@v3\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        12,
      ],
      [
        13,
        14,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 28', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?x:\n                              (null|Null|NULL|~)\n                            | (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)\n                            | (\n                                (?:\n                                      [-+]? 0b [0-1_]+ # (base 2)\n                                    | [-+]? 0  [0-7_]+ # (base 8)\n                                    | [-+]? (?: 0|[1-9][0-9_]*) # (base 10)\n                                    | [-+]? 0x [0-9a-fA-F_]+ # (base 16)\n                                    | [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+ # (base 60)\n                                )\n                              )\n                            | (\n                                (?x:\n                                      [-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)? # (base 10)\n                                    | [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]* # (base 60)\n                                    | [-+]? \\. (?: inf|Inf|INF) # (infinity)\n                                    |       \\. (?: nan|NaN|NAN) # (not a number)\n                                )\n                              )\n                            | (\n                                (?x:\n                                    \\d{4} - \\d{2} - \\d{2}           # (y-m-d)\n                                  | \\d{4}                           # (year)\n                                    - \\d{1,2}                       # (month)\n                                    - \\d{1,2}                       # (day)\n                                    (?: [Tt] | [ \\t]+) \\d{1,2}      # (hour)\n                                    : \\d{2}                         # (minute)\n                                    : \\d{2}                         # (second)\n                                    (?: \\.\\d*)?                     # (fraction)\n                                    (?:\n                                          (?:[ \\t]*) Z\n                                        | [-+] \\d{1,2} (?: :\\d{1,2})?\n                                    )?                              # (time zone)\n                                )\n                              )\n                            | (=)\n                            | (<<)\n                        )\n                        (?x:\n                            (?=\n                                  \\s* $\n                                | \\s+ \\#\n                                | \\s* : (\\s|$)\n                            )\n                        )\n                    ',
    '      - uses: actions/upload-artifact@v3\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?:(null|Null|NULL|~)|(y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)|((?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+))|((?:[-+]?(?:[0-9][0-9_]*)?\\.[0-9.]*(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN)))|((?:\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{1,2}-\\d{1,2}(?:[Tt]|[ \\t]+)\\d{1,2}:\\d{2}:\\d{2}(?:\\.\\d*)?(?:(?:[ \\t]*)Z|[-+]\\d{1,2}(?::\\d{1,2})?)?))|(=)|(<<))(?:(?=\\s*$|\\s+\\#|\\s*:(\\s|$)))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "3",
      undefined,
      undefined,
      "3",
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        39,
        40,
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
        39,
        40,
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

it('unexpected match: 29', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '        if: ${{ failure() && steps.diff.conclusion == \'failure\' }}\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        10,
        10,
      ],
      [
        11,
        12,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 30', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '        with:\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "
    ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        12,
      ],
      [
        13,
        14,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 31', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '          name: dist\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        14,
        14,
      ],
      [
        15,
        16,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 32', () => {
  const { match, indices, regex } = execute(
    '(?x)\n                        (?=\n                              \\s* $\n                            | \\s+ \\#\n                            | \\s* : (\\s|$)\n                        )\n                    ',
    '          path: dist/\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\s*$|\\s+\\#|\\s*:(\\s|$))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      " ",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        14,
        14,
      ],
      [
        15,
        16,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    'name: Check dist/\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      0,
      0,
    ],
    [
      3,
      4,
    ],
    [
      5,
      6,
    ],
  ])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    'name: Check dist/\n',
    5,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      6,
      7,
    ],
  ])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    'on:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      0,
      0,
    ],
    [
      1,
      2,
    ],
    [
      3,
      4,
    ],
  ])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '  push:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      2,
      2,
    ],
    [
      5,
      6,
    ],
    [
      7,
      8,
    ],
  ])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '    branches:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      4,
      4,
    ],
    [
      11,
      12,
    ],
    [
      13,
      14,
    ],
  ])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '    paths-ignore:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      4,
      4,
    ],
    [
      15,
      16,
    ],
    [
      17,
      18,
    ],
  ])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '  pull_request:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      2,
      2,
    ],
    [
      13,
      14,
    ],
    [
      15,
      16,
    ],
  ])
})

it('expected match: 7', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '    paths-ignore:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      4,
      4,
    ],
    [
      15,
      16,
    ],
    [
      17,
      18,
    ],
  ])
})

it('expected match: 8', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    'jobs:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      0,
      0,
    ],
    [
      3,
      4,
    ],
    [
      5,
      6,
    ],
  ])
})

it('expected match: 9', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '  check-dist:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      2,
      2,
    ],
    [
      11,
      12,
    ],
    [
      13,
      14,
    ],
  ])
})

it('expected match: 10', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '    runs-on: ubuntu-latest\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      4,
      4,
    ],
    [
      10,
      11,
    ],
    [
      12,
      13,
    ],
  ])
})

it('expected match: 11', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '    runs-on: ubuntu-latest\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      13,
      14,
    ],
  ])
})

it('expected match: 12', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '    steps:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      4,
      4,
    ],
    [
      8,
      9,
    ],
    [
      10,
      11,
    ],
  ])
})

it('expected match: 13', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '      - uses: actions/checkout@v3\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      11,
      12,
    ],
    [
      13,
      14,
    ],
  ])
})

it('expected match: 14', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '      - name: Set Node.js 16.x\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      11,
      12,
    ],
    [
      13,
      14,
    ],
  ])
})

it('expected match: 15', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '      - name: Set Node.js 16.x\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      14,
      15,
    ],
  ])
})

it('expected match: 16', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        uses: actions/setup-node@v3\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      11,
      12,
    ],
    [
      13,
      14,
    ],
  ])
})

it('expected match: 17', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        with:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      11,
      12,
    ],
    [
      13,
      14,
    ],
  ])
})

it('expected match: 18', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '          node-version: 16.x\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      10,
      10,
    ],
    [
      21,
      22,
    ],
    [
      23,
      24,
    ],
  ])
})

it('expected match: 19', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '          node-version: 16.x\n',
    23,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      24,
      25,
    ],
  ])
})

it('expected match: 20', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '          cache: npm\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      10,
      10,
    ],
    [
      14,
      15,
    ],
    [
      16,
      17,
    ],
  ])
})

it('expected match: 21', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '          cache: npm\n',
    16,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      17,
      18,
    ],
  ])
})

it('expected match: 22', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '      - name: Install dependencies\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      11,
      12,
    ],
    [
      13,
      14,
    ],
  ])
})

it('expected match: 23', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '      - name: Install dependencies\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      14,
      15,
    ],
  ])
})

it('expected match: 24', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        run: npm ci\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      10,
      11,
    ],
    [
      12,
      13,
    ],
  ])
})

it('expected match: 25', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '        run: npm ci\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      13,
      14,
    ],
  ])
})

it('expected match: 26', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '      - name: Rebuild the dist/ directory\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      11,
      12,
    ],
    [
      13,
      14,
    ],
  ])
})

it('expected match: 27', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        run: |\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      10,
      11,
    ],
    [
      12,
      13,
    ],
  ])
})

it('expected match: 28', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '      - name: Compare the expected and actual dist/ directories\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      11,
      12,
    ],
    [
      13,
      14,
    ],
  ])
})

it('expected match: 29', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '      - name: Compare the expected and actual dist/ directories\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      14,
      15,
    ],
  ])
})

it('expected match: 30', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        run: |\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      10,
      11,
    ],
    [
      12,
      13,
    ],
  ])
})

it('expected match: 31', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        id: diff\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      9,
      10,
    ],
    [
      11,
      12,
    ],
  ])
})

it('expected match: 32', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '        id: diff\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      12,
      13,
    ],
  ])
})

it('expected match: 33', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '      - uses: actions/upload-artifact@v3\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      11,
      12,
    ],
    [
      13,
      14,
    ],
  ])
})

it('expected match: 34', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        if: ${{ failure() && steps.diff.conclusion == \'failure\' }}\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      9,
      10,
    ],
    [
      11,
      12,
    ],
  ])
})

it('expected match: 35', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '        if: ${{ failure() && steps.diff.conclusion == \'failure\' }}\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      12,
      13,
    ],
  ])
})

it('expected match: 36', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        with:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      8,
      8,
    ],
    [
      11,
      12,
    ],
    [
      13,
      14,
    ],
  ])
})

it('expected match: 37', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '          name: dist\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      10,
      10,
    ],
    [
      13,
      14,
    ],
    [
      15,
      16,
    ],
  ])
})

it('expected match: 38', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '          name: dist\n',
    15,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      16,
      17,
    ],
  ])
})

it('expected match: 39', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '          path: dist/\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      10,
      10,
    ],
    [
      13,
      14,
    ],
    [
      15,
      16,
    ],
  ])
})

it('expected match: 40', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '          path: dist/\n',
    15,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      16,
      17,
    ],
  ])
})
