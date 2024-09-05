import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('unexpected match: 0', () => {
  const { match, indices, regex } = execute(
    '((^(?=[a-z]))|^$)',
    'init : Model\n',
    13,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(match).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(match).toBe(null)
})

it('unexpected match: 1', () => {
  const { match, indices, regex } = execute(
    '((^(?=[a-z]))|^$)',
    'update : Msg -> Model -> Model\n',
    31,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(match).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(match).toBe(null)
})

it('unexpected match: 2', () => {
  const { match, indices, regex } = execute(
    '((^(?=[a-z]))|^$)',
    'view : Model -> Html Msg\n',
    25,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(match).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(match).toBe(null)
})
