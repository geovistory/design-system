import { h } from '@stencil/core';
import { stencilWrapper } from '../../src/helpers/stencilWrapper';

export default {
  title: 'Design/Layout',
  parameters: {
    previewTabs: {
      'docs': { hidden: true },
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    options: { showPanel: false },
  },
};

export const Layout = stencilWrapper(
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>Layouts</h1>

        <p>
          Ionic has, built in, differents layouts usable out of the box (<code>ion-app</code>, <code>ion-header</code>, <code>ion-content</code>, <code>ion-footer</code>,{' '}
          <code>ion-grid</code>, <code>ion-col</code>, <code>ion-row</code>) that allow us to set the layout of pages and components.
          <br />
          <br />
          For more information about the layout, find the official ionic documentation <a href="https://ionicframework.com/docs/layout/structure">here</a>.
          <br />
          <br />
          For more information about the layout components, find the official ionic documentation: <a href="https://ionicframework.com/docs/api/pp">App</a>,{' '}
          <a href="https://ionicframework.com/docs/api/header">Header</a>, <a href="https://ionicframework.com/docs/api/content">Content</a>,{' '}
          <a href="https://ionicframework.com/docs/api/footer">Footer</a>, <a href="https://ionicframework.com/docs/api/grid">Grid</a>,{' '}
          <a href="https://ionicframework.com/docs/api/col">Columns</a>, <a href="https://ionicframework.com/docs/api/row">Rows</a>.
        </p>
      </ion-grid>
    </ion-content>
  </ion-app>,
);
