import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '\\b(function|macro)(?:\\s+(?:(?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*(\\.))?((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?|\\s*)(?=\\()',
    'function mandelbrot(a)\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 19], [0, 8], [4294967295, 4294967295], [9, 19], [4294967295, 4294967295]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?\\.?(\\()',
    '        abs(mandelbrot(complex(x, y))) < 2 ? print("*") : print(" ")\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[8, 12], [8, 11], [4294967295, 4294967295], [11, 12]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?\\.?(\\()',
    '        abs(mandelbrot(complex(x, y))) < 2 ? print("*") : print(" ")\n',
    12,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[12, 23], [12, 22], [4294967295, 4294967295], [22, 23]])
})

it('expected match: 3', () => {
  const { indices, regex } = execute(
    '((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?\\.?(\\()',
    '        abs(mandelbrot(complex(x, y))) < 2 ? print("*") : print(" ")\n',
    23,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[23, 31], [23, 30], [4294967295, 4294967295], [30, 31]])
})

it('expected match: 4', () => {
  const { indices, regex } = execute(
    '((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?\\.?(\\()',
    '        abs(mandelbrot(complex(x, y))) < 2 ? print("*") : print(" ")\n',
    44,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[45, 51], [45, 50], [4294967295, 4294967295], [50, 51]])
})

it('expected match: 5', () => {
  const { indices, regex } = execute(
    '((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?\\.?(\\()',
    '        abs(mandelbrot(complex(x, y))) < 2 ? print("*") : print(" ")\n',
    57,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[58, 64], [58, 63], [4294967295, 4294967295], [63, 64]])
})

it('expected match: 6', () => {
  const { indices, regex } = execute(
    '((?:[[:alpha:]_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{So}←-⇿])(?:[[:word:]_!\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Sc}⅀-⅄∿⊾⊿⊤⊥∂∅-∇∎∏∐∑∞∟∫-∳⋀-⋃◸-◿♯⟘⟙⟀⟁⦰-⦴⨀-⨆⨉-⨖⨛⨜𝛁𝛛𝛻𝜕𝜵𝝏𝝯𝞉𝞩𝟃ⁱ-⁾₁-₎∠-∢⦛-⦯℘℮゛-゜𝟎-𝟡]|[^\\P{Mn}\u0001-¡]|[^\\P{Mc}\u0001-¡]|[^\\P{Nd}\u0001-¡]|[^\\P{Pc}\u0001-¡]|[^\\P{Sk}\u0001-¡]|[^\\P{Me}\u0001-¡]|[^\\P{No}\u0001-¡]|[′-‷⁗]|[^\\P{So}←-⇿])*)({(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*})?\\.?(\\()',
    '    println()\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[4, 12], [4, 11], [4294967295, 4294967295], [11, 12]])
})
