/** @type { import('@storybook/html-vite').StorybookConfig } */
module.exports = {
  // "stories": ["../src/components/geov-carousel/geov-carousel.stories.tsx",
  // "../src/components/geov-entity-download-rdf/geov-entity-download-rdf.stories.tsx", "../docs/welcome.stories.tsx"],
  "stories": ["../docs/**/*.stories.mdx", "../docs/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/web-components-vite",
    options: {}
  },
  "staticDirs": ["../dist/design-system-web"],
  docs: {
    autodocs: 'tag'
  }
};