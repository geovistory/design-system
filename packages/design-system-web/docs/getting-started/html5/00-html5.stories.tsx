import React from 'react';
import { GeovCode, IonApp, IonContent, IonGrid } from '../../../.storybook/stencil-generated/component';
import { html5Cdn, html5NodeModules, startScript } from './install-html5-cdn.snippets';

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
        <p className="lead">This section describes how to use the Geovistory Design System in html5.</p>

        <h2>CDN</h2>
        <p>
          The simplest way to use the library is via{' '}
          <a href="https://www.jsdelivr.com/" target="_blank">
            CDN
          </a>
          .
        </p>
        <p>Copy & paste the following code into a index.html and open it in a browser:</p>
        <p>
          <GeovCode language="html" code={html5Cdn}></GeovCode>
        </p>
        <p>
          Like <code>geov-entity</code> in this example, you can use all Geovistory components (see Design Components and Data Components) and all{' '}
          <a href="https://ionicframework.com/docs/components" target="_blank">
            UI components from ionic framework v6
          </a>
          .
        </p>
        <h2>Node modules</h2>
        <p>It is also possible to install the library as node module.</p>
        <p>
          First lets create a node project to manage the dependencies. Open the terminal and navigate into your project folder. Initialize the project with the following command,
          to setup the package.json file.
        </p>
        <p>
          <GeovCode language="bash" code="npm init"></GeovCode>
        </p>
        <p>Now lets install the Geovistory Design System.</p>
        <p>
          <GeovCode language="bash" code="npm install @geovistory/design-system-web --save"></GeovCode>
        </p>
        <p>After that we create this index.html file:</p>
        <p>
          <GeovCode language="html" code={html5NodeModules}></GeovCode>
        </p>
        <p>
          Like <code>geov-entity</code> in this example, you can use all Geovistory components (see Design Components and Data Components) and all{' '}
          <a href="https://ionicframework.com/docs/components" target="_blank">
            UI components from ionic framework v6
          </a>
          .
        </p>

        <h3>HTTP-Server</h3>
        <p>To run the HTML5 application you need a proper HTTP-Server. However, if there is none we recommend to install</p>
        <p>
          <GeovCode language="bash" code="npm add -D http-server"></GeovCode>
        </p>
        <p>
          After that add define the start script with the http-server package in <code>package.json</code>.
        </p>
        <p>
          {' '}
          <GeovCode language="json" code={startScript}></GeovCode>
        </p>
        <p>
          Now you can run your server with <code>npm start</code> and the server is available under{' '}
          <a href="http://127.0.0.1:8080/" target="_blank">
            http://127.0.0.1:8080/
          </a>
          .
        </p>
      </IonGrid>
    </IonContent>
  </IonApp>
);
