import React from 'react';
import { GeovToc, IonApp, IonButton, IonContent, IonGrid } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Contributing/Tutorial/Ionic Components',
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

export const IonicComponents = () => (
  <IonApp>
    <IonContent class="ion-padding">
      <IonGrid fixed>
        <h1>Ionic Components</h1>
        <GeovToc>
          <p className="lead">
            In this step of the <a href="/?path=/story/contributing-tutorial--introduction">tutorial</a> we add some styling to our component using ionic components and ionic
            icons.
          </p>

          <p>
            Prerequisite: Successful <a href="/?path=/story/contributing-tutorial-component-props--component-props">Component Props</a>.
          </p>
          <p>
            At the end of this step you will:
            <ul>
              <li>Understand how stencil hydrate can do server side rendering</li>
              <li>Understand how we can inject server side data during hydration</li>
            </ul>
          </p>
          <h2 id="stencil-hydrate">SSR with stencil hydrate</h2>
          <h2 id="stencil-hydrate">Hydrate SSR fetched data</h2>

          <h2 id="verification">Verification</h2>
          <p>If you understood, you're good to go! Congrats.</p>
          <p>
            <IonButton>Next: coming soon...</IonButton>
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
