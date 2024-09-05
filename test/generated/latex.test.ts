import { expect, it } from 'vitest'
import { execute } from '../_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)([^\\]]*)(\\])){,2}(?:(\\{)([^{}]*)(\\}))?',
    '% The preamble ends with the command \\begin{document}',
    36,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)([^\\]]*)(\\])){,2}(?:(\\{)([^{}]*)(\\}))?"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[36, 53], [37, 43], [37, 38], [43, 44], [44, 52], [52, 53], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 1', () => {
  const { indices, regex } = execute(
    '\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)([^\\]]*)(\\])){,2}(?:(\\{)([^{}]*)(\\}))?',
    '\\begin{document}',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)([^\\]]*)(\\])){,2}(?:(\\{)([^{}]*)(\\}))?"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[0, 16], [0, 6], [0, 1], [6, 7], [7, 15], [15, 16], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295]])
})

it('expected match: 2', () => {
  const { indices, regex } = execute(
    '\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)([^\\]]*)(\\])){,2}(?:(\\{)([^{}]*)(\\}))?',
    '\\end{document}',
    0,
  )
  expect.soft(regex.source).toMatchInlineSnapshot(`"\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)([^\\]]*)(\\])){,2}(?:(\\{)([^{}]*)(\\}))?"`)
  expect.soft(indices).toMatchInlineSnapshot(`[]`)
  expect(indices).toMatchObject([[0, 14], [0, 4], [0, 1], [4, 5], [5, 13], [13, 14], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295], [4294967295, 4294967295]])
})
