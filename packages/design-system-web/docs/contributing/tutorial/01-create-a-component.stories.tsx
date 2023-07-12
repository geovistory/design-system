import { h } from '@stencil/core';
import { stencilWrapper } from '../../../src/helpers/stencilWrapper';
import { componentfiles, helloworld, step1, story } from './tutorial.snippets';

export default {
  title: 'Contributing/Tutorial/Create Component',
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

export const CreateComponent = stencilWrapper(
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>Create your first Component</h1>
        <p class="lead">
          In this step of the <a href="/?path=/story/contributing-tutorial--introduction">tutorial</a> we create a basic component displaying 'Hello World' in storybook.
        </p>
        <p>
          Geovistory components are Stencil components. There is an excellent{' '}
          <a target="_blank" href="https://stenciljs.com/docs/my-first-component">
            official documentation
          </a>{' '}
          that can help you on your way.
        </p>
        <p>
          Prerequisite: Successful <a href="/?path=/story/contributing-tutorial-setup--setup">Setup</a>.
        </p>
        <p>
          At the end of this step you will:
          <ul>
            <li>have a new stencil component</li>
            <li>see the component in storybook (on your broser</li>
          </ul>
        </p>
        <h4>Checkout a feature branch</h4>
        <p>Run the following command to checkout a new branch in git.</p>{' '}
        <p>
          <geov-code language="bash" code="git checkout -b hello-world"></geov-code>
        </p>
        <p>Now you should be in the hello-world branch.</p> <h4>Generate component files</h4>
        <p> Run the following command to generate the component files.</p>
        <p>
          <geov-code language="bash" code={step1}></geov-code>
        </p>
        <p>Stencil CLI should have created these files.</p>
        <p>
          <geov-code language="bash" code={componentfiles}></geov-code>
        </p>{' '}
        <h4>Add Hello World</h4>
        <p>
          Open the file <code>geov-hello-world.tsx</code> and modify its render function:
        </p>
        <p>
          <geov-code language="typescript" code={helloworld}></geov-code>
        </p>
        <h4>Create a story</h4>
        <p>To see the component in the storybook, add a new file in the components folder.</p>
        <p>
          <geov-code language="typescript" code={story}></geov-code>
        </p>
        <h4>Verification</h4>
        <p>
          If you see your component in the storybook at <code>Basic Components / Hello World</code> you're good to go! Congrats.
        </p>
        <p>
          <ion-button href="/?path=/story/contributing-tutorial-data-fetching--data-fetching" lines="full">
            Next: Fetch and display SPARQL data
          </ion-button>
        </p>
      </ion-grid>
    </ion-content>
  </ion-app>,
);
