import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '(?<=^|---|>|})',
    '// Your component script here!\n',
    30,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=^|---|>|})"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '(?<=^|---|>|})',
    'import Banner from \'../components/Banner.astro\';\n',
    48,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=^|---|>|})"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '(?<=^|---|>|})',
    'import ReactPokemonComponent from \'../components/ReactPokemonComponent.jsx\';\n',
    76,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=^|---|>|})"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 3', () => {
  const { match, indices, regex } = execute(
    '(?<=^|---|>|})',
    'const myFavoritePokemon = [/* ... */];\n',
    38,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=^|---|>|})"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})

it('unexpected match: 4', () => {
  const { match, indices, regex } = execute(
    '(?<=^|---|>|})',
    'const { title } = Astro.props;\n',
    30,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"(?<=^|---|>|})"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dg"`)
  expect.soft(match).toMatchInlineSnapshot(`null`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(match).toBe(null)
})
