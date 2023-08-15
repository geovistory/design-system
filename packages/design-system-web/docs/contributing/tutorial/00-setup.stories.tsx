import { h } from '@stencil/core';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import { files } from './tutorial.snippets';
export default {
  title: 'Contributing/Tutorial/Setup',
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

export const Setup = await stencilWrapper(
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>Setup</h1>
        <p class="lead">Setup your developer environment: install requirements, get and install code and start the storybook.</p>
        <p>
          At the end of the setup you should have:
          <ul>
            <li>node.js (v16+)</li>
            <li>the source code</li>
            <li>a correct git branch</li>
            <li>installed node modules</li>
            <li>(optional) you have visual studio code as IDE.</li>
          </ul>
        </p>
        <h4>Install node.js</h4>
        <p>
          Open a terminal and run
          <geov-code language="bash" code="node -v"></geov-code>
        </p>
        <p>
          If the output is similar to this, you're good to go:
          <geov-code language="bash" code="v16.17.0"></geov-code>
        </p>
        <p>
          Else install{' '}
          <a target="_blank" href="https://nodejs.org/en/download/">
            nodejs
          </a>{' '}
          16 or later. If you need to manage different node versions on your computer, we recommend using{' '}
          <a target="_blank" href="https://github.com/nvm-sh/nvm">
            nvm
          </a>{' '}
          (for mac and linux only).
        </p>
        <h4>Get the source code</h4>
        <p>
          Clone this{' '}
          <a target="_blank" href="https://github.com/geovistory/design-system">
            repository
          </a>{' '}
          from GitHub:
          <geov-code language="bash" code="git clone https://github.com/geovistory/design-system.git"></geov-code>
        </p>
        <h4>Open the folder in your IDE </h4>
        <p>
          We recommend{' '}
          <a target="_blank" href="https://code.visualstudio.com/">
            Visual Studio Code
          </a>{' '}
          as your code editor. But use the tool you prefer. To open the folder in VS Code run:
          <geov-code language="bash" code="code design-sytem"></geov-code>
        </p>
        <h4>Install the node modules</h4>
        <p>
          From the root folder of the repo run
          <geov-code language="bash" code="npm install"></geov-code>
          This will install the dependencies of all packages located in <code>packages/</code>
        </p>
        <h4>Open the correct folder</h4>
        <p>
          The packages folder contains different packages.
          <geov-code language="bash" code={files}></geov-code>
          The components are developed in <code>design-system-web</code>. The other packages are derivates. Change into the correct directory to start the development
          <geov-code language="bash" code="cd packages/design-system-web"></geov-code>
        </p>
        <h4>Start storybook</h4>
        <p>
          To see the geovistory components in a browser, start the storybook locally.
          <geov-code language="bash" code="npm run dev"></geov-code>
          If you have trouble starting the server, stopping and restarting might help.
        </p>
        <h4>Verification</h4>
        <p>If you see the storybook at 'localhost:6006' in your browser, you're done with the setup! Congrats.</p>
        <p>
          <ion-button href="/?path=/story/contributing-tutorial-create-component--create-component" lines="full">
            Next: Create a Hello World Component
          </ion-button>
        </p>
      </ion-grid>
    </ion-content>
  </ion-app>,
);
