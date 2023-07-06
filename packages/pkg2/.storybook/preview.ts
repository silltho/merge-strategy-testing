import { Preview } from '@storybook/react'

export const decorators = []

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'dark'
  },
  options: {
    storySort: {
      order: ['Intro'],
    },
  },
  controls: { expanded: true },
}

const preview: Preview = {
  decorators,
  parameters
}

export default preview
