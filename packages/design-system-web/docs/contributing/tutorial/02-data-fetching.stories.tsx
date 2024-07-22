import { h } from '@stencil/core';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import { c0, c1, c5, c6, c7, c8, q1, r1 } from './tutorial.snippets';

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

export const DataFetching = await stencilWrapper(
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>Data Fetching</h1>
        <p class="lead">
          In this step of the <a href="/?path=/story/contributing-tutorial--introduction">tutorial</a> we extend the hello world component: Instead of 'Hello World' it will display
          the class label of a given Geovistory entity.
        </p>
        <p>
          Prerequisite: Successful <a href="/?path=/story/contributing-tutorial-create-component--create-component">Hello World</a>.
        </p>
        <geov-toc>
          <h2 id="query">Query the data</h2>
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
          </p>
          <p>
            <geov-code language="sparql" code={q1}></geov-code>
          </p>
          <p>
            The query starts with the entity <code>geov:i315803</code> (=http://geovistory.org/resource/i315803) and follows the property path to the class (<code>rdf:type</code>)
            and from there to the class label (<code>rdfs:label</code>).
          </p>
          <h3 id="query-result">Query Result</h3>
          <p>If you switch your result from table to response view, you should get something like this:</p>
          <p>
            <geov-code language="json" code={r1}></geov-code>
          </p>
          <h2 id="component">Component</h2>
          <p>All we need to do now is to let our component execute the above query and print the resulting classLabel in its view. </p>
          <h3 id="render-async-data">Render async (fake) data </h3>
          <p>
            Loading data from an external API is an asyncronous task. This brings the question, how to make stencil render the component <i>after</i> the data is fetched.
          </p>
          <p>
            From{' '}
            <a target="_blank" href="https://stenciljs.com/docs/component-lifecycle">
              stencil documentation
            </a>{' '}
            we learn two relevant things.
          </p>
          <p>First:</p>
          <blockquote>
            Stencil Components have numerous lifecycle methods which can be used to know when the component "will" and "did" load, update, and render. These methods can be added to
            a component to hook into operations at the right time.
          </blockquote>
          <p>Second:</p>
          <blockquote>
            <code>componentWillLoad()</code>
            <br />
            Called once just after the component is first connected to the DOM. Since this method is only called once, it's a good place to load data asynchronously and to setup
            the state without triggering extra re-renders. A promise can be returned, that can be used to wait for the first <code>render()</code>.
          </blockquote>
          <h4 id="component-will-load">ComponentWillLoad hook</h4>
          <p>
            Lets add <code>componentWillLoad()</code> block to geov-hello-world.tsx:
          </p>
          <p>
            <geov-code language="typescript" code={c0}></geov-code>
          </p>
          <p>Above:</p>
          <ul>
            <li>
              We first declare a class variable <code>label</code>
            </li>
            <li>
              In the <code>componentWillLoad()</code> lifecycle hook asynchronously we assign a value to <code>this.label</code> (after 2000 miliseconds).
            </li>
            <li>
              In <code>render()</code> we add <code>this.label</code> to the jsx template string.
            </li>
          </ul>
          <p>
            If you safe and reload storybook one could expect the component to render the string <code>loaded async</code>. But no! Why?
          </p>
          <h4 id="state-decorator">@State() Decorator</h4>
          <p>
            Stencil provides a decorator to trigger a rerender when certain class members change. A component's class members that should trigger a rerender must be decorated using
            Stencil's{' '}
            <a href="https://stenciljs.com/docs/state#the-state-decorator-state" target="_blank" rel="noreferrer">
              <code>@State()</code>
            </a>{' '}
            decorator, like so:
          </p>
          <p>
            <geov-code language="typescript" code={c1}></geov-code>
          </p>
          <p> Your component should now wait for 2000&nbsp;ms and then render the label.</p>

          <h3 id="fetch-real-data">Fetch real data</h3>
          <h4 id="sparql-json-function">sparqlJson()</h4>

          <p>
            For convenience you find a helper function to make sparql requests in <code>lib/sparqlJson.tsx</code>
          </p>
          <p>
            <geov-code language="typescript" code={c5}></geov-code>
          </p>
          <p>You can pass in the url of the sparql endpoint and the sparql query as string. The function returns a promise with the results.</p>
          <h4 id="query-builder">Build the query</h4>
          <p>So let's create a function to generate our SPARQL query string, taking an the id of the entity in question as parameter and put it ontop of the class :</p>
          <p>
            <geov-code language="typescript" code={c6}></geov-code>
          </p>
          <h4 id="fetch">Fetch data</h4>
          <p>
            Now we can use this inside the <code>componentWillLoad()</code> Hook:
          </p>
          <p>
            <geov-code language="typescript" code={c7}></geov-code>
          </p>
          <p>Above</p>
          <ul>
            <li>
              we declare the class members <code>sparqlEndpoint</code> and <code>entityId</code> which will be used to create the sparql request. (We will later expose these two as
              properties of the web component).{' '}
            </li>
            <li>we replace the fake data generator with a function fetches real data. </li>
          </ul>
          <h4 id="parse-data">Parse result</h4>
          <p>
            The function <code>sparqlJson()</code> has a generic Type <code>{'<T>'}</code>. This allows to type the expected results in an easy way: for each bound variable in the
            sparql query you can add a key in the type. With <code>{'{ classLabel: SparqlBinding }'}</code> we tell TypeScript that we sparql <code>?classLabel</code> of type{' '}
            <code>string</code>{' '}
          </p>

          <p>
            This typing makes it easy to parse the result and assign it to <code>this.label</code>:
          </p>
          <p>
            <geov-code language="typescript" code={c8}></geov-code>
          </p>
          <h2 id="verification">Verification</h2>
          <p>
            If you see your component in the storybook printing <code>Person</code> you're good to go! Congrats.
          </p>
          <p>
            <ion-button href="/?path=/story/contributing-tutorial-component-props--component-props">Next: Component Props</ion-button>
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
  </ion-app>,
);
