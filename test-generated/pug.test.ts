import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '^\\s*',
    'doctype html\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^\\s*"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        13,
        13,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '^\\s*',
    'html(lang="en")\n',
    15,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^\\s*"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        16,
        16,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '^\\s*',
    '  head\n',
    6,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^\\s*"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        7,
        7,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '^\\s*',
    '    title= pageTitle\n',
    20,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^\\s*"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        21,
        21,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 4', () => {
  const { match, indices, regex } = execute(
    '^\\s*',
    '  body\n',
    6,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^\\s*"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        7,
        7,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 5', () => {
  const { match, indices, regex } = execute(
    '^\\s*',
    '    h1 Pug - node template engine\n',
    33,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^\\s*"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        34,
        34,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 6', () => {
  const { match, indices, regex } = execute(
    '^\\s*',
    '    #container.col\n',
    18,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^\\s*"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        19,
        19,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 7', () => {
  const { match, indices, regex } = execute(
    '^\\s*',
    '      if youAreUsingPug\n',
    23,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^\\s*"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        24,
        24,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 8', () => {
  const { match, indices, regex } = execute(
    '^\\s*',
    '        p You are amazing\n',
    25,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^\\s*"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        26,
        26,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 9', () => {
  const { match, indices, regex } = execute(
    '^\\s*',
    '      else\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^\\s*"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        11,
        11,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 10', () => {
  const { match, indices, regex } = execute(
    '^\\s*',
    '        p Get on it!\n',
    20,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"^\\s*"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        21,
        21,
      ],
    ]
  `)
  expect(match).toBe(null)
})
