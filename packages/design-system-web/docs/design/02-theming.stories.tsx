import { h } from '@stencil/core';
import { stencilWrapper } from '../../src/helpers/stencilWrapper';

export default {
  title: 'Design/Theming',
  parameters: {
    previewTabs: {
      'docs': { hidden: true },
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    options: {
      showPanel: false,
    },
  },
};

const example = `
/* in global.css */
:root {
  /* sets primary color to purple */
  --ion-color-primary: #6b46c1;
}
`;
const example2 = `
/* in global.css */
ion-button {
  /* sets button border radius (even inside Geovistory components) */
  --border-radius: 15px;
}
`;
export const Theming = stencilWrapper(
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>Theming</h1>
        <p class="lead">One advantage of Ionic components is that they are stylable. A custom theme can be defined with CSS variables (without extra compilation).</p>
        <p>
          Ionic components have a default style for colors, border radius, fonts. In this documentation we set CSS variables to implement the Geovistory theme. This CSS is not
          shipped with the npm packages (see below), since it has to be set by the consuming application of the design system.
        </p>
        <h2>How to customize the theme?</h2>
        <h4>Global CSS variables</h4>
        <p>
          Let say you want to use our family tree component in your project, but our purple does not fit with your green. No problem, just change the{' '}
          <code>--ion-color-primary</code> CSS variable, and all purple will be replaced with your color! Global CSS variables are documented in the{' '}
          <a target="_blank" href="https://ionicframework.com/docs/api">
            offical ionic documentation
          </a>
          .
        </p>
        <p>
          <geov-code language="scss" code={example}></geov-code>
        </p>
        <h4>Component CSS custom properties</h4>
        <p>
          Moreover, each ionic component has CSS custom properties. CSS custom properties are documented for each component, see for example{' '}
          <a target="_blank" href="https://ionicframework.com/docs/api/button#css-custom-properties">
            button CSS custom properties
          </a>
          . For example you could change the border radius of <code>ion-buttons</code>:
        </p>
        <p>
          <geov-code language="scss" code={example2}></geov-code>
        </p>
        <p>Change this property for the ion-button element, and all buttons, even in Geovistory components will change! .</p>
        <h4>Theme Generator</h4>
        <p>
          To simplify the life of developers, we created a <a href="/?path=/story/design-theme-generator--page">Theme generator</a> in which you can set the colors, fonts,
          parameters... as you want, and directly see the result.
        </p>
        <p>Once you are comfortable with every tweak, you can copy-paste the CSS containing the CSS variables and put them in your application.</p>
      </ion-grid>
    </ion-content>
  </ion-app>,
);
