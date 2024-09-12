import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    'Note that --- not considering the asterisk --- the actual text\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    ' 2. second item\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    ' 3. third item\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    'Note again how the actual text starts at 4 columns in (4 characters\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 4', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    ' 2. Boil some water.\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 5', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    ' 3. Dump everything in the pot and follow\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 6', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    'Notice again how text always lines up on 4-space indents (including\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?x) (?<open>(\\*(?=\\w)|(?<!\\w)\\*|(?<!\\w)\\b_))(?=\\S)                # Open\n  (?=\n    (\n      <[^>]*+>              # HTML tags\n      | (?<raw>`+)([^`]|(?!(?<!`)\\k<raw>(?!`))`)*+\\k<raw>\n                        # Raw\n      | \\\\[\\\\`*_{}\\[\\]()#.!+\\->]?+      # Escapes\n      | \\[\n      (\n          (?<square>          # Named group\n            [^\\[\\]\\\\]        # Match most chars\n            | \\\\.            # Escaped chars\n            | \\[ \\g<square>*+ \\]    # Nested brackets\n          )*+\n        \\]\n        (\n          (              # Reference Link\n            [ ]?          # Optional space\n            \\[[^\\]]*+\\]        # Ref name\n          )\n          | (              # Inline Link\n            \\(            # Opening paren\n              [ \\t]*+        # Optional whtiespace\n              <?(.*?)>?      # URL\n              [ \\t]*+        # Optional whtiespace\n              (          # Optional Title\n                (?<title>[\'"])\n                (.*?)\n                \\k<title>\n              )?\n            \\)\n          )\n        )\n      )\n      | \\k<open>\\k<open>                   # Must be bold closer\n      | (?!(?<=\\S)\\k<open>).            # Everything besides\n                        # style closer\n    )++\n    (?<=\\S)(?=_\\b|\\*)\\k<open>                # Close\n  )\n',
    '2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[15, 16], [15, 16], [15, 16], [21, 22], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?x) (?<open>(\\*\\*(?=\\w)|(?<!\\w)\\*\\*|(?<!\\w)\\b__))(?=\\S) (?=\n  (\n    <[^>]*+>              # HTML tags\n    | (?<raw>`+)([^`]|(?!(?<!`)\\k<raw>(?!`))`)*+\\k<raw>\n                      # Raw\n    | \\\\[\\\\`*_{}\\[\\]()#.!+\\->]?+      # Escapes\n    | \\[\n    (\n        (?<square>          # Named group\n          [^\\[\\]\\\\]        # Match most chars\n          | \\\\.            # Escaped chars\n          | \\[ \\g<square>*+ \\]    # Nested brackets\n        )*+\n      \\]\n      (\n        (              # Reference Link\n          [ ]?          # Optional space\n          \\[[^\\]]*+\\]        # Ref name\n        )\n        | (              # Inline Link\n          \\(            # Opening paren\n            [ \\t]*+        # Optional whitespace\n            <?(.*?)>?      # URL\n            [ \\t]*+        # Optional whitespace\n            (          # Optional Title\n              (?<title>[\'"])\n              (.*?)\n              \\k<title>\n            )?\n          \\)\n        )\n      )\n    )\n    | (?!(?<=\\S)\\k<open>).            # Everything besides\n                      # style closer\n  )++\n  (?<=\\S)(?=__\\b|\\*\\*)\\k<open>                # Close\n)\n',
    '2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\n',
    23,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[25, 27], [25, 27], [25, 27], [30, 31], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    '  * this one\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        4,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 4], [4, 4]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '(^|\\G)([ ]{0,3})([*+-])([ \\t])',
    '  * that one\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)([ ]{0,3})([*+-])([ \\t])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        2,
        4,
      ],
      [
        2,
        2,
      ],
      [
        2,
        2,
      ],
      [
        2,
        3,
      ],
      [
        3,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[2, 4], [2, 2], [2, 2], [2, 3], [3, 4]])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    '  * that one\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        4,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 4], [4, 4]])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '(^|\\G)([ ]{0,3})([*+-])([ \\t])',
    '  * the other one\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)([ ]{0,3})([*+-])([ \\t])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        2,
        4,
      ],
      [
        2,
        2,
      ],
      [
        2,
        2,
      ],
      [
        2,
        3,
      ],
      [
        3,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[2, 4], [2, 2], [2, 2], [2, 3], [3, 4]])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    '  * the other one\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        4,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 4], [4, 4]])
})

