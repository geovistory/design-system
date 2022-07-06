module.exports = {
  "stories": [
    "../docs/**/*.stories.mdx",
    "../docs/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    'storybook-design-token',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "staticDirs": ["../dist/design-system-web"],

}
