import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '^\\s*(`?(?:(?:[$[:alpha:]][$[:alnum:]]*)`)*)((?:[$[:alpha:]][$[:alnum:]]*))(?=\\s*(\\[(?>[^\\[\\]]+|\\g<-1>)*\\])\\s*(?:/;.*)?(?::=|=(?!!|=|\\.)))',
    'iStochasticityAssumptions [sm_List] :=\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 25], [0, 0], [0, 25], [26, 35]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '^\\s*(`?(?:(?:[$[:alpha:]][$[:alnum:]]*)`)*)((?:[$[:alpha:]][$[:alnum:]]*))(?=\\s*(\\[(?>[^\\[\\]]+|\\g<-1>)*\\])\\s*(?:/;.*)?(?::=|=(?!!|=|\\.)))',
    'iStochasticityAssumptions[sm_SparseArray] := SquareMatrixQ[sm] &&\n',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[0, 25], [0, 0], [0, 25], [25, 41]])
})
