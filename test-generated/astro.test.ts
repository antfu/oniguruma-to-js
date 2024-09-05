import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?<=^|---|>|})',
    '// Your component script here!\n',
    30,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=^|---|>|})"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        31,
        31,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '(?<=^|---|>|})',
    'import Banner from \'../components/Banner.astro\';\n',
    48,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=^|---|>|})"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        49,
        49,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '(?<=^|---|>|})',
    'import ReactPokemonComponent from \'../components/ReactPokemonComponent.jsx\';\n',
    76,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=^|---|>|})"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        77,
        77,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '(?<=^|---|>|})',
    'const myFavoritePokemon = [/* ... */];\n',
    38,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=^|---|>|})"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        39,
        39,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 4', () => {
  const { match, indices, regex } = execute(
    '(?<=^|---|>|})',
    'const { title } = Astro.props;\n',
    30,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=^|---|>|})"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        31,
        31,
      ],
    ]
  `)
  expect(match).toBe(null)
})
