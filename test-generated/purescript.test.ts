import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  \\key\' → if key == key\'\n',
    19,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"[\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"']+"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgmu"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "'",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        23,
        24,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '            then (Just value)\n',
    22,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"[\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"']+"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgmu"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      ")",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        28,
        29,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '            else dict key\'\n',
    16,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"[\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"']+"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgmu"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "'",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        25,
        26,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'getAllOdds = filter (\\x -> isOdd x /= 0)\n',
    39,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"[\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"']+"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgmu"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      ")",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        39,
        40,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 4', () => {
  const { match, indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  log     $ "myAdd: " <> (show $ myAdd 2 2)\n',
    42,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"[\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"']+"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgmu"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      ")",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        42,
        43,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 5', () => {
  const { match, indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ getAllOdds (1 : 2 : 3 : 4 : Nil)\n',
    43,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"[\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"']+"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgmu"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      ")",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        43,
        44,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 6', () => {
  const { match, indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  logShow $ censorAll ["hello", "world"]\n',
    39,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"[\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"']+"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgmu"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "]",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        39,
        40,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?:(?:\\()(?:(?<classConstraints>(?:(?:(?:([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*)\\s+)(?:(?<classConstraint>(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*|(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)(?:\\s*(?:\\s+)\\s*\\g<classConstraint>)?))))(?:\\s*(?:,)\\s*\\g<classConstraints>)?))(?:\\))(?:\\s*(=>|<=|⇐|⇒)))',
    'insertDict :: ∀ k v. (Eq k) => k → v → Dict k v → Dict k v\n',
    19,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[21, 30], [22, 26], [22, 24], [25, 26], [28, 30]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?:(?:([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*)\\s+)(?:(?<classConstraint>(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*|(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)(?:\\s*(?:\\s+)\\s*\\g<classConstraint>)?)))',
    'insertDict :: ∀ k v. (Eq k',
    22,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[22, 26], [22, 24], [25, 26]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*',
    '            then (Just value)\n',
    16,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        18,
        22,
      ],
    ]
  `)
  expect(indices).toMatchObject([[18, 22]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '"',
    '    case (regex "[aeiou]" (parseFlags "ig")) of\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"""`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        16,
        17,
      ],
    ]
  `)
  expect(indices).toMatchObject([[16, 17]])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '"',
    '    case (regex "[aeiou]" (parseFlags "ig")) of\n',
    25,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"""`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        38,
        39,
      ],
    ]
  `)
  expect(indices).toMatchObject([[38, 39]])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '\\b(do|ado|if|then|else|case|of|let|in)(?!(\'|\\s*(:|=)))\\b',
    '    case (regex "[aeiou]" (parseFlags "ig")) of\n',
    42,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(do|ado|if|then|else|case|of|let|in)(?!('|\\s*(:|=)))\\b"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        45,
        47,
      ],
      [
        45,
        47,
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
  expect(indices).toMatchObject([[45, 47], [45, 47], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '(\')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(\')',
    '  logShow $ (insertDict \'a\' (1::Int) emptyDict) \'a\'\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(')"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        24,
        27,
      ],
      [
        24,
        25,
      ],
      [
        25,
        26,
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
        26,
        27,
      ],
    ]
  `)
  expect(indices).toMatchObject([[24, 27], [24, 25], [25, 26], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [26, 27]])
})

it('expected match: 7', () => {
  const { indices, regex } = execute(
    '\\((?<paren>(?:[^()]|\\(\\g<paren>\\))*)(::|∷)(?<paren2>(?:[^()]|\\(\\g<paren2>\\))*)\\)',
    '  logShow $ (insertDict \'a\' (1::Int) emptyDict) \'a\'\n',
    27,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[28, 36], [29, 30], [30, 32], [32, 35]])
})

