import React from 'react';
import { GeovCode, IonApp, IonContent, IonGrid } from '../../.storybook/stencil-generated/component';
import { html5example } from './install-html5-cdn.snippets';

export default {
  title: 'Getting Started/Installation',
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

export const HTML5 = () => (
  <IonApp>
    <IonContent class="ion-padding">
      <IonGrid fixed>
        <h1>HTML5 installation</h1>
        <p className="lead">
          This section describes how to use the Geovistory Design System in html5.
        </p>

        <h2>CDN</h2>
        <p>
         The easiest way to use the library is via CDN.
        </p>
        <p>
         Copy & paste the following code into a index.html and open it in a browser:
        </p>
        <p>
          <GeovCode language="bash" code={html5example}></GeovCode>
        </p>
        <h2>Node modules</h2>
        <p>
          It is also possible to install the library as node module.
          (To be described).
        </p>
      </IonGrid>
    </IonContent>
  </IonApp>
);
