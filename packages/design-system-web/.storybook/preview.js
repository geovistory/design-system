import { defineCustomElements } from '../loader'

defineCustomElements()

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Welcome',
        'Design',
        'Advanced Components',
        'Basic Components',
        'Grid Components',
        'Contributing',
      ],
    },
  },
}
