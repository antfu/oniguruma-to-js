// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['textmate-grammars-themes'],
    type: 'lib',
  },
  {
    files: ['test/generated/*.test.ts'],
    rules: {
      'no-template-curly-in-string': 'off',
    },
  },
)
