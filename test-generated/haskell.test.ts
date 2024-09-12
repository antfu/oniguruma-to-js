import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?x) # Detect end of import\n  # \'where\' keyword\n  (?=\\b(?<!\')(where)\\b(?!\'))\n  # Decreasing indentation\n  |(?=\\}|;)      # Explicit indentation\n  |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n      \\s+\\S    # - more indented, or\n    | \\s*        # - starts with whitespace, followed by:\n      (?: $      #   - the end of the line (i.e. empty line), or\n      |\\{-[^@]   #   - the start of a block comment, or\n      |--+       #   - the start of a single-line comment.\n         (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_"\']]).*$) # non-symbol\n                 # The double dash may not be followed by other operator characters\n                 # (then it would be an operator, not a comment)\n    )\n',
    'data WebApp = WebApp\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\b(?<!')(where)\\b(?!'))|(?=\\}|;)|^(?!\\s+\\S|\\s*(?:$|\\{-[^@]|--+(?![\\p{S}\\p{P}&&^(),;\\[\\]{}\`_"']).*$))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        0,
        0,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(indices).toMatchObject([[0, 0], [4294967295, 4294967295]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?x)\n  # Data declaration\n  ^(\\s*)(data|newtype)(?:\\s+(family|instance))?\\s+\n  # Keep consuming characters until:\n  (((?!\n  # the equals symbol or the start of a single-line comment, or\n    (?: \n      (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]) # non-symbol\n      (?:=|--+)\n      (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])  # non-symbol\n    )\n  # the "where" or "deriving" keywords, or\n  | (?:\\b(?<!\')(?:where|deriving)\\b(?!\'))\n  # the start of a block comment.\n  | {-\n  #\n  ).)*)',
    'data WebApp = WebApp\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 12], [0, 0], [0, 4], [4294967295, 4294967295], [5, 12], [11, 12]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?x)\n  (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]) # non-symbol\n  (?:(=)|(\\|))\n  (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])  # non-symbol',
    'data WebApp = WebApp\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<![\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"'])(?:(=)|(\\|))(?![\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"'])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        12,
        13,
      ],
      [
        12,
        13,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(indices).toMatchObject([[12, 13], [12, 13], [4294967295, 4294967295]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '(?x)\n  (?:\\G|^)\\s* # Enforce starting condition to avoid catastrophic backtracking (https://github.com/JustusAdam/language-haskell/issues/161)\n  (?: # Infix data constructor\n    # First argument\n    (?:\n    # Simple type\n      (?<!\')\\b((?:[\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\'\\.])+)\n    # Type inside balanced parentheses\n    | (\'? # Optional promotion tick\n        (?<paren>\n          \\(          # Opening parenthesis\n          (?:\n            [^\\(\\)]*  # Match non-parentheses\n          | \\g<paren> # or recurse into further depth\n          )*\n          \\)          # Closing parenthesis\n        )\n      )\n    # Type inside balanced brackets\n    | (\'? # Optional promotion tick\n        (?<brac>\n          \\(          # Opening bracket\n          (?:\n            [^\\[\\]]*  # Match non-brackets\n          | \\g<brac>  # or recurse into further depth\n          )*\n          \\]          # Closing bracket\n        )\n      )\n    )        \n    # Then either\n    \\s*\n      # - a symbolic infix constructor, or\n    (?:(?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']])(:[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]*)\n      # - an alphabetic infix constructor\n    | (`)([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*)(`)\n    )\n\n  ) # Otherwise, prefix data constructor, either:\n  | # - an alphabetic data constructor e.g. "Cons_123"\n    (?:(?<!\')\\b([\\p{Lu}\\p{Lt}][\\p{Ll}_\\p{Lu}\\p{Lt}\\p{Nd}\']*))\n  | # - a symbolic (prefix) data constructor\n    (\\()\\s*(:[\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\']]*)\\s*(\\))',
    'data WebApp = WebApp\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[14, 20], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [14, 20], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '(?x) # Detect end of data declaration: \n     # Decreasing indentation\n   (?=\\}|;)      # Explicit indentation\n   |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n       \\s+\\S    # - more indented, or\n     | \\s*        # - starts with whitespace, followed by:\n       (?: $      #   - the end of the line (i.e. empty line), or\n       |\\{-[^@]   #   - the start of a block comment, or\n       |--+       #   - the start of a single-line comment.\n          (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_"\']]).*$) # non-symbol\n                  # The double dash may not be followed by other operator characters\n                  # (then it would be an operator, not a comment)\n     )',
    'instance Yesod WebApp\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\}|;)|^(?!\\s+\\S|\\s*(?:$|\\{-[^@]|--+(?![\\p{S}\\p{P}&&^(),;\\[\\]{}\`_"']).*$))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        0,
        0,
      ],
    ]
  `)
  expect(indices).toMatchObject([[0, 0]])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '(?x) # Detect end of instance declaration:\n  # \'where\' keyword\n  (?=\\b(?<!\')(where)\\b(?!\'))\n  # Decreasing indentation\n  |(?=\\}|;)      # Explicit indentation\n  |^(?!          # Implicit indentation: end match on newline *unless* the new line is either:\n      \\s+\\S    # - more indented, or\n    | \\s*        # - starts with whitespace, followed by:\n      (?: $      #   - the end of the line (i.e. empty line), or\n      |\\{-[^@]   #   - the start of a block comment, or\n      |--+       #   - the start of a single-line comment.\n         (?![\\p{S}\\p{P}&&[^(),;\\[\\]{}`_"\']]).*$) # non-symbol\n                 # The double dash may not be followed by other operator characters\n                 # (then it would be an operator, not a comment)\n    )\n',
    'mkYesod "WebApp" [parseRoutes|\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=\\b(?<!')(where)\\b(?!'))|(?=\\}|;)|^(?!\\s+\\S|\\s*(?:$|\\{-[^@]|--+(?![\\p{S}\\p{P}&&^(),;\\[\\]{}\`_"']).*$))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        0,
        0,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(indices).toMatchObject([[0, 0], [4294967295, 4294967295]])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '(?x)\n  (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\'\']])\n  (?:\n     (\\.\\.)\n    |(:)\n    |(=)\n    |(\\\\)     # λ not reserved as it is a letter\n    |(\\|)\n    |(<-|←)\n    |(->|→)\n    |(-<|↢)\n    |(-<<|⤛)\n    |(>-|⤚)\n    |(>>-|⤜)\n    |(∀)\n  )\n  (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\'\']])',
    'getHomeR = defaultLayout [whamlet|\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<![\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"''])(?:(\\.\\.)|(:)|(=)|(\\\\)|(\\|)|(<-|←)|(->|→)|(-<|↢)|(-<<|⤛)|(>-|⤚)|(>>-|⤜)|(∀))(?![\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"''])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        9,
        10,
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
        9,
        10,
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
  expect(indices).toMatchObject([[9, 10], [4294967295, 4294967295], [4294967295, 4294967295], [9, 10], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 7', () => {
  const { indices, regex } = execute(
    '(?x)\n  (?<![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\'\']])\n  (?:\n     (\\.\\.)\n    |(:)\n    |(=)\n    |(\\\\)     # λ not reserved as it is a letter\n    |(\\|)\n    |(<-|←)\n    |(->|→)\n    |(-<|↢)\n    |(-<<|⤛)\n    |(>-|⤚)\n    |(>>-|⤜)\n    |(∀)\n  )\n  (?![\\p{S}\\p{P}&&[^(),;\\[\\]`{}_"\'\']])',
    'main = warpEnv WebApp\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<![\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"''])(?:(\\.\\.)|(:)|(=)|(\\\\)|(\\|)|(<-|←)|(->|→)|(-<|↢)|(-<<|⤛)|(>-|⤚)|(>>-|⤜)|(∀))(?![\\p{S}\\p{P}&&^(),;\\[\\]\`{}_"''])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        5,
        6,
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
        5,
        6,
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
  expect(indices).toMatchObject([[5, 6], [4294967295, 4294967295], [4294967295, 4294967295], [5, 6], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295]])
})
