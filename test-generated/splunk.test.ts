import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?i)\\b(as|by|or|and|over|where|output|outputnew)\\b|(?-i)\\b(NOT|true|false)\\b',
    '| timechart limit=0 useother=f span=30s avg(cpu_user_pct) AS avg,max(cpu_user_pct) AS max by host\n',
    56,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(as|by|or|and|over|where|output|outputnew)\\b|\\b(NOT|true|false)\\b"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        90,
        92,
      ],
      [
        90,
        92,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(indices).toMatchObject([[58, 60], [58, 60], [4294967295, 4294967295]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?i)\\b(as|by|or|and|over|where|output|outputnew)\\b|(?-i)\\b(NOT|true|false)\\b',
    '| timechart limit=0 useother=f span=30s avg(cpu_user_pct) AS avg,max(cpu_user_pct) AS max by host\n',
    81,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(as|by|or|and|over|where|output|outputnew)\\b|\\b(NOT|true|false)\\b"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        90,
        92,
      ],
      [
        90,
        92,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(indices).toMatchObject([[83, 85], [83, 85], [4294967295, 4294967295]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?i)\\b(as|by|or|and|over|where|output|outputnew)\\b|(?-i)\\b(NOT|true|false)\\b',
    '| timechart limit=0 useother=f span=1m max(used_pct) AS max_used,max(swap_used_pct) AS max_swap_used by host\n',
    51,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(as|by|or|and|over|where|output|outputnew)\\b|\\b(NOT|true|false)\\b"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        101,
        103,
      ],
      [
        101,
        103,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(indices).toMatchObject([[53, 55], [53, 55], [4294967295, 4294967295]])
})
