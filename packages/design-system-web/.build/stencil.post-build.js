let fs = require('fs');

const components = require('./post-build/ionic-components');
const dashToPascalCase = require('./post-build/dashToPascalCase');

/**********************************************************************
 * Modify components types
 **********************************************************************/
const paths = ['/../src/components.d.ts', '/../dist/types/components.d.ts'];
exports.paths = paths;

/** imports */
const imports = `import { JSX as IonJSX } from '@ionic/core';
import { Components as IonComponents } from '@ionic/core';
`;

/** Module Ionic JSX intrinsicElements */
const clueModuleJSX = /export namespace JSX {\n[\s\t]*interface IntrinsicElements {/gm;
const newModuleJSX = `export namespace JSX {
      interface IntrinsicElements {
${components
  .map(tagName => {
    const pascalCase = dashToPascalCase(tagName);
    return `            "${tagName}": LocalJSX.${pascalCase} & JSXBase.HTMLAttributes<HTML${pascalCase}Element>`;
  })
  .join('\n')}
`;

/** Local Ionic JSX Types */
const clueLocalJSX = 'declare namespace LocalJSX {';
const newJSX = `
${clueLocalJSX}
${components
  .map(tagName => {
    const pascalCase = dashToPascalCase(tagName);
    return `    export interface ${pascalCase} extends IonJSX.${pascalCase} { }`;
  })
  .join('\n')}
`;

/** Ionic Component Types */
const clueComponents = 'export namespace Components {';
const newComponents = `
${clueComponents}
${components
  .map(tagName => {
    const pascalCase = dashToPascalCase(tagName);
    return `    export interface ${pascalCase} extends IonComponents.${pascalCase} { }`;
  })
  .join('\n')}
`;

for (let path_ of paths) {
  const path = __dirname + path_;

  let content = fs.readFileSync(path, 'utf-8');
  content = imports + content.replace(clueLocalJSX, newJSX).replace(clueModuleJSX, newModuleJSX).replace(clueComponents, newComponents);

  if (fs.existsSync(path)) fs.unlinkSync(path);
  fs.writeFileSync(path, content, 'utf-8');

  console.log('> Wrote in ' + path_);
}

/**********************************************************************
 * Add Component TypeScript Types
 **********************************************************************/

for (const tagName of components) {
  const pascalCase = dashToPascalCase(tagName);
  const content = `
import type { Components, JSX } from "../types/components";

interface ${pascalCase} extends Components.${pascalCase}, HTMLElement {}
export const ${pascalCase}: {
  prototype: ${pascalCase};
  new (): ${pascalCase};
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
`;

  const path = __dirname + `/../dist/components/${tagName}.d.ts`;
  if (fs.existsSync(path)) fs.unlinkSync(path);
  fs.writeFileSync(path, content, 'utf-8');
}

/**********************************************************************
 * Add jsx support for using components in react in separate file
 **********************************************************************/
require('./post-build/createReactJSX');
