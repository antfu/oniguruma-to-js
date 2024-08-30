import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/textmate',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
