import { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-actions', '@storybook/addon-controls', '@storybook/addon-viewport', '@storybook/addon-backgrounds'],
  async viteFinal(config: any) {
    const mergedConfig = mergeConfig(config, {
      build: {
        sourcemap: false,
      },
    })
    return mergedConfig
  },
};
export default config;
