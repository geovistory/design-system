export const parameters = {
  viewMode: 'docs', // docs tab by default
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
        'Contributing', ['CI And CD Workflow', 'Tutorial', ['Introduction', 'Setup', 'Create Component', 'Data Fetching', 'Component Props', 'Create Data Visualization Component', 'Server Side Rendering']],
      ],
    },
  },
  darkMode: {
    stylePreview: true,
    classTarget: 'body'
  }
}
