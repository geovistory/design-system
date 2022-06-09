module.exports = {
  "stories": [
    "../docs/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-design-token'
  ],
  "framework": "@storybook/html"
}