it('expected match: 7', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    '> Block quotes are\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        2,
        2,
      ],
      [
        2,
        2,
      ],
    ]
  `)
  expect(indices).toMatchObject([[2, 2], [2, 2]])
})

it('expected match: 8', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    '> written like so.\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        2,
        2,
      ],
      [
        2,
        2,
      ],
    ]
  `)
  expect(indices).toMatchObject([[2, 2], [2, 2]])
})

it('expected match: 9', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    '> They can span multiple paragraphs,\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        2,
        2,
      ],
      [
        2,
        2,
      ],
    ]
  `)
  expect(indices).toMatchObject([[2, 2], [2, 2]])
})

it('expected match: 10', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    '> if you like.\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        2,
        2,
      ],
      [
        2,
        2,
      ],
    ]
  `)
  expect(indices).toMatchObject([[2, 2], [2, 2]])
})

it('expected match: 11', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    ' 1. first item\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        4,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 4], [4, 4]])
})

it('expected match: 12', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    ' 2. second item\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        4,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 4], [4, 4]])
})

it('expected match: 13', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    ' 3. third item\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        4,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 4], [4, 4]])
})

it('expected match: 14', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    ' 1. First, get these ingredients:\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        4,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 4], [4, 4]])
})

it('expected match: 15', () => {
  const { indices, regex } = execute(
    '(^|\\G)([ ]{0,3})([*+-])([ \\t])',
    '      * carrots\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)([ ]{0,3})([*+-])([ \\t])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        8,
      ],
      [
        4,
        4,
      ],
      [
        4,
        6,
      ],
      [
        6,
        7,
      ],
      [
        7,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 8], [4, 4], [4, 6], [6, 7], [7, 8]])
})

it('expected match: 16', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    '      * carrots\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        8,
        8,
      ],
      [
        8,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[8, 8], [8, 8]])
})

it('expected match: 17', () => {
  const { indices, regex } = execute(
    '((^|\\G)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    '      * celery\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[4, 6], [4, 6], [4, 4], [4, 6], [4294967295, 4294967295]])
})

it('expected match: 18', () => {
  const { indices, regex } = execute(
    '(^|\\G)([ ]{0,3})([*+-])([ \\t])',
    '      * celery\n',
    6,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)([ ]{0,3})([*+-])([ \\t])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        6,
        8,
      ],
      [
        6,
        6,
      ],
      [
        6,
        6,
      ],
      [
        6,
        7,
      ],
      [
        7,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[6, 8], [6, 6], [6, 6], [6, 7], [7, 8]])
})

it('expected match: 19', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    '      * celery\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        8,
        8,
      ],
      [
        8,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[8, 8], [8, 8]])
})

it('expected match: 20', () => {
  const { indices, regex } = execute(
    '((^|\\G)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    '      * lentils\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[4, 6], [4, 6], [4, 4], [4, 6], [4294967295, 4294967295]])
})

it('expected match: 21', () => {
  const { indices, regex } = execute(
    '(^|\\G)([ ]{0,3})([*+-])([ \\t])',
    '      * lentils\n',
    6,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)([ ]{0,3})([*+-])([ \\t])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        6,
        8,
      ],
      [
        6,
        6,
      ],
      [
        6,
        6,
      ],
      [
        6,
        7,
      ],
      [
        7,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[6, 8], [6, 6], [6, 6], [6, 7], [7, 8]])
})

it('expected match: 22', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    '      * lentils\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        8,
        8,
      ],
      [
        8,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[8, 8], [8, 8]])
})

it('expected match: 23', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    ' 2. Boil some water.\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        4,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 4], [4, 4]])
})

it('expected match: 24', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    ' 3. Dump everything in the pot and follow\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        4,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 4], [4, 4]])
})

