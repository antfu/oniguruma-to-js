import { expect, it } from 'vitest'
import { detectRegexFeatures } from '../src/detect'

it('basics', () => {
  expect(detectRegexFeatures(''))
    .toMatchInlineSnapshot(`Set {}`)

  expect(detectRegexFeatures('(?x)'))
    .toMatchInlineSnapshot(`
      Set {
        "x",
      }
    `)

  expect(detectRegexFeatures('\\g\\G\\h\\H\\s'))
    .toMatchInlineSnapshot(`
      Set {
        "\\g",
        "\\G",
        "\\h",
        "\\H",
        "\\s",
      }
    `)

  expect(detectRegexFeatures('[:digits:]'))
    .toMatchInlineSnapshot(`
      Set {
        "[:digits:]",
      }
    `)

  expect(detectRegexFeatures('(?^foo)'))
    .toMatchInlineSnapshot(`
      Set {
        "(?^",
      }
    `)

  expect(detectRegexFeatures('(?<=foo)'))
    .toMatchInlineSnapshot(`
      Set {
        "(?<=",
        "(?<",
      }
    `)
})
