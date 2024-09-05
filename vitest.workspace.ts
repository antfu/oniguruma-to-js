import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    extends: 'vitest.config.ts',
    test: {
      name: 'unit',
      include: ['test/*.test.ts'],
    },
  },
  {
    extends: './vitest.config.ts',
    test: {
      name: 'generated',
      include: ['test-generated/*.test.ts'],
    },
  },
])
