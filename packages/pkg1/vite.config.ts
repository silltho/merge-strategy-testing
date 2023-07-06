import pkg from './package.json'
import { defineRootConfig } from '../../vite.config'

export default defineRootConfig({
  ...pkg,
  entry: 'src/index.ts',
  react: true,
  fileName: 'index',
})