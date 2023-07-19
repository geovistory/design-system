/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import type { Preview } from '@storybook/web-components';
import React from 'react';
import { defineCustomElements } from '../loader';

// register geov web components
defineCustomElements()


const preview: Preview = {
  parameters: {
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
          'Data Components', ['Authority Lookup', 'Authority Lookup Explorer'],
          'Data Visualization Components'
        ],
      },
    },
    darkMode: {
      stylePreview: true,
      classTarget: 'body'
    }
  }
}
export default preview;

