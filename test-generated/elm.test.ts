import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '((^(?=[a-z]))|^$)',
    'init : Model\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^(?=[a-z]))|^$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "",
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        13,
        13,
      ],
      [
        13,
        13,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '((^(?=[a-z]))|^$)',
    'update : Msg -> Model -> Model\n',
    31,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^(?=[a-z]))|^$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "",
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        31,
        31,
      ],
      [
        31,
        31,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '((^(?=[a-z]))|^$)',
    'view : Model -> Html Msg\n',
    25,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"((^(?=[a-z]))|^$)"`)
  expect.soft(regex.flags).toMatchInlineSnapshot(`"dgm"`)
  expect.soft(match).toMatchInlineSnapshot(`
    [
      "",
      "",
      undefined,
    ]
  `)
  expect.soft(indices).toMatchInlineSnapshot(`
    [
      [
        25,
        25,
      ],
      [
        25,
        25,
      ],
      [
        4294967295,
        4294967295,
      ],
    ]
  `)
  expect(match).toBe(null)
})
