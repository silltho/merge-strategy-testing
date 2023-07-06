import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

const theme = create({
  base: 'dark',

  // Typography
  fontBase: '"Roboto", sans-serif',

  brandTitle: 'Nativewaves - Internals',
  brandUrl: 'https://nativewaves.com',
  brandImage:
    'https://www.nativewaves.com/wp-content/uploads/2019/08/cropped-NativeWaves_Logo_Wide_Rev-1-2.png',
})

addons.setConfig({
  theme,
  showPanel: true,
  panelPosition: 'bottom',
})