it('expected match: 25', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    '    this algorithm:\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        4,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 4], [4, 4]])
})

it('expected match: 26', () => {
  const { indices, regex } = execute(
    '(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))',
    '        find wooden spoon\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        8,
      ],
      [
        4,
        4,
      ],
      [
        4,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 8], [4, 4], [4, 8]])
})

it('expected match: 27', () => {
  const { indices, regex } = execute(
    '(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))',
    '        uncover pot\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        8,
      ],
      [
        4,
        4,
      ],
      [
        4,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 8], [4, 4], [4, 8]])
})

it('expected match: 28', () => {
  const { indices, regex } = execute(
    '(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))',
    '        stir\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        8,
      ],
      [
        4,
        4,
      ],
      [
        4,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 8], [4, 4], [4, 8]])
})

it('expected match: 29', () => {
  const { indices, regex } = execute(
    '(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))',
    '        cover pot\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        8,
      ],
      [
        4,
        4,
      ],
      [
        4,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 8], [4, 4], [4, 8]])
})

it('expected match: 30', () => {
  const { indices, regex } = execute(
    '(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))',
    '        balance wooden spoon precariously on pot handle\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        8,
      ],
      [
        4,
        4,
      ],
      [
        4,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 8], [4, 4], [4, 8]])
})

it('expected match: 31', () => {
  const { indices, regex } = execute(
    '(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))',
    '        wait 10 minutes\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        8,
      ],
      [
        4,
        4,
      ],
      [
        4,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 8], [4, 4], [4, 8]])
})

it('expected match: 32', () => {
  const { indices, regex } = execute(
    '(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))',
    '        goto first step (or shut off burner when done)\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        8,
      ],
      [
        4,
        4,
      ],
      [
        4,
        8,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 8], [4, 4], [4, 8]])
})

it('expected match: 33', () => {
  const { indices, regex } = execute(
    '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
    '    Do not bump wooden spoon or it will fall.\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(^)[ ]{0,3}(?=[^ \\t\\n])"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        4,
        4,
      ],
      [
        4,
        4,
      ],
    ]
  `)
  expect(indices).toMatchObject([[4, 4], [4, 4]])
})

it('expected match: 34', () => {
  const { indices, regex } = execute(
    '(?x)\n  (\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])\n                # Match the link text.\n  (\\()            # Opening paren for url\n    # The url\n      [ \\t]*\n      (\n         (<)((?:\\\\[<>]|[^<>\\n])*)(>)\n         | ((?<url>(?>[^\\s()]+)|\\(\\g<url>*\\))*)\n      )\n      [ \\t]*\n    # The title  \n    (?:\n        ((\\()[^()]*(\\)))    # Match title in parens…\n      | ((")[^"]*("))    # or in double quotes…\n      | ((\')[^\']*(\'))    # or in single quotes.\n    )?            # Title is optional\n    \\s*            # Optional whitespace\n  (\\))\n',
    'Here\'s a link to [a website](http://foo.bar), to a [local\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[17, 44], [17, 18], [18, 27], [26, 27], [27, 28], [28, 29], [29, 43], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [29, 43], [29, 43], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [43, 44]])
})

it('expected match: 35', () => {
  const { indices, regex } = execute(
    '(?x)\n  (\\!\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])\n                # Match the link text.\n  (\\()            # Opening paren for url\n    # The url\n      [ \\t]*\n      (\n         (<)((?:\\\\[<>]|[^<>\\n])*)(>)\n         | ((?<url>(?>[^\\s()]+)|\\(\\g<url>*\\))*)\n      )\n      [ \\t]*\n    (?:\n        ((\\().+?(\\)))    # Match title in parens…\n      | ((").+?("))    # or in double quotes…\n      | ((\').+?(\'))    # or in single quotes.\n    )?            # Title is optional\n    \\s*            # Optional whitespace\n  (\\))\n',
    '![example image](example-image.jpg "An exemplary image")\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 56], [0, 2], [2, 15], [14, 15], [15, 16], [16, 17], [17, 34], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [17, 34], [17, 34], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [35, 55], [35, 36], [54, 55], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [55, 56]])
})
