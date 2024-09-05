import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '((^|\\G)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    '  * the other one\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgmy"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    'Note that --- not considering the asterisk --- the actual text\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
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
        63,
        63,
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
        63,
        63,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    ' 2. second item\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
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
        16,
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
      [
        4294967295,
        4294967295,
      ],
      [
        16,
        16,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    ' 3. third item\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
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
        15,
        15,
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
        15,
        15,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 4', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    'Note again how the actual text starts at 4 columns in (4 characters\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
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
        68,
        68,
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
        68,
        68,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 5', () => {
  const { match, indices, regex } = execute(
    '((^|\\G)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    '      * lentils\n',
    6,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgmy"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 6', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    ' 2. Boil some water.\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
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
        21,
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
        21,
        21,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 7', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    ' 3. Dump everything in the pot and follow\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
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
        42,
        42,
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
        42,
        42,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 8', () => {
  const { match, indices, regex } = execute(
    '((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)',
    'Notice again how text always lines up on 4-space indents (including\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^|\\￿)([ ]{2,4}|\\t))|(^[ \\t]*$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
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
        68,
        68,
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
        68,
        68,
      ],
    ]
  `)
  expect(match).toBe(null)
})
