import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '\\(',
    '        abs(mandelbrot(complex(x, y))) < 2 ? print("*") : print(" ")\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\("`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "(",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        11,
        12,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '\\(',
    '        abs(mandelbrot(complex(x, y))) < 2 ? print("*") : print(" ")\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\("`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "(",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        22,
        23,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '\\(',
    '        abs(mandelbrot(complex(x, y))) < 2 ? print("*") : print(" ")\n',
    23,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\("`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "(",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        30,
        31,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '\\(',
    '        abs(mandelbrot(complex(x, y))) < 2 ? print("*") : print(" ")\n',
    44,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\("`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "(",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        50,
        51,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 4', () => {
  const { match, indices, regex } = execute(
    '\\(',
    '        abs(mandelbrot(complex(x, y))) < 2 ? print("*") : print(" ")\n',
    57,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\("`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "(",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        63,
        64,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 5', () => {
  const { match, indices, regex } = execute(
    '\\(',
    '    println()\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\("`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "(",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        11,
        12,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '\\b(function|macro)(?:\\s+(?:(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*(\\.))?((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?|\\s*)(?=\\()',
    'function mandelbrot(a)\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([
    [
      0,
      19,
    ],
    [
      0,
      8,
    ],
    [
      4294967295,
      4294967295,
    ],
    [
      9,
      19,
    ],
    [
      4294967295,
      4294967295,
    ],
  ])
})
