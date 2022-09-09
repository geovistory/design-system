import { IonApp, IonButton, IonContent, IonGrid } from '../../../.storybook/stencil-generated/component';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { componentfiles, helloworld, step1, story } from './tutorial.snippets';
export default {
  title: 'Contributing/Tutorial/Hello World',
  parameters: {
    previewTabs: { canvas: { hidden: true } },
    options: { showPanel: false },
  },
};

export const HelloWorld = () => (
  <IonApp>
    <IonContent class="ion-padding">
      <IonGrid fixed>
        <h1>Hello World – Your first Component</h1>
        <p className="lead">
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
        <p> Run the following command to checkout a new branch in git.
          <SyntaxHighlighter language="bash">git checkout -b hello-world</SyntaxHighlighter>
          Now you should be in the hello-world branch.
        </p>
        <h4>Generate component files</h4>
        <p> Run the following command to generate the component files.</p>
        <p>
          <SyntaxHighlighter language="bash">{step1}</SyntaxHighlighter>
        </p>
        <p>
          Stencil CLI should have created these files.
          <SyntaxHighlighter language="bash">{componentfiles}</SyntaxHighlighter>
        </p>
        <h4>Add Hello World</h4>
        <p>Open the file <code>geov-entity-class-label.tsx</code> and modify its render function:
        <SyntaxHighlighter language="typescript">{helloworld}</SyntaxHighlighter>

        </p>
        <h4>Create a story</h4>
        <p>To see the component in the storybook, add a new file in the components folder.</p>
        <p>
          <SyntaxHighlighter language="typescript">{story}</SyntaxHighlighter>
        </p>
        <h4>Verification</h4>

        <p>
          If you see your component in the storybook at <code>Basic Components / Entity Class Label</code> you're good to go! Congrats.
        </p>
        <p>
          <IonButton href="/?path=/story/contributing-tutorial-data-fetching--data-fetching" lines="full">
            Next: Fetch and display SPARQL data
          </IonButton>
        </p>
      </IonGrid>
    </IonContent>
  </IonApp>
);
