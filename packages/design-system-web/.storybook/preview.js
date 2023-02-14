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
        'Getting Started',
        'Design', ['Overview', 'Layout', 'Typography', 'Theming', 'Theme Generator', 'Theme Generator Color'],
        'Contributing'
      ],
    },
  },
  darkMode: {
    stylePreview: true,
    classTarget: 'body'
  }
}
