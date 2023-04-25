import React from 'react';
import { GeovCode, GeovToc, IonApp, IonButton, IonContent, IonGrid } from '../../../.storybook/stencil-generated/component';
import { s04_1, s04_10, s04_11, s04_2, s04_3, s04_4, s04_5, s04_6, s04_7, s04_8, s04_9 } from './04.snippets';
import network1 from './04-network-1.jpg';
import disableJs from './04-disable-js.png';
import verification from './04-verification.png';

export default {
  title: 'Contributing/Tutorial/Server Side Rendering',
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

export const ServerSideRendering = () => (
  <IonApp>
    <IonContent class="ion-padding">
      <IonGrid fixed>
        <h1>Server Side Rendering</h1>
        <GeovToc>
          <p className="lead">
            In this step of the <a href="/?path=/story/contributing-tutorial--introduction">tutorial</a> we extend our component to support Server Side Rendering (SSR) and
            hydration of data fetched by the server with Next.js.
          </p>
          <p>
            Prerequisite: Successful <a href="/?path=/story/contributing-tutorial-component-props--component-props">Component Props</a>.
          </p>
          <p>
            At the end of this step you will:
            <ul>
              <li>Understand why server side rendering and hydration are useful</li>
              <li>Have a small next.js application doing SSR and hydration</li>
            </ul>
          </p>
          <h2 id="introduction">Introduction</h2>
          <h3 id="csr-problems">Client Side Rendering problems</h3>
          <p>
            Web pages can be much more then static html pages. Frameworks like Angular, React and Vue allow the creation of single page apps, that are fully client side rendered
            (CSR). This approach allows to create app-like web pages with inteactive user interfaces.
          </p>
          <p>
            CSR has also downsides:
            <ul>
              <li>SEO: Search engines receive almost empty html</li>
              <li>Performance: Initial page loads may be slow (load html, load js, render) </li>
            </ul>
          </p>
          <h3 id="what-is-ssr">What is SSR?</h3>
          <p>
            Server Side Rendering (SSR) is the process of rendering content to a client based on an HTTP request. A client makes a request and the server processes it, returning
            rendered HTML back to the client. This way, the requesting users and search engines have the content immediately present.
          </p>
          <h3 id="what-is-hydration">What is hydration?</h3>
          <p>
            Hydration is a process running on the client: The client takes the SSR HTML and bootstraps the client-side JS app, basically by adding event listeners to the existing
            DOM elements.
          </p>
          <h3 id="intro-summary">Summary</h3>
          <p>
            SSR and hydration combine the best of both worlds:
            <ul>
              <li>Consistent SEO performance (SSR)</li>
              <li>Performance benefit for users (SSR)</li>
              <li>Interactive user interfaces (hydration) </li>
            </ul>
          </p>
          <h2 id="tutorial">Tutorial</h2>
          <p>
            Stencil allows to create a module that can be used on a NodeJS server to implement server side rendering (SSR), see{' '}
            <a href="https://stenciljs.com/docs/hydrate-app#hydrate-app" target={'_blank'} rel="noreferrer">
              hydrate script
            </a>
            . The{' '}
            <a href="https://github.com/geovistory/website/" target={'_blank'} rel="noreferrer">
              Geovistory.org website
            </a>{' '}
            is built with{' '}
            <a href="https://nextjs.org/docs/getting-started" target={'_blank'} rel="noreferrer">
              Next.js
            </a>{' '}
            and uses geovistory web components and its hydrate script to do server side rendering and component level data fetching.{' '}
          </p>
          <p>
            In the following steps we'll create a next.js app and setup SSR and hydration and learn what we can do in the web components to make this process even better than
            usual.
          </p>
          <p>
            Find here the source code of the{' '}
            <a href="https://github.com/geovistory/stencil-next-hydrate-example" target={'_blank'} rel="noreferrer">
              completed tutorial
            </a>
            .{' '}
          </p>
          <h3 id="create-next-app">Create a next.js app</h3>
          <p>In your terminal run:</p>
          <p>
            <GeovCode language="bash" code="npx create-next-app@latest --typescript"></GeovCode>
          </p>
          <p>
            When the prompt asks if you want to use Tailwind CSS, answer <code>no</code>. Use the default for the other questions.
          </p>
          <p>
            <GeovCode language="bash" code={s04_1}></GeovCode>
          </p>
          <p>Change in the new directory:</p>
          <p>
            <GeovCode language="bash" code="cd ./stencil-next-hydrate-example"></GeovCode>
          </p>
          <p>Start the app:</p>
          <p>
            <GeovCode language="bash" code="npm run dev"></GeovCode>
          </p>
          <p>
            Open it in the browser, usualy at <code>http://localhost:3000</code> and you should see the Next.js start screen.
          </p>
          <h3 id="setup-wc">Setup web components</h3>
          <p>Lets add now an existing Geovistory web component. As you can see here, </p>
          <p>Open the root directory in a second terminal and install the Geovistory Web Components:</p>
          <p>
            <GeovCode language="bash" code="npm install @geovistory/design-system-web"></GeovCode>
          </p>
          <p>
            Now import the web components in <code>pages/_app.tsx</code>
          </p>
          <p>
            <GeovCode language="typescript" code={s04_2}></GeovCode>
          </p>
          <p>The first line is for Typescript. It adds type support for using the webcomponents in react tsx.</p>
          <p>
            <GeovCode language="typescript" code={`/// <reference path="../node_modules/@geovistory/design-system-web/dist/types/react.d.ts" />`}></GeovCode>
          </p>
          <p>
            The function <code>defineCustomElements()</code> registers the custom elements in the browser
          </p>
          <h3 id="use-wc">Use a web component</h3>
          <p>
            Modify <code>pages/index.tsx</code> and replace the <code>{`<main>...</main>`}</code>element:
          </p>
          <p>
            <GeovCode language="html" code={s04_3}></GeovCode>
          </p>
          <p>In your browser you should now see a card showing the class of i315800.</p>
          <p>Open the Network tab in your Dev Tools to see what happens:</p>
          <p>
            <img src={network1} alt="dev-tools-network" />
          </p>
          <p>
            If you see the request to <code>sparql.geovistory.org</code> the component <code>geov-entity-class-label</code> worked. It loaded the class label of the entity i315800.
          </p>
          <h4 id="ssr-and-csr">Investigate SSR / CSR</h4>
          <p>To see what parts were rendered on the server and the client respectively, click on the cog in Chrome's Dev Tools and disable Java Script:</p>
          <p>
            {' '}
            <img src={disableJs} alt="disable-js" />
          </p>
          <p>
            Reload the page and see that:{' '}
            <ul>
              <li>The card subtitle – Class of entity i315800 – was server side rendered (by Next.js)</li>
              <li>The ionic components are not rendered</li>
              <li>The class label (Person) was not fetched</li>
            </ul>{' '}
          </p>
          <h3 id="add-ssr-data-fetching">Add server side data fetching</h3>
          <p>In our example the amount of text loaded by the web component is minimal. We could live with the current situation.</p>
          <p>
            If we loaded much more content via web components, the loading performance and the SEO performance would suffer significantly. Let's therefore enable component level
            data fetching on the server using stencil hydrate.
          </p>

          <h4 id="add-server-render-fn">Add serverRender()</h4>
          <p>
            What need a method that can interpret the web components, wait for them to fetch data and render it to html, before sending it to the client. That's where stencil
            hydrate comes in.
          </p>
          <p>
            Create a file <code>lib/serverRender.tsx</code> and paste this content:
          </p>
          <p>
            <GeovCode language="typescript" code={s04_4}></GeovCode>
          </p>
          <p>This function takes a React Element uses ReactDOMServer and stencil hydrate to render the components.</p>
          <p>
            Important is this: the stencil <code>renderToString()</code> function will wait to render a component until it fetches data from the server, returning a promise in{' '}
            <code>componentWillLoad()</code>. (Read the{' '}
            <a href="https://stenciljs.com/docs/static-site-generation-basics#rendering-dynamic-data" target={'_blank'}>
              docs
            </a>
            .)
          </p>
          <p>
            Our <code>serverRender()</code> function returns an object with three elements: the body inner html (as string) the head inner html (as string) and an json object with
            the data fetched by the components (we will discuss this later).
          </p>
          <p>
            Now we have to find a hook in Next.js to use this function before the page is sent to the client. One option is{' '}
            <a href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props" target={'_blank'}>
              <code>getStaticProps()</code>
            </a>
            .
          </p>

          <p>
            Let's modify <code>pages/index.tsx</code> as follows:
          </p>
          <p>
            <GeovCode language="typescript" code={s04_5}></GeovCode>
          </p>
          <p>If you now reload your page, without Java Script in the browser, you'll see that the class Label (Person) was fetched and rendered on the server.</p>
          <p>Great!</p>
          <h3 id="hydrate-ssr-fetched-data">Hydrate SSR fetched data</h3>
          <p>But perfect? No!</p>
          <p>
            The component <code>geov-entity-class-label</code> fetches the code on the server – and then again on the client. This is not only a waste of resources, it may also
            cause unwanted effects, if the component renders child components based on the fetched data, which fetch data themselves.{' '}
          </p>
          <p>
            So we need a way to extract the data from server side rendering and inject them to component on the client, so that the component does not have to refetch a second
            time.{' '}
          </p>
          <p>
            For the Geovistory.org website and the Geovistory web components we defined a custom strategy to pass data from server to client components. This strategy is lightwight
            and does by no means hinder the usage of Geovistory web components without server side rendering.
          </p>
          <h4 id="component-side">Component side</h4>
          <p>
            A data fetching component therefore implements three specific functions, available in <code>lib/ssr/</code>
            <ul>
              <li>setSSRId</li>
              <li>setSSRData</li>
              <li>getSSRData</li>
            </ul>
          </p>
          <p>
            Lets look at the relevant parts of the implementation of <code>geov-entity-class-label</code> (find the{' '}
            <a
              href="https://github.com/geovistory/design-system/blob/8a62d1193fde514e33795280264ed7e620c81751/packages/design-system-web/src/components/geov-entity-class-label/geov-entity-class-label.tsx"
              target={'_blank'}
            >
              components code on GitHub
            </a>
            ):
          </p>
          <p>
            <GeovCode language="typescript" code={s04_6}></GeovCode>
          </p>
          <p>
            On constructing the component, we set the _ssrId by calling <code> setSSRId(this)</code>
          </p>
          <p>
            <GeovCode language="typescript" code={s04_7}></GeovCode>
          </p>
          <p>
            <code>setSSRId()</code> generates and assigns an _ssrId to the component, if document?.__STENCIL_DATA__ is not falsy and the component does not yet have an _ssrId. This
            way we can make sure the _ssrId is set on server side and not overriden by the client.
          </p>
          <p>
            In <code>componentWillLoad()</code> we try to get data provided by server side rendering by calling <code>getSSRData(this._ssrId); </code>
          </p>
          <p>
            <GeovCode language="typescript" code={s04_8}></GeovCode>
          </p>
          <p>
            <code>getSSRData()</code> looks at a specific object on window.__NEXT_DATA__...[_ssrId].
          </p>
          <p>
            If this object is set by the server, it will be used by the component on the client and prevent an extra data fetching. (We'll see in a minute how to do this with
            Nextjs).{' '}
          </p>
          <p>
            If this object is not set (probably because we are on the server), the data will be fetched and then passed to <code>setSSRData()</code>
          </p>
          <p>
            <GeovCode language="typescript" code={s04_9}></GeovCode>
          </p>
          <p>
            <code>setSSRData()</code> takes the ssrId as key and the fetched data as value and assigns it to <code>document.__STENCIL_DATA__[key]</code>
          </p>
          <h4 id="nextjs-side">Next.js Side</h4>
          <p>
            Let's look at the part on Nextjs and implement the missing parts. In <code>serverRender()</code>:
          </p>
          <p>
            <GeovCode language="typescript" code={s04_10}></GeovCode>
          </p>
          <p>Before stencil does the server side data we prepare __STENCIL_DATA__. Afterwards we extract that data and return it to the function caller.</p>
          <p>
            To make use of this, modify <code>pages/index.tsx</code> so:
          </p>
          <p>
            <GeovCode language="typescript" code={s04_11}></GeovCode>
          </p>
          <p>Reload the page and watch the Network. The component did not fetch the data on the client side.</p>
          <p>Perfect!</p>
          <h2 id="verification">Verification</h2>

          <p>
            <img src={verification} alt="dev-tools-network" />
          </p>
          <p>If you see the ionic card printing Person and in the network no request to the sparql.geovistory.org, you're good to go! Congrats.</p>
          <p>Nota bene: JavaScript is enabled here, so that the ionic component can be rendered. Otherwise, we just have a subtitle with an answer, without any style.</p>
          <p>
            <IonButton>Next: coming soon...</IonButton>
          </p>
        </GeovToc>
      </IonGrid>
    </IonContent>
  </IonApp>
);