it('expected match: 8', () => {
  const { indices, regex } = execute(
    '(\')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(\')',
    '  logShow $ (insertDict \'a\' (1::Int) emptyDict) \'a\'\n',
    36,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(')"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        48,
        51,
      ],
      [
        48,
        49,
      ],
      [
        49,
        50,
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
        50,
        51,
      ],
    ]
  `)
  expect(indices).toMatchObject([[48, 51], [48, 49], [49, 50], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [50, 51]])
})

it('expected match: 9', () => {
  const { indices, regex } = execute(
    '(\')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(\')',
    '  logShow $ insertDict \'b\' 2 (insertDict \'a\' (1::Int) emptyDict) \'a\'\n',
    28,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(')"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        41,
        44,
      ],
      [
        41,
        42,
      ],
      [
        42,
        43,
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
        43,
        44,
      ],
    ]
  `)
  expect(indices).toMatchObject([[41, 44], [41, 42], [42, 43], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [43, 44]])
})

it('expected match: 10', () => {
  const { indices, regex } = execute(
    '\\((?<paren>(?:[^()]|\\(\\g<paren>\\))*)(::|∷)(?<paren2>(?:[^()]|\\(\\g<paren2>\\))*)\\)',
    '  logShow $ insertDict \'b\' 2 (insertDict \'a\' (1::Int) emptyDict) \'a\'\n',
    44,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[45, 53], [46, 47], [47, 49], [49, 52]])
})

it('expected match: 11', () => {
  const { indices, regex } = execute(
    '(\')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(\')',
    '  logShow $ insertDict \'b\' 2 (insertDict \'a\' (1::Int) emptyDict) \'a\'\n',
    53,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(')"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        65,
        68,
      ],
      [
        65,
        66,
      ],
      [
        66,
        67,
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
        67,
        68,
      ],
    ]
  `)
  expect(indices).toMatchObject([[65, 68], [65, 66], [66, 67], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [67, 68]])
})

it('expected match: 12', () => {
  const { indices, regex } = execute(
    '(\')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(\')',
    '  logShow $ insertDict \'b\' 2 (insertDict \'a\' (1::Int) emptyDict) \'x\'\n',
    28,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(')"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        41,
        44,
      ],
      [
        41,
        42,
      ],
      [
        42,
        43,
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
        43,
        44,
      ],
    ]
  `)
  expect(indices).toMatchObject([[41, 44], [41, 42], [42, 43], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [43, 44]])
})

it('expected match: 13', () => {
  const { indices, regex } = execute(
    '\\((?<paren>(?:[^()]|\\(\\g<paren>\\))*)(::|∷)(?<paren2>(?:[^()]|\\(\\g<paren2>\\))*)\\)',
    '  logShow $ insertDict \'b\' 2 (insertDict \'a\' (1::Int) emptyDict) \'x\'\n',
    44,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[45, 53], [46, 47], [47, 49], [49, 52]])
})

it('expected match: 14', () => {
  const { indices, regex } = execute(
    '(\')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(\')',
    '  logShow $ insertDict \'b\' 2 (insertDict \'a\' (1::Int) emptyDict) \'x\'\n',
    53,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(')"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        65,
        68,
      ],
      [
        65,
        66,
      ],
      [
        66,
        67,
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
        67,
        68,
      ],
    ]
  `)
  expect(indices).toMatchObject([[65, 68], [65, 66], [66, 67], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [67, 68]])
})

it('expected match: 15', () => {
  const { indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    '  logShow $ getAllOdds (1 : 2 : 3 : 4 : Nil)\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        24,
        25,
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
  expect(indices).toMatchObject([[24, 25], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 16', () => {
  const { indices, regex } = execute(
    '"',
    '  logShow $ censorAll ["hello", "world"]\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"""`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        23,
        24,
      ],
    ]
  `)
  expect(indices).toMatchObject([[23, 24]])
})

it('expected match: 17', () => {
  const { indices, regex } = execute(
    ',',
    '  logShow $ censorAll ["hello", "world"]\n',
    30,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`","`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        30,
        31,
      ],
    ]
  `)
  expect(indices).toMatchObject([[30, 31]])
})
