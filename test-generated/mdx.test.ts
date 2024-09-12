import { expect, it } from 'vitest'
import { execute } from '../test/_execute'

it('expected match: 0', () => {
  const { indices, regex } = execute(
    '(?<=^|[^A-Za-z])(?i:https?://)(?=[\\p{L}\\p{N}])(?:(?:[\\p{L}\\p{N}]|-|[\\._](?!(?:[!"\'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))+\\g<path>?)?(?<path>(?:(?:[^\\t\\n\\r !"&\'\\(\\)\\*,\\.:;<\\?\\]_~]|&(?![A-Za-z]*;(?:[!"\'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[])))|[!"\'\\)\\*,\\.:;\\?_~](?!(?:[!"\'\\)\\*,\\.:;<\\?_~]*(?:[\\s<]|\\][\\t\\n \\(\\[]))))|\\(\\g<path>*\\))+){0}',
    '{/* From https://mdxjs.com/docs/what-is-mdx/#mdx-syntax */}\n',
    3,
  )
  expect.soft(regex.source).toMatchInlineSnapshot()
  expect.soft(indices).toMatchInlineSnapshot()
  expect(indices).toMatchObject([[9, 55], [26, 55]])
})
