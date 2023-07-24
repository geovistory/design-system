/** @type { import('@storybook/html-vite').StorybookConfig } */
module.exports = {
  stories: ['../docs/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  staticDirs: ['../dist/design-system-web'],
  docs: {
    autodocs: 'tag',
  },
};
