import { h } from '@stencil/core';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import {
  attribute,
  chartColors,
  chartLayout,
  chartParams,
  componentCore,
  drawChart,
  htmlTemplate,
  imports,
  lifecycle,
  parameters,
  parseResponse,
  prepareColors,
  responseType,
  sparqlExecution,
  sparqlQuery,
} from './05-snippets';

export default {
  title: 'Contributing/Tutorial/Create Data Visualization Component',
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

export const CreateDataVisualizationComponent = stencilWrapper(
  <ion-app>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <h1>Create your Data Visualization Web Component</h1>

        <h3>Before creating a web component</h3>

        <h5>Know what you want</h5>

        <p>
          Before creating a web component giving a nice visualization of your data, it is important to know <b>what do you want to display</b>.<br />
          Questions like "<i>what type of chart will I use?</i>", "<i>Where are my data?</i>", "<i>What data do I need?</i>" should be cristal clear for you.
        </p>

        <h5>Make a first version</h5>

        <p>
          In this sense, it could be a good idea to already have a first version of your visuals in a domain you are confortable with.
          <br />
          For instance, if you are a Python developer, we advise you make a first version of your visuals in Python.
          <br />
          That will allow you to deal with the logic in an environment you are confortable with.
          <br />
          We will use <a href="https://plotly.com/graphing-libraries/">Plotly</a> as a graphing library, it can ease your work if your visuals are already made with Plotly, because
          the logic of Plotly looks like the same in all its languages.
        </p>

        <h5>Create great SPARQL queries</h5>

        <p>
          It is important that you create nice (performant) SPARQL queries, and minimize the code outside the query(ies); so that you do not create a component that will take 20
          seconds to load.
          <br />
          For exemple, the class distribution that we will talk about below takes 17 seconds to load if the logic is done by code, but less than 1 if it is implemented directly in
          the SPARQL query.
          <br />
          To help with that, the <a href="https://www.geovistory.org/sparql">Geovistory SPARQL query editor</a> is an very good tool to test your queries (and their perfomance).
        </p>

        <h3>Create a web component</h3>

        <p>
          Now that you have a first version of your visual, good performance, and all the logic in mind, let's create a Web Component out of it!
          <br />
          To understand how to create a web component you can first have a look at the following steps of the tutorial with your data visualization component in mind:
          <ul>
            <li>
              <a href="https://design.geovistory.org/?path=/story/contributing-tutorial-setup--setup">Set up your web component development environment</a>
            </li>
            <li>
              <a href="https://design.geovistory.org/?path=/story/contributing-tutorial-create-component--create-component">Create your first component</a>
            </li>
            <li>
              <a href="https://design.geovistory.org/?path=/story/contributing-tutorial-data-fetching--data-fetching">
                Understand how data are fetched from the SPARQL endpoint to your component
              </a>
            </li>
          </ul>
        </p>

        <h3>Add data visualization to your component</h3>

        <h5>Prerequisites</h5>

        <p>
          At this point you should:
          <ul>
            <li>Have a running web component with data fetching from the SPARQL endpoint (from the tutorials listed above)</li>
            <li>A first visual (preferably with Plotly) of your wanted result</li>
          </ul>
        </p>

        <p>
          For the rest of the tutorial, we will analyse an exemple of an existing data visualization component:{' '}
          <a href="https://design.geovistory.org/?path=/story/data-visualization-components-class-distribution--class-distribution">The class distribution of a SPARQL endpoint</a>.
          You can find the code of this component in your development folder: <code>design-system/packages/design-system-web/components/geov-class-distri/</code>
          <br />
          In this folder you will find 4 files:
          <ul>
            <li>
              <code>geov-class-distri.css</code>: Style your web component, we will not talk about it, but it is classic CSS applied to your component, so if you want to have
              titles in red, here is the place to set it.
            </li>
            <li>
              <code>readme.md</code>: This file is auto generated, there is no need to know more.
            </li>
            <li>
              <code>geov-class-distri.tsx</code>: As you already understood, this is where everything happens!
            </li>
            <li>
              <code>geov-class-distri.stories.tsx</code>: And this last file is about rendering your first component in the current web site you are reading from.
            </li>
          </ul>
        </p>

        <p>Let's dive into the code!</p>

        <h5>Imports</h5>

        <p>
          <geov-code language="tsx" code={imports}></geov-code>
        </p>

        <p>
          We observe 3 lines:
          <br />
          <ul>
            <li>The first one imports code for rendering the component and needed things to generate the component.</li>
            <li>The second one imports code that we wrote to ease the query to the SPARQL endpoint.</li>
            <li>
              The thirst one imports the graphing library: <a href="https://plotly.com/graphing-libraries/">Plotly</a>
            </li>
          </ul>
        </p>

        <p>
          During your development, you might have to add additional imports, depending of what do you needs and what your component's logic is. If you want for instance to import
          other web component, they will appear at the top of the file, with other imports. The good thing if you use <i>Visual Studio Code</i>, is that it will recognize it and
          help you do it automatically.
        </p>

        <h5>Chart colors</h5>

        <p>
          <geov-code language="tsx" code={chartColors}></geov-code>
        </p>

        <p>
          This line specifies the colors that we will use later for the chart rendering.
          <br />
          These colors are the Geovistory colors.
        </p>

        <h5>SPARQL query</h5>

        <p>
          <geov-code language="tsx" code={sparqlQuery}></geov-code>
        </p>

        <p>
          This is the query to have the class distribution. As we mentioned before, we have put all the logic in the query in order to be as performant as possible. Note the end
          columns names : <code>classs</code> and <code>classcounts</code>
        </p>

        <h5>Typing the response</h5>

        <p>
          <geov-code language="tsx" code={responseType}></geov-code>
        </p>

        <p>
          The goal here is to tell the code what the response looks like.
          <br />
          Basically, it should list all columns that your query fetch, with the same spelling, all being typed as <code>SparqlBinding</code>.<br />
          In our case it is <code>classs</code> and <code>classcounts</code>
        </p>

        <h5>Component core</h5>

        <p>
          <geov-code language="tsx" code={componentCore}></geov-code>
        </p>

        <p>This is were the component is really defined. It is automatically prefilled with the information you provided on generation, so nothing to change here.</p>

        <h5>Component parameters</h5>

        <p>
          <geov-code language="tsx" code={parameters}></geov-code>
        </p>

        <p>
          These are parameters available for the component.
          <br />
          Thanks to the <code>@Prop()</code> annotation, they will be available from the outside as an input parameter in the html tag, like the "href" for a{' '}
          <code>&lt;a href="www.google.com"&gt;Google website&lt;/a&gt;</code>
          <br />
          So depending on your usecase, you might need to add some new parameters to your component.
          <br />
          Keep in mind that the <code>@Prop()</code> makes it visible from the outside (otherwise it will be a private variable, not accessible from outside, see below) and the
          thing after the ":" is the type of your variable. Most of the case it will be <code>number</code> or <code>string</code>.<br />
          Do not forget to add documentation to the parameters you add (like it is now in grey in the exemple above); this will help others understand what they should provide.
          <br />
        </p>
        <p>
          We also think that the 3 parameters already created should be present in all data visualization component: it will allow to have the visualisation for any project, and
          the possibility to resize component, if needed.
        </p>

        <h5>Private parameters</h5>

        <p>
          <geov-code language="tsx" code={attribute}></geov-code>
        </p>

        <p>
          These are parameters that only the web component will be aware of. It could be constant (as <code>domId</code> is), or a parameter that will change (result of a query,
          ...). For the class distribution there was no need of any, so there is just the minimum: the id of the <code>div</code> that will host the final chart. it should look
          like the name of the component, and be unique (e.g. in case you need to render multiple charts, you would need to add an additional <code>domId_chart2</code>)
        </p>

        <h5>Component life cycle</h5>

        <p>
          <geov-code language="tsx" code={lifecycle}></geov-code>
        </p>

        <p>
          To make it short, when your component will be used on an other page, on it's creation, it does not yet have his body available, so we need to be careful where and what
          code we use in the component's life cycle. If you want to learn more, <a href="https://stenciljs.com/docs/component-lifecycle">here is the details</a>.<br />
          It is most probable that you code will be inside this function.
        </p>

        <h5>Query results</h5>

        <p>
          <geov-code language="tsx" code={sparqlExecution}></geov-code>
        </p>

        <p>
          This is the place where the query (that has been created at the top of the file) is executed.
          <br />
          Few remarks:
          <ul>
            <li>
              <code>&lt;SparqlResponse&gt;</code>: tells the component what response to expect, it is the one that is set above.
            </li>
            <li>
              <code>this.sparqlEndpoint</code>: the value of the input parameters (which SPARQL endpoint to query).
            </li>
            <li>
              <code>qrClassesCount()</code>: this will invoke the query written at the top.
            </li>
          </ul>
        </p>
        <p>
          Because data fetching is not done in instantly, we need to tell the component what to do with the data, but only when it has them.
          <br />
          That is why there is the <code>.then()</code>. What is written in this function will only be executed when the request to the SPARQL endpoint is made, and the data
          fetched.
          <br />
          So in the end, what is following will probably be the place where lies the remaining logic of your component and the plotting into a nice chart.
        </p>

        <h5>Parse the response</h5>

        <p>
          <geov-code language="tsx" code={parseResponse}></geov-code>
        </p>

        <p>
          Here is the part where the code transforms an answer from the SPARQL endpoint into something easily interpretated by Plotly. As you can see, in our case, it is really
          simple, because all the logic has been put inside the SPARQL endpoint. But depending on your usecase, this part may be more complex, especially if you need to add
          additional logic.
        </p>

        <h5>Prepare colors</h5>

        <p>
          <geov-code language="tsx" code={prepareColors}></geov-code>
        </p>

        <p>Here we are setting the color of each element we are going to display. Depending on what you type of chart you need, you could also need to tweak this part a bit.</p>

        <h5>Prepare Plotly data</h5>

        <p>
          <geov-code language="tsx" code={chartParams}></geov-code>
        </p>

        <p>
          This part is where we set the parameters for the plotly chart, like its data, what type of chart it is, etc. You can find what to put here in the{' '}
          <a href="https://plotly.com/javascript/">Plotly documentation</a>.
        </p>

        <h5>Chart Layout</h5>

        <p>
          <geov-code language="tsx" code={chartLayout}></geov-code>
        </p>

        <p>
          Here we set all things related to the layout, again, more detail can be found in the <a href="https://plotly.com/javascript/">Plotly documentation</a>.
        </p>

        <h5>Draw the chart(s)</h5>

        <p>
          <geov-code language="tsx" code={drawChart}></geov-code>
        </p>

        <p>
          And this is finally the line that draws the chart! We can notice the fact that the variable <code>this.domId</code> is present, telling the component where to put the
          chart (in what div, see below).
        </p>

        <h5>HTML template</h5>

        <p>
          <geov-code language="html" code={htmlTemplate}></geov-code>
        </p>

        <p>
          This HTML code is the template of your component. It is here you can add additional text to your graph, other graphs (be careful on the id on the div you put you chart
          in), other web components, or simply nothing else, as it is the case here.
        </p>

        <h3>You are all set, let's test it!</h3>

        <p>
          Now that you coded your component, you need to create the Storybook page in order to render your component in something.
          <br />
          To do that you can create a <code>[component-name].stories.tsx</code> file near your component file, taking the model from <code>geov-class-distri.stories.tsx</code>.
        </p>
        <p>
          The variables you set in the <i>stories</i> file correspond to the `@Prop()` variables you have created previously. You need to set them here to tell Storybook with what
          parameter should your component be called with.
        </p>
        <p>
          Once you have created this <i>story</i> for you component, you can start the Stencil generation allong with the Storybook server by running the following command (being
          in the folder <code>design-system/packages/design-system-web</code>) <code>npm run dev</code>. This will take half a minute to launch the server.
          <br />
          You may have errors already in the log, take the time to correct them, and execute the command again.
        </p>
        <p>
          When you corrected all errors and when you browser automatically opened at the Storybook home page, you can start you web component by searching it in the left column.
          Look for the name you have set in the <code>.stories.tsx</code> file, as the <code>title</code> variable. <br />
          If you do not see anything or got an error message, there is probably an error. Either you already see the error message, or you have to look at the browser log (press
          F12, then "Console" tab) to understand the problem.
        </p>
        <p>Once you component looks like as you wanted it, well done, you have created a Data Visualization Web Component!</p>

        <h3>Now what?</h3>

        <p>
          So, to understand what to do next, you have to understand what you have done so far.
          <br />
          You have created a web component, yes, but only locally, on your computer displayed on a local server.
          <br />
          Now you need to publish your work!
        </p>

        <h3>
          Publish to <code>design-dev.geovistory.org</code>
        </h3>

        <p>
          On your local git branch you have created, you can add, commit and push your work. Then it is the time to create a pull request: open the{' '}
          <a href="https://github.com/geovistory/design-system">design system GitHub repository</a>
          <br />
          You can now contact the development team so that they can publish your PR on dev, see how it behaves before going to production!
        </p>
      </ion-grid>
    </ion-content>
  </ion-app>,
);
