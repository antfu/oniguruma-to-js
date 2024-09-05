import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*',
    'emptyDict _ = Nothing\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "Nothing",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        14,
        21,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '\\b(do|ado|if|then|else|case|of|let|in)(?!(\'|\\s*(:|=)))\\b',
    '  \\key\' → if key == key\'\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(do|ado|if|then|else|case|of|let|in)(?!('|\\s*(:|=)))\\b"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "if",
      "if",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        10,
        12,
      ],
      [
        10,
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
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '\\b(do|ado|if|then|else|case|of|let|in)(?!(\'|\\s*(:|=)))\\b',
    '  \\key\' → if key == key\'\n',
    3,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(do|ado|if|then|else|case|of|let|in)(?!('|\\s*(:|=)))\\b"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "if",
      "if",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        10,
        12,
      ],
      [
        10,
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
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    'add10 = myAdd 10\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "10",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        14,
        16,
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
    '(`)(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(`)',
    'modulo dvr dvd = dvd `mod` dvr\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(\`)(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(\`)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "\`mod\`",
      "\`",
      "\`",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        21,
        26,
      ],
      [
        21,
        22,
      ],
      [
        25,
        26,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 5', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    'isOdd = modulo 2\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "2",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        15,
        16,
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

it('unexpected match: 6', () => {
  const { match, indices, regex } = execute(
    '\\<-|-\\>',
    'getAllOdds = filter (\\x -> isOdd x /= 0)\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"<-|->"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "->",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        24,
        26,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 7', () => {
  const { match, indices, regex } = execute(
    '\\<-|-\\>',
    'getAllOdds = filter (\\x -> isOdd x /= 0)\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"<-|->"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "->",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        24,
        26,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 8', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    'getAllOdds = filter (\\x -> isOdd x /= 0)\n',
    26,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "0",
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

it('unexpected match: 9', () => {
  const { match, indices, regex } = execute(
    '"',
    'censor = replace regexString "*"\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"""`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      """,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        29,
        30,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 10', () => {
  const { match, indices, regex } = execute(
    '\\b(do|ado|if|then|else|case|of|let|in)(?!(\'|\\s*(:|=)))\\b',
    'main = do\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(do|ado|if|then|else|case|of|let|in)(?!('|\\s*(:|=)))\\b"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "do",
      "do",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        7,
        9,
      ],
      [
        7,
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
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 11', () => {
  const { match, indices, regex } = execute(
    '"',
    '  log     $ "myAdd: " <> (show $ myAdd 2 2)\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"""`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      """,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        13,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 12', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    '  log     $ "myAdd: " <> (show $ myAdd 2 2)\n',
    21,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "2",
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
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 13', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    '  log     $ "myAdd: " <> (show $ myAdd 2 2)\n',
    24,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "2",
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
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 14', () => {
  const { match, indices, regex } = execute(
    '(\')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(\')',
    '  -- notice key\' == key (\'a\' == \'a\'), so return Just 1\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(')"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "'a'",
      "'",
      "a",
      undefined,
      undefined,
      undefined,
      undefined,
      "'",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        25,
        28,
      ],
      [
        25,
        26,
      ],
      [
        26,
        27,
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
        27,
        28,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 15', () => {
  const { match, indices, regex } = execute(
    '(\')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(\')',
    '  logShow $ (insertDict \'a\' (1::Int) emptyDict) \'a\'\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(')"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "'a'",
      "'",
      "a",
      undefined,
      undefined,
      undefined,
      undefined,
      "'",
    ]
  `)
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
  expect(match).toBe(null)
})

it('unexpected match: 16', () => {
  const { match, indices, regex } = execute(
    '(\')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(\')',
    '  -- search for \'a\' in Dict and return its value\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(')"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "'a'",
      "'",
      "a",
      undefined,
      undefined,
      undefined,
      undefined,
      "'",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        16,
        19,
      ],
      [
        16,
        17,
      ],
      [
        17,
        18,
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
        18,
        19,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 17', () => {
  const { match, indices, regex } = execute(
    '(\')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(\')',
    '  logShow $ insertDict \'b\' 2 (insertDict \'a\' (1::Int) emptyDict) \'a\'\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(')"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "'b'",
      "'",
      "b",
      undefined,
      undefined,
      undefined,
      undefined,
      "'",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        23,
        26,
      ],
      [
        23,
        24,
      ],
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
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        25,
        26,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 18', () => {
  const { match, indices, regex } = execute(
    '(\')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(\')',
    '  -- the \'x\' key is not in Dict, so fall back to Nothing\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(')"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "'x'",
      "'",
      "x",
      undefined,
      undefined,
      undefined,
      undefined,
      "'",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        9,
        12,
      ],
      [
        9,
        10,
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
        11,
        12,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 19', () => {
  const { match, indices, regex } = execute(
    '(\')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"\'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(\')',
    '  logShow $ insertDict \'b\' 2 (insertDict \'a\' (1::Int) emptyDict) \'x\'\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(')((?:[ -\\[\\]-~]|(\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]))|(\\\\o[0-7]+)|(\\\\x[0-9A-Fa-f]+)|(\\^[A-Z@\\[\\]\\\\\\^_])))(')"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "'b'",
      "'",
      "b",
      undefined,
      undefined,
      undefined,
      undefined,
      "'",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        23,
        26,
      ],
      [
        23,
        24,
      ],
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
      [
        4294967295,
        4294967295,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        25,
        26,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 20', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    '  logShow $ add10 2\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "2",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        18,
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
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 21', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    '  logShow $ isOdd 2\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "2",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        18,
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
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 22', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    '  logShow $ isOdd 21\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "21",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        18,
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
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 23', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    '  logShow $ getAllOdds (1 : 2 : 3 : 4 : Nil)\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "1",
      undefined,
      undefined,
    ]
  `)
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
  expect(match).toBe(null)
})

it('unexpected match: 24', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    '  logShow $ getAllOdds (1 : 2 : 3 : 4 : Nil)\n',
    25,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "2",
      undefined,
      undefined,
    ]
  `)
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
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 25', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    '  logShow $ getAllOdds (1 : 2 : 3 : 4 : Nil)\n',
    29,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "3",
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
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 26', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    '  logShow $ getAllOdds (1 : 2 : 3 : 4 : Nil)\n',
    33,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "4",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        36,
        37,
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

it('unexpected match: 27', () => {
  const { match, indices, regex } = execute(
    '\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*',
    '  logShow $ getAllOdds (1 : 2 : 3 : 4 : Nil)\n',
    37,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "Nil",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        40,
        43,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 28', () => {
  const { match, indices, regex } = execute(
    '"',
    '  log $ censor "hello world"\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"""`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      """,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        15,
        16,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 29', () => {
  const { match, indices, regex } = execute(
    '"',
    '  logShow $ censorAll ["hello", "world"]\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"""`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      """,
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

it('unexpected match: 30', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
    '  logShow $ runFn2 myAddFast 10 10\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<!\\$)(?:(?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|(?:\\b[0-9]+(\\.)[0-9]+\\b)|(?:\\b[0-9]+\\b(?!\\.)))(?!\\$)"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "10",
      undefined,
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        29,
        31,
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

it('unexpected match: 31', () => {
  const { match, indices, regex } = execute(
    '\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*',
    '-- From https://github.com/adkelley/javascript-to-purescript/blob/master/tut17/src/Main.purs\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}']*)*"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "From",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        3,
        7,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Data.Either (Either(..))\n',
    26,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      26,
      30,
    ],
  ])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Data.List (List(..), filter, (:))\n',
    22,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      22,
      26,
    ],
  ])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Data.List (List(..), filter, (:))\n',
    35,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      36,
      39,
    ],
  ])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Data.Maybe (Maybe(..))\n',
    24,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      24,
      28,
    ],
  ])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Prelude (Unit, discard, map, mod, show, (+), (==), ($), (/=), (<>))\n',
    46,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      47,
      50,
    ],
  ])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Prelude (Unit, discard, map, mod, show, (+), (==), ($), (/=), (<>))\n',
    51,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      52,
      56,
    ],
  ])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Prelude (Unit, discard, map, mod, show, (+), (==), ($), (/=), (<>))\n',
    57,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      58,
      61,
    ],
  ])
})

it('expected match: 7', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Prelude (Unit, discard, map, mod, show, (+), (==), ($), (/=), (<>))\n',
    62,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      63,
      67,
    ],
  ])
})

it('expected match: 8', () => {
  const { indices, regex } = execute(
    '(?:\\((?!--+\\))[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+\\))',
    'import Prelude (Unit, discard, map, mod, show, (+), (==), ($), (/=), (<>))\n',
    68,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      69,
      73,
    ],
  ])
})

it('expected match: 9', () => {
  const { indices, regex } = execute(
    '(?:(?:\\()(?:(?<classConstraints>(?:(?:(?:([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*)\\s+)(?:(?<classConstraint>(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*|(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)(?:\\s*(?:\\s+)\\s*\\g<classConstraint>)?))))(?:\\s*(?:,)\\s*\\g<classConstraints>)?))(?:\\))(?:\\s*(=>|<=|⇐|⇒)))',
    'insertDict :: ∀ k v. (Eq k) => k → v → Dict k v → Dict k v\n',
    19,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      21,
      30,
    ],
    [
      22,
      26,
    ],
    [
      22,
      24,
    ],
    [
      25,
      26,
    ],
    [
      28,
      30,
    ],
  ])
})

it('expected match: 10', () => {
  const { indices, regex } = execute(
    '(?:(?:([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*)\\s+)(?:(?<classConstraint>(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*|(?:[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*(?:\\.[\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)*\\.)?[\\p{Ll}_][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)(?:\\s*(?:\\s+)\\s*\\g<classConstraint>)?)))',
    'insertDict :: ∀ k v. (Eq k',
    22,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      22,
      26,
    ],
    [
      22,
      24,
    ],
    [
      25,
      26,
    ],
  ])
})

it('expected match: 11', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'insertDict key value dict =\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      26,
      27,
    ],
  ])
})

it('expected match: 12', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    '  \\key\' → if key == key\'\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      17,
      19,
    ],
  ])
})

it('expected match: 13', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'myAddFast = mkFn2 \\x y → x + y\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      10,
      11,
    ],
  ])
})

it('expected match: 14', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'myAddFast = mkFn2 \\x y → x + y\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      18,
      19,
    ],
  ])
})

it('expected match: 15', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'myAddFast = mkFn2 \\x y → x + y\n',
    19,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      23,
      24,
    ],
  ])
})

it('expected match: 16', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'myAddFast = mkFn2 \\x y → x + y\n',
    24,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      27,
      28,
    ],
  ])
})

it('expected match: 17', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'regexString =\n',
    0,
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

it('expected match: 18', () => {
  const { indices, regex } = execute(
    '[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]+',
    'censorAll = map censor\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      10,
      11,
    ],
  ])
})
