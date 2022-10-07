import React from 'react';
import { GeovCode, GeovToc, IonApp, IonButton, IonContent, IonGrid } from '../../../.storybook/stencil-generated/component';

import { c10, c9, s2 } from './tutorial.snippets';
export default {
  title: 'Contributing/Tutorial/Component Props',
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

export const ComponentProps = () => (
  <IonApp>
    <IonContent class="ion-padding">
      <IonGrid fixed>
        <h1>Component @Props()</h1>
        <GeovToc>
          <p className="lead">
            In this step of the <a href="/?path=/story/contributing-tutorial--introduction">tutorial</a> we extend the hello world component: Instead of hard-coding the{' '}
            <code>sparqlEndpoint</code> and <code>entityId</code> we expose them publicly on the HTML element.
          </p>
          <p>
            Prerequisite: Successful <a href="/?path=/story/contributing-tutorial-data-fetching--data-fetching">Component Props</a>.
          </p>
          <p>
            At the end of this step you will:
            <ul>
              <li>Understand the @Prop() decorator</li>
              <li>Know how to feed these props in the Storybook.</li>
            </ul>
          </p>
          <h2 id="props">Add @Prop() decorators</h2>
          <p>In the previous step we hard-coded the two class members:</p>
          <p>
            <GeovCode language="typescript" code={c9}></GeovCode>
          </p>{' '}
          <p>
            As documented{' '}
            <a href="https://stenciljs.com/docs/properties#prop-decorator" target={'_blank'} rel="noreferrer">
              here
            </a>
            , props are custom attributes/properties exposed publicly on an HTML element. They allow developers to pass data to a component to render or otherwise use.
          </p>
          <p>We declare the Prosps on the component using Stencil's @Prop() decorator, like so:</p>
          <p>
            <GeovCode language="typescript" code={c10}></GeovCode>
          </p>
          <h2 id="stories">Update Stories</h2>
          <p>Since we removed the hard-coded values, we have to pass them to the components via properties/html attributes.</p>
          <p>Update the story so:</p>
          <p>
            <GeovCode language="typescript" code={s2}></GeovCode>
          </p>
          <h2 id="verification">Verification</h2>
          <p>
            If you see two stories in the storybook, one printing <code>Person</code> and one printing <code>Geographical Place</code> you're good to go! Congrats.
          </p>
          <p>
            <IonButton href="/?path=/story/contributing-tutorial-server-side-rendering--server-side-rendering">Next: Server Side Rendering</IonButton>
          </p>
          {/* <h2>@Prop() Decorator</h2>
          <h2>Error and Loading</h2>
          <h2>Story</h2>
          <p>
            <GeovCode language="typescript" code={s1}></GeovCode>
          </p> */}
        </GeovToc>
      </IonGrid>
    </IonContent>
  </IonApp>
);
