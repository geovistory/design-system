import { h } from '@stencil/core';
import '../dist/components/geov-code';
import '../dist/components/geov-toc';
import '../dist/components/ion-app';
import '../dist/components/ion-button';
import '../dist/components/ion-content';
import '../dist/components/ion-gri';
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
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>Component @Props()</h1>
        <geov-toc>
          <p class="lead">
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
            <geov-code language="typescript" code={c9}></geov-code>
          </p>{' '}
          <p>
            As documented{' '}
            <a href="https://stenciljs.com/docs/properties#prop-decorator" target={'_blank'} rel="noreferrer">
              here
            </a>
            , props are custom attributes/properties exposed publicly on an HTML element. They allow developers to pass data to a component to render or otherwise use.
          </p>
          <p>We declare the Props on the component using Stencil's @Prop() decorator, like so:</p>
          <p>
            <geov-code language="typescript" code={c10}></geov-code>
          </p>
          <h2 id="stories">Update Stories</h2>
          <p>Since we removed the hard-coded values, we have to pass them to the components via properties/html attributes.</p>
          <p>Update the story so:</p>
          <p>
            <geov-code language="typescript" code={s2}></geov-code>
          </p>
          <h2 id="verification">Verification</h2>
          <p>
            If you see two stories in the storybook, one printing <code>Person</code> and one printing <code>Group</code> you're good to go! Congrats.
          </p>
          <p>
            <ion-button href="/?path=/story/contributing-tutorial-server-side-rendering--server-side-rendering">Next: Server Side Rendering</ion-button>
          </p>
          {/* <h2>@Prop() Decorator</h2>
          <h2>Error and Loading</h2>
          <h2>Story</h2>
          <p>
            <geov-code language="typescript" code={s1}></geov-code>
          </p> */}
        </geov-toc>
      </ion-grid>
    </ion-content>
  </ion-app>
);
