module.exports = {
  "stories": [
    "../docs/**/*.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-design-token'
  ],
  "framework": "@storybook/html",
  "staticDirs": ["../dist/design-system-web"],

}
