import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: 'generated',
    include: ['test-generated/*.test.ts'],
  },
})
