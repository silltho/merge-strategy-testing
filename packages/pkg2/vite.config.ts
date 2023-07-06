import pkg from './package.json'
import { defineRootConfig } from '../../vite.config'

delete (pkg.dependencies as any)['@nativewaves/nw-exp-foundation']

export default defineRootConfig({
  dependencies: pkg.dependencies,
  peerDependencies: pkg.peerDependencies,
  entry: 'src/index.ts',
  react: true,
  fileName: 'index',
})