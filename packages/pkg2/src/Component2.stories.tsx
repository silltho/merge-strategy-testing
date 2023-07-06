import type { Meta, StoryObj } from '@storybook/react'

import { Component2 } from './Component2'

const meta: Meta<typeof Component2> = {
  title: 'Component2',
  component: Component2,
}

export default meta
type Story = StoryObj<typeof Component2>

export const Default: Story = {
  args: {},
}
