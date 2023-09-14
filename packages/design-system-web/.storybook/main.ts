import type { StorybookConfig } from '@storybook/web-components-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../docs/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  staticDirs: ['../dist/design-system-web'],
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      build: {
        // our stories require top level await support
        // here we set the minimum targets supporting top level await,
        // as listed here https://caniuse.com/mdn-javascript_operators_await_top_level
        // and here https://esbuild.github.io/content-types/#javascript
        // (default is ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'])
        target: ['es2022', 'edge89', 'firefox89', 'chrome89', 'safari15'],
      },
    });
  },
};

export default config;
