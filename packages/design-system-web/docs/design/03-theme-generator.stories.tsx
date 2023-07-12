import { h } from '@stencil/core';
import { stencilWrapper } from '../../src/helpers/stencilWrapper';

export default {
  title: 'Design/Theme Generator',
  parameters: {
    previewTabs: {
      'docs': { hidden: true },
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    options: { showPanel: true },
  },
};

const code = ':root{...}';
const css = `
  .title {width: 150px; height: 30px; text-align: center; }
  .box {width: 150px; height: 30px; }
`;

function embedCSS(css) {
  return `\`:root {
  ${css}
}\`
  `;
}

function getColorCSS() {
  return `
/***************************/
/***** Color variables *****/
/***************************/

\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary') ? '' : '/*') + '--ion-color-primary: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-rgb') ? '' : '/*') + '--ion-color-primary-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-contrast') ? '' : '/*') + '--ion-color-primary-contrast: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-contrast') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-contrast') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-contrast-rgb') ? '' : '/*') + '--ion-color-primary-contrast-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-contrast-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-contrast-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-shade') ? '' : '/*') + '--ion-color-primary-shade: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-shade') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-shade') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-tint') ? '' : '/*') + '--ion-color-primary-tint: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-tint') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary-tint') ? '' : '*/') + \`

\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary') ? '' : '/*') + '--ion-color-secondary: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-rgb') ? '' : '/*') + '--ion-color-secondary-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-contrast') ? '' : '/*') + '--ion-color-secondary-contrast: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-contrast') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-contrast') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-contrast-rgb') ? '' : '/*') + '--ion-color-secondary-contrast-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-contrast-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-contrast-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-shade') ? '' : '/*') + '--ion-color-secondary-shade: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-shade') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-shade') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-tint') ? '' : '/*') + '--ion-color-secondary-tint: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-tint') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-secondary-tint') ? '' : '*/') + \`

\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary') ? '' : '/*') + '--ion-color-tertiary: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-rgb') ? '' : '/*') + '--ion-color-tertiary-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-contrast') ? '' : '/*') + '--ion-color-tertiary-contrast: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-contrast') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-contrast') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-contrast-rgb') ? '' : '/*') + '--ion-color-tertiary-contrast-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-contrast-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-contrast-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-shade') ? '' : '/*') + '--ion-color-tertiary-shade: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-shade') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-shade') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-tint') ? '' : '/*') + '--ion-color-tertiary-tint: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-tint') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary-tint') ? '' : '*/') + \`

\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success') ? '' : '/*') + '--ion-color-success: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-rgb') ? '' : '/*') + '--ion-color-success-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-contrast') ? '' : '/*') + '--ion-color-success-contrast: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-contrast') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-contrast') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-contrast-rgb') ? '' : '/*') + '--ion-color-success-contrast-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-contrast-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-contrast-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-shade') ? '' : '/*') + '--ion-color-success-shade: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-shade') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-shade') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-tint') ? '' : '/*') + '--ion-color-success-tint: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-tint') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success-tint') ? '' : '*/') + \`

\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning') ? '' : '/*') + '--ion-color-warning: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-rgb') ? '' : '/*') + '--ion-color-warning-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-contrast') ? '' : '/*') + '--ion-color-warning-contrast: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-contrast') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-contrast') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-contrast-rgb') ? '' : '/*') + '--ion-color-warning-contrast-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-contrast-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-contrast-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-shade') ? '' : '/*') + '--ion-color-warning-shade: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-shade') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-shade') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-tint') ? '' : '/*') + '--ion-color-warning-tint: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-tint') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning-tint') ? '' : '*/') + \`

\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger') ? '' : '/*') + '--ion-color-danger: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-rgb') ? '' : '/*') + '--ion-color-danger-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-contrast') ? '' : '/*') + '--ion-color-danger-contrast: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-contrast') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-contrast') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-contrast-rgb') ? '' : '/*') + '--ion-color-danger-contrast-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-contrast-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-contrast-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-shade') ? '' : '/*') + '--ion-color-danger-shade: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-shade') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-shade') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-tint') ? '' : '/*') + '--ion-color-danger-tint: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-tint') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger-tint') ? '' : '*/') + \`

\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark') ? '' : '/*') + '--ion-color-dark: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-rgb') ? '' : '/*') + '--ion-color-dark-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-contrast') ? '' : '/*') + '--ion-color-dark-contrast: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-contrast') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-contrast') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-contrast-rgb') ? '' : '/*') + '--ion-color-dark-contrast-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-contrast-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-contrast-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-shade') ? '' : '/*') + '--ion-color-dark-shade: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-shade') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-shade') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-tint') ? '' : '/*') + '--ion-color-dark-tint: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-tint') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-dark-tint') ? '' : '*/') + \`

\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium') ? '' : '/*') + '--ion-color-medium: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-rgb') ? '' : '/*') + '--ion-color-medium-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-contrast') ? '' : '/*') + '--ion-color-medium-contrast: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-contrast') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-contrast') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-contrast-rgb') ? '' : '/*') + '--ion-color-medium-contrast-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-contrast-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-contrast-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-shade') ? '' : '/*') + '--ion-color-medium-shade: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-shade') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-shade') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-tint') ? '' : '/*') + '--ion-color-medium-tint: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-tint') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-medium-tint') ? '' : '*/') + \`

\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light') ? '' : '/*') + '--ion-color-light: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-rgb') ? '' : '/*') + '--ion-color-light-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-contrast') ? '' : '/*') + '--ion-color-light-contrast: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-contrast') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-contrast') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-contrast-rgb') ? '' : '/*') + '--ion-color-light-contrast-rgb: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-contrast-rgb') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-contrast-rgb') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-shade') ? '' : '/*') + '--ion-color-light-shade: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-shade') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-shade') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-tint') ? '' : '/*') + '--ion-color-light-tint: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-tint') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-color-light-tint') ? '' : '*/') + \`
`;
}

function getApplicationVariablesCSS() {
  return `

/***************************/
/** Application variables **/
/***************************/

\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-font-family') ? '' : '/*') + '--ion-font-family: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-font-family') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-font-family') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-statusbar-padding') ? '' : '/*') + '--ion-statusbar-padding: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-statusbar-padding') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-statusbar-padding') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-top') ? '' : '/*') + '--ion-safe-area-top: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-top') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-top') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-top') ? '' : '/*') + '--ion-safe-area-top: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-top') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-top') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-right') ? '' : '/*') + '--ion-safe-area-right: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-right') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-right') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-left') ? '' : '/*') + '--ion-safe-area-left: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-left') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-safe-area-left') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-margin') ? '' : '/*') + '--ion-margin: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-margin') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-margin') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-padding') ? '' : '/*') + '--ion-padding: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-padding') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-padding') ? '' : '*/') + \`
`;
}

function getGridVariablesCSS() {
  return `

/***************************/
/***** Grid variables ******/
/***************************/

\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-columns') ? '' : '/*') + '--ion-grid-columns: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-columns') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('ion-grid-columns') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-xs') ? '' : '/*') + '--ion-grid-padding-xs: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-xs') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-xs') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-sm') ? '' : '/*') + '--ion-grid-padding-sm: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-sm') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-sm') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-md') ? '' : '/*') + '--ion-grid-padding-md: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-md') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-md') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-lg') ? '' : '/*') + '--ion-grid-padding-lg: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-lg') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-lg') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-xl') ? '' : '/*') + '--ion-grid-padding-xl: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-xl') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-padding-xl') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-xs') ? '' : '/*') + '--ion-grid-column-padding-xs: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-xs') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-xs') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-sm') ? '' : '/*') + '--ion-grid-column-padding-sm: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-sm') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-sm') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-md') ? '' : '/*') + '--ion-grid-column-padding-md: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-md') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-md') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-lg') ? '' : '/*') + '--ion-grid-column-padding-lg: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-lg') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-lg') ? '' : '*/') + \`
\` + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-xl') ? '' : '/*') + '--ion-grid-column-padding-xl: ' + getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-xl') + ';' + (getComputedStyle(document.documentElement).getPropertyValue('--ion-grid-column-padding-xl') ? '' : '*/') + \`
`;
}
export const ThemeGenerator = stencilWrapper(
  <ion-app>
    <style>{css}</style>

    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>Theme Generator</h1>
        <p class="lead">
          This theme generator let you play with the <a href="https://ionicframework.com/docs/theming/css-variables#global-variables-1">global CSS variables</a>, see the result,
          and copy the related CSS to put directly in your app.
        </p>
        <h2>Color palettes</h2>
        <p>
          For the creation color palettes we recommend the <a href="https://ionicframework.com/docs/theming/color-generator">theme color generator</a> and{' '}
          <a href="https://ionicframework.com/docs/theming/themes#stepped-color-generator">stepped color generator</a>. with which you can step your colors.
        </p>
        <h2>Global CSS variables</h2>
        <p>
          Use the Design Tokens on this page to play around and see the effect of the global CSS variables. To apply it on your page, place the result in css <code>{code}</code>{' '}
          selector.
        </p>
        <h4>Colors &nbsp;&nbsp;</h4>
        <geov-code class="restricted-width" code={eval(embedCSS(getColorCSS()))} language="css"></geov-code>
        <table style={{ borderCollapse: 'separate', borderSpacing: '5px' }}>
          <tr style={{ height: '50px', width: '150px' }}>
            <td class="box" style={{ background: 'var(--ion-color-primary)', color: 'var(--ion-color-primary-contrast)', textAlign: 'center' }}>
              Primary
            </td>
            <td class="box" style={{ background: 'var(--ion-color-secondary)', color: 'var(--ion-color-secondary-contrast)', textAlign: 'center' }}>
              Secondary
            </td>
            <td class="box" style={{ background: 'var(--ion-color-tertiary)', color: 'var(--ion-color-tertiary-contrast)', textAlign: 'center' }}>
              Tertiary
            </td>
            <td class="box" style={{ background: 'var(--ion-color-success)', color: 'var(--ion-color-success-contrast)', textAlign: 'center' }}>
              Success
            </td>
            <td class="box" style={{ background: 'var(--ion-color-warning)', color: 'var(--ion-color-warning-contrast)', textAlign: 'center' }}>
              Warning
            </td>
            <td class="box" style={{ background: 'var(--ion-color-danger)', color: 'var(--ion-color-danger-contrast)', textAlign: 'center' }}>
              Danger
            </td>
            <td class="box" style={{ background: 'var(--ion-color-dark)', color: 'var(--ion-color-dark-contrast)', textAlign: 'center' }}>
              Dark
            </td>
            <td class="box" style={{ background: 'var(--ion-color-medium)', color: 'var(--ion-color-medium-contrast)', textAlign: 'center' }}>
              Medium
            </td>
            <td class="box" style={{ background: 'var(--ion-color-light)', color: 'var(--ion-color-light-contrast)', textAlign: 'center' }}>
              Light
            </td>
          </tr>
          <tr style={{ height: '50px', width: '150px' }}>
            <td class="box" style={{ background: 'var(--ion-color-primary-shade)', color: 'var(--ion-color-primary-contrast)', textAlign: 'center' }}>
              Primary shade
            </td>
            <td class="box" style={{ background: 'var(--ion-color-secondary-shade)', color: 'var(--ion-color-secondary-contrast)', textAlign: 'center' }}>
              Secondary shade
            </td>
            <td class="box" style={{ background: 'var(--ion-color-tertiary-shade)', color: 'var(--ion-color-tertiary-contrast)', textAlign: 'center' }}>
              Tertiary shade
            </td>
            <td class="box" style={{ background: 'var(--ion-color-success-shade)', color: 'var(--ion-color-success-contrast)', textAlign: 'center' }}>
              Success shade
            </td>
            <td class="box" style={{ background: 'var(--ion-color-warning-shade)', color: 'var(--ion-color-warning-contrast)', textAlign: 'center' }}>
              Warning shade
            </td>
            <td class="box" style={{ background: 'var(--ion-color-danger-shade)', color: 'var(--ion-color-danger-contrast)', textAlign: 'center' }}>
              Danger shade
            </td>
            <td class="box" style={{ background: 'var(--ion-color-dark-shade)', color: 'var(--ion-color-dark-contrast)', textAlign: 'center' }}>
              Dark shade
            </td>
            <td class="box" style={{ background: 'var(--ion-color-medium-shade)', color: 'var(--ion-color-medium-contrast)', textAlign: 'center' }}>
              Medium shade
            </td>
            <td class="box" style={{ background: 'var(--ion-color-light-shade)', color: 'var(--ion-color-light-contrast)', textAlign: 'center' }}>
              Light shade
            </td>
          </tr>
          <tr style={{ height: '50px', width: '150px' }}>
            <td class="box" style={{ background: 'var(--ion-color-primary-tint)', color: 'var(--ion-color-primary-contrast)', textAlign: 'center' }}>
              Primary tint
            </td>
            <td class="box" style={{ background: 'var(--ion-color-secondary-tint)', color: 'var(--ion-color-secondary-contrast)', textAlign: 'center' }}>
              Secondary tint
            </td>
            <td class="box" style={{ background: 'var(--ion-color-tertiary-tint)', color: 'var(--ion-color-tertiary-contrast)', textAlign: 'center' }}>
              Tertiary tint
            </td>
            <td class="box" style={{ background: 'var(--ion-color-success-tint)', color: 'var(--ion-color-success-contrast)', textAlign: 'center' }}>
              Success tint
            </td>
            <td class="box" style={{ background: 'var(--ion-color-warning-tint)', color: 'var(--ion-color-warning-contrast)', textAlign: 'center' }}>
              Warning tint
            </td>
            <td class="box" style={{ background: 'var(--ion-color-danger-tint)', color: 'var(--ion-color-danger-contrast)', textAlign: 'center' }}>
              Danger tint
            </td>
            <td class="box" style={{ background: 'var(--ion-color-dark-tint)', color: 'var(--ion-color-dark-contrast)', textAlign: 'center' }}>
              Dark tint
            </td>
            <td class="box" style={{ background: 'var(--ion-color-medium-tint)', color: 'var(--ion-color-medium-contrast)', textAlign: 'center' }}>
              Medium tint
            </td>
            <td class="box" style={{ background: 'var(--ion-color-light-tint)', color: 'var(--ion-color-light-contrast)', textAlign: 'center' }}>
              Light tint
            </td>
          </tr>
        </table>

        <h4>Application Variables&nbsp;&nbsp;</h4>
        <geov-code class="restricted-width" code={eval(embedCSS(getApplicationVariablesCSS()))} language="css"></geov-code>
        <p>
          Lorem ipsum dolor sit amet,&nbsp;
          <strong>consectetur adipiscing elit,</strong>&nbsp; sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;
          <i>Ut enim ad minim veniam</i>,&nbsp; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;
          <a href="#">Duis aute irure dolor in reprehenderit in voluptate velit</a>&nbsp; esse cillum dolore eu fugiat nulla pariatur.
          <u>Excepteur sint occaecat cupidatat non proident</u>, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h4>Grid variables&nbsp;&nbsp;</h4>
        <geov-code class="restricted-width" code={eval(embedCSS(getGridVariablesCSS()))} language="css"></geov-code>
        <ion-grid style={{ border: '1px solid black' }}>
          <ion-row style={{ border: '1px dashed red' }}>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
          </ion-row>

          <ion-row style={{ border: '1px dashed red' }}>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
            <ion-col style={{ border: '1px dotted green' }}>Column in a row</ion-col>
          </ion-row>
        </ion-grid>

        <br />

        <ion-row>
          <ion-col>
            <geov-code class="restricted-width" code={eval(embedCSS(getColorCSS() + getApplicationVariablesCSS() + getGridVariablesCSS()))} language="css"></geov-code>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-app>,
);
