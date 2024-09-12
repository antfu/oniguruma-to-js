import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '\\b(\\d+)\\b',
    '    local time     "Start: `start_time\'" _n(1) "End: `end_time\'"\n',
    44,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(\\d+)\\b"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        44,
        45,
      ],
      [
        44,
        45,
      ],
    ]
  `)
  expect(indices).toMatchObject([[44, 45], [44, 45]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '\\b(\\d+)\\b',
    '        local message "`progname\' finished running" _n(2) "`time\'"\n',
    55,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(\\d+)\\b"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        55,
        56,
      ],
      [
        55,
        56,
      ],
    ]
  `)
  expect(indices).toMatchObject([[55, 56], [55, 56]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '\\b(\\d+)\\b',
    '        local message "`progname\' ran but Stata gave error code r(`rc\')" _n(2) "`time\'"\n',
    76,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(\\d+)\\b"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        76,
        77,
      ],
      [
        76,
        77,
      ],
    ]
  `)
  expect(indices).toMatchObject([[76, 77], [76, 77]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '\\b(\\d+)\\b',
    '        local message "`progname\' stopped with error code r(`rc\')" _n(2) "`time\'"\n',
    70,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\b(\\d+)\\b"`)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        70,
        71,
      ],
      [
        70,
        71,
      ],
    ]
  `)
  expect(indices).toMatchObject([[70, 71], [70, 71]])
})
