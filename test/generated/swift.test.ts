import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?x)\n(?=\n  (?<oph>                # operator-head\n    [/=\\-+!*%<>&|^~?]\n    | [\\x{00A1}-\\x{00A7}]\n    | [\\x{00A9}\\x{00AB}]\n    | [\\x{00AC}\\x{00AE}]\n    | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n    | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n    | [\\x{2030}-\\x{203E}]\n    | [\\x{2041}-\\x{2053}]\n    | [\\x{2055}-\\x{205E}]\n    | [\\x{2190}-\\x{23FF}]\n    | [\\x{2500}-\\x{2775}]\n    | [\\x{2794}-\\x{2BFF}]\n    | [\\x{2E00}-\\x{2E7F}]\n    | [\\x{3001}-\\x{3003}]\n    | [\\x{3008}-\\x{3030}]\n  )\n  | \\.\n  (\n    \\g<oph>              # operator-head\n    | \\.\n    | [\\x{0300}-\\x{036F}]        # operator-character\n    | [\\x{1DC0}-\\x{1DFF}]\n    | [\\x{20D0}-\\x{20FF}]\n    | [\\x{FE00}-\\x{FE0F}]\n    | [\\x{FE20}-\\x{FE2F}]\n    | [\\x{E0100}-\\x{E01EF}]\n  )\n)',
    '        return rooms.count\n',
    14,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?=(?<oph>[/=\\-+!*%<>&|^~?]|[\\u00A1-\\u00A7]|[\\u00A9\\u00AB]|[\\u00AC\\u00AE]|[\\u00B0-\\u00B1\\u00B6\\u00BB\\u00BF\\u00D7\\u00F7]|[\\u2016-\\u2017\\u2020-\\u2027]|[\\u2030-\\u203E]|[\\u2041-\\u2053]|[\\u2055-\\u205E]|[\\u2190-\\u23FF]|[\\u2500-\\u2775]|[\\u2794-\\u2BFF]|[\\u2E00-\\u2E7F]|[\\u3001-\\u3003]|[\\u3008-\\u3030])|\\.(\\g<oph>|\\.|[\\u0300-\\u036F]|[\\u1DC0-\\u1DFF]|[\\u20D0-\\u20FF]|[\\uFE00-\\uFE0F]|[\\uFE20-\\uFE2F]|[\\uE0100-\\uE01EF]))"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      undefined,
      "c",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        20,
        20,
      ],
      [
        4294967295,
        4294967295,
      ],
      [
        21,
        22,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?x)\n\\b\n(func)\n\\s+\n(\n  (?<q>`?)[\\p{L}_][\\p{L}_\\p{N}\\p{M}]*(\\k<q>)\n  | (?:\n    (\n      (?<oph>                # operator-head\n        [/=\\-+!*%<>&|^~?]\n        | [\\x{00A1}-\\x{00A7}]\n        | [\\x{00A9}\\x{00AB}]\n        | [\\x{00AC}\\x{00AE}]\n        | [\\x{00B0}-\\x{00B1}\\x{00B6}\\x{00BB}\\x{00BF}\\x{00D7}\\x{00F7}]\n        | [\\x{2016}-\\x{2017}\\x{2020}-\\x{2027}]\n        | [\\x{2030}-\\x{203E}]\n        | [\\x{2041}-\\x{2053}]\n        | [\\x{2055}-\\x{205E}]\n        | [\\x{2190}-\\x{23FF}]\n        | [\\x{2500}-\\x{2775}]\n        | [\\x{2794}-\\x{2BFF}]\n        | [\\x{2E00}-\\x{2E7F}]\n        | [\\x{3001}-\\x{3003}]\n        | [\\x{3008}-\\x{3030}]\n      )\n      (\n        \\g<oph>\n        | (?<opc>                # operator-character\n          [\\x{0300}-\\x{036F}]\n          | [\\x{1DC0}-\\x{1DFF}]\n          | [\\x{20D0}-\\x{20FF}]\n          | [\\x{FE00}-\\x{FE0F}]\n          | [\\x{FE20}-\\x{FE2F}]\n          | [\\x{E0100}-\\x{E01EF}]\n        )\n      )*\n    )\n    | ( \\. ( \\g<oph> | \\g<opc> | \\. )+ )      # Dot operators\n  )\n)\n\\s*\n(?=\\(|<)',
    '    func printNumberOfRooms() {\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      4,
      27,
    ],
    [
      4,
      8,
    ],
    [
      9,
      27,
    ],
    [
      9,
      9,
    ],
    [
      27,
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
      4294967295,
      4294967295,
    ],
    [
      4294967295,
      4294967295,
    ],
  ])
})
