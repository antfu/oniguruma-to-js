import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/textmate',
    'src/detect',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
