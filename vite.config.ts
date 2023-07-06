import react from '@vitejs/plugin-react'
import { defineConfig, PluginOption, UserConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export type RootConfigOptions = {
  dependencies: Record<string, string>
  peerDependencies: Record<string, string>
  entry: string | string[]
  react: boolean
  fileName?: string
  outDir?: string
  entryFileNames?: string
  optimizeDeps?: UserConfig['optimizeDeps']
}

export function defineRootConfig(options: RootConfigOptions) {
  if (!options.fileName && !options.outDir) {
    throw new Error('Either fileName or outDir must be defined')
  }

  // convert externals into Regex to handle subpaths e.g. zustand/shallow
  // if not converted into regex external zustand !== zustand/shallow
  // so zustand/shallow would not treated as external dependency
  const external = [
    // 'react',
    // 'react-dom',
    // 'react/jsx-runtime',
    ...Object.keys(options.dependencies),
    ...Object.keys(options.peerDependencies),
  ].map((entry) => new RegExp(`${entry}($|/.*)`))

  const plugins: PluginOption[] = [
    tsconfigPaths({ root: process.cwd() }),
  ]

  if (options.react) {
    plugins.push(react({ jsxRuntime: 'classic' }))
  }

  return defineConfig({
    plugins,
    optimizeDeps: options.optimizeDeps,
    build: {
      minify: false, // minify produces broken builds (error: x is not defined)
      sourcemap: false, // due to not minifing there is no point in creating sourcemaps
      target: 'esnext',
      outDir: options.outDir,
      lib: {
        fileName: options.fileName,
        entry: options.entry,
        formats: ['es'],
      },
      rollupOptions: {
        external,
        output: {
          entryFileNames: options.entryFileNames,
          // globals: {
          //   react: 'React',
          //   'react-dom': 'ReactDOM',
          // },
        },
        // output: {
        //   preserveModules: true,
        //   entryFileNames: '[name].js',
        // },
      },
    },
  })
}
