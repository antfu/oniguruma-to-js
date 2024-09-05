import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    'name: Check dist/\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 0], [3, 4], [5, 6]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    'name: Check dist/\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 1]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    'name: Check dist/\n',
    5,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[6, 7]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    'on:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 0], [1, 2], [3, 4]])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '  push:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[2, 2], [5, 6], [7, 8]])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '  push:\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[2, 3]])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '    branches:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 4], [11, 12], [13, 14]])
})

it('expected match: 7', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '    branches:\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 5]])
})

it('expected match: 8', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '      - main\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 9', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '    paths-ignore:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 4], [15, 16], [17, 18]])
})

it('expected match: 10', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '    paths-ignore:\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 5]])
})

it('expected match: 11', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '  pull_request:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[2, 2], [13, 14], [15, 16]])
})

it('expected match: 12', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '  pull_request:\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[2, 3]])
})

it('expected match: 13', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '    paths-ignore:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 4], [15, 16], [17, 18]])
})

it('expected match: 14', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '    paths-ignore:\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 5]])
})

it('expected match: 15', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    'jobs:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 0], [3, 4], [5, 6]])
})

it('expected match: 16', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    'jobs:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 1]])
})

it('expected match: 17', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '  check-dist:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[2, 2], [11, 12], [13, 14]])
})

it('expected match: 18', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '  check-dist:\n',
    2,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[2, 3]])
})

it('expected match: 19', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '    runs-on: ubuntu-latest\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 4], [10, 11], [12, 13]])
})

it('expected match: 20', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '    runs-on: ubuntu-latest\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 5]])
})

it('expected match: 21', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '    runs-on: ubuntu-latest\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[13, 14]])
})

it('expected match: 22', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '    steps:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 4], [8, 9], [10, 11]])
})

it('expected match: 23', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '    steps:\n',
    4,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 5]])
})

it('expected match: 24', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '      - uses: actions/checkout@v3\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [11, 12], [13, 14]])
})

it('expected match: 25', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '      - uses: actions/checkout@v3\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 26', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '      - uses: actions/checkout@v3\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[14, 15]])
})

it('expected match: 27', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '      - name: Set Node.js 16.x\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [11, 12], [13, 14]])
})

it('expected match: 28', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '      - name: Set Node.js 16.x\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 29', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '      - name: Set Node.js 16.x\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[14, 15]])
})

it('expected match: 30', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        uses: actions/setup-node@v3\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [11, 12], [13, 14]])
})

it('expected match: 31', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '        uses: actions/setup-node@v3\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 32', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '        uses: actions/setup-node@v3\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[14, 15]])
})

it('expected match: 33', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        with:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [11, 12], [13, 14]])
})

it('expected match: 34', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '        with:\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 35', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '          node-version: 16.x\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 10], [21, 22], [23, 24]])
})

it('expected match: 36', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '          node-version: 16.x\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 37', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '          node-version: 16.x\n',
    23,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[24, 25]])
})

it('expected match: 38', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '          cache: npm\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 10], [14, 15], [16, 17]])
})

it('expected match: 39', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '          cache: npm\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 40', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '          cache: npm\n',
    16,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[17, 18]])
})

it('expected match: 41', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '      - name: Install dependencies\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [11, 12], [13, 14]])
})

it('expected match: 42', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '      - name: Install dependencies\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 43', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '      - name: Install dependencies\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[14, 15]])
})

it('expected match: 44', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        run: npm ci\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [10, 11], [12, 13]])
})

it('expected match: 45', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '        run: npm ci\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 46', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '        run: npm ci\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[13, 14]])
})

it('expected match: 47', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '      - name: Rebuild the dist/ directory\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [11, 12], [13, 14]])
})

it('expected match: 48', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '      - name: Rebuild the dist/ directory\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 49', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '      - name: Rebuild the dist/ directory\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[14, 15]])
})

it('expected match: 50', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        run: |\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [10, 11], [12, 13]])
})

it('expected match: 51', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '        run: |\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 52', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '      - name: Compare the expected and actual dist/ directories\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [11, 12], [13, 14]])
})

it('expected match: 53', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '      - name: Compare the expected and actual dist/ directories\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 54', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '      - name: Compare the expected and actual dist/ directories\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[14, 15]])
})

it('expected match: 55', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        run: |\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [10, 11], [12, 13]])
})

it('expected match: 56', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '        run: |\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 57', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        id: diff\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [9, 10], [11, 12]])
})

it('expected match: 58', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '        id: diff\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 59', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '        id: diff\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 13]])
})

it('expected match: 60', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '      - uses: actions/upload-artifact@v3\n',
    7,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [11, 12], [13, 14]])
})

it('expected match: 61', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '      - uses: actions/upload-artifact@v3\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 62', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '      - uses: actions/upload-artifact@v3\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[14, 15]])
})

it('expected match: 63', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        if: ${{ failure() && steps.diff.conclusion == \'failure\' }}\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [9, 10], [11, 12]])
})

it('expected match: 64', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '        if: ${{ failure() && steps.diff.conclusion == \'failure\' }}\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 65', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '        if: ${{ failure() && steps.diff.conclusion == \'failure\' }}\n',
    11,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 13]])
})

it('expected match: 66', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '        with:\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 8], [11, 12], [13, 14]])
})

it('expected match: 67', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '        with:\n',
    8,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 9]])
})

it('expected match: 68', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '          name: dist\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 10], [13, 14], [15, 16]])
})

it('expected match: 69', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '          name: dist\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 70', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '          name: dist\n',
    15,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[16, 17]])
})

it('expected match: 71', () => {
  const { indices, regex } = execute(
    '(?x)\n                        (?=\n                            (?x:\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            )\n                            (\n                                  [^\\s:]\n                                | : \\S\n                                | \\s+ (?![#\\s])\n                            )*\n                            \\s*\n                            :\n\t\t\t\t\t\t\t(\\s|$)\n                        )\n                    ',
    '          path: dist/\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 10], [13, 14], [15, 16]])
})

it('expected match: 72', () => {
  const { indices, regex } = execute(
    '(?x)\n                                  [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                                | [?:-] \\S\n                            ',
    '          path: dist/\n',
    10,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[10, 11]])
})

it('expected match: 73', () => {
  const { indices, regex } = execute(
    '(?x)\n                          [^\\s[-?:,\\[\\]{}#&*!|>\'"%@`]]\n                        | [?:-] \\S\n                    ',
    '          path: dist/\n',
    15,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[16, 17]])
})
