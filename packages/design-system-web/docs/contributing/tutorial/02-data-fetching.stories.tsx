import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { GeovCode, IonApp, IonContent, IonGrid, IonIcon } from '../../../.storybook/stencil-generated/component';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { c1, c2, q1, r1, s1 } from './tutorial.snippets';
export default {
  title: 'Contributing/Tutorial/Data Fetching',
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

export const DataFetching = () => (
  <IonApp>
    <IonContent class="ion-padding">
      <IonGrid fixed>
        <h1>Data Fetching</h1>
        <p className="lead">
          In this step of the <a href="/?path=/story/contributing-tutorial--introduction">tutorial</a> we extend the hello world component: Instead of 'Hello World' it will display
          the class label of a given Geovistory entity.
        </p>
        <p>
          Prerequisite: Successful <a href="/?path=/story/contributing-tutorial-create-component--create-component">Hello World</a>.
        </p>
        <h4>The Query</h4>
        <p>
          Geovistory exposed data as RDF on SPARQL endpoints. SPARQL is the RDF query language. This tutorial is not about SPARQL. One way to learn it is{' '}
          <a href="http://www.learningsparql.com/">learning SPARQL</a>.
        </p>
        <p>
          Open this{' '}
          <a target="_blank" href="https://www.geovistory.org/sparql">
            SPARQL client
          </a>{' '}
          , paste the following query and run it (button top right).
          <CopyToClipboard text={{ q1 }} onCopy={() => alert('copied!')}>
            <IonIcon name="copy-outline"></IonIcon>
          </CopyToClipboard>
        </p>
        <p>
          <GeovCode language="sparql" code={q1}></GeovCode>
        </p>
        <p>
          The query starts with the entity <code>geov:i315803</code> (=http://geovistory.org/resource/i315803) and follows the property path to the class (<code>rdf:type</code>)
          and from there to the class label (<code>rdfs:label</code>).
        </p>
        <h4>The Query Result</h4>
        <p>If you switch your result from table to response view, you should get something like this:</p>
        <p>
          <GeovCode language="json" code={r1}></GeovCode>
        </p>
        <h4>The Challenge</h4>
        <p>All we need to do now is to let our component execute this query and print the resulting classLabel in its view. </p>
        <h4>Data fetching</h4>
        <p>
          From{' '}
          <a target="_blank" href="https://stenciljs.com/docs/component-lifecycle">
            stencil documentation
          </a>{' '}
          we learn two relevant things.
        </p>
        <p>First:</p>
        <blockquote>
          Stencil Components have numerous lifecycle methods which can be used to know when the component "will" and "did" load, update, and render. These methods can be added to a
          component to hook into operations at the right time.
        </blockquote>
        <p>Second:</p>
        <blockquote>
          <code>componentWillLoad()</code>
          <br />
          Called once just after the component is first connected to the DOM. Since this method is only called once, it's a good place to load data asynchronously and to setup the
          state without triggering extra re-renders. A promise can be returned, that can be used to wait for the first <code>render()</code>.
        </blockquote>
        <p>Lets try first without really fetching data by modifying the component class so:</p>
        <p>
          <GeovCode language="typescript" code={c1}></GeovCode>
        </p>
        <p> Your component should wait for 2000&nbsp;ms before it is rendering the label.</p>
        <h4>Complete example</h4>
        <p>
          <GeovCode language="typescript" code={c2}></GeovCode>
        </p>
        <h4>Story</h4>
        <p>
          <GeovCode language="typescript" code={s1}></GeovCode>
        </p>
      </IonGrid>
    </IonContent>
  </IonApp>
);
