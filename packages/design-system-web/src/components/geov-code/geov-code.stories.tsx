import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Design Components/Code',
    tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

const codeHtml = '<div><h1>Hello</h1></div>';
export const CodeHtml = stencilWrapper(<geov-code code={codeHtml} language="html"></geov-code>);
const codeXml = `<foo:mytag>
  <foo:bar hi="you" />
</foo:mytag>`;
export const CodeXml = stencilWrapper(<geov-code code={codeXml} language="xml"></geov-code>);

export const CodeCss = stencilWrapper(
  <geov-code
    code="pre,
code {
  margin: 0;
  padding: 0;
}"
    language="css"
  ></geov-code>,
);

export const CodeJson = stencilWrapper(<geov-code code="{'foo': 1, 'bar': 'myvalue', 'baz': [1,2,3]}" language="json"></geov-code>);

export const CodeBash = stencilWrapper(
  <geov-code
    code="# install components
npm i @geovistory/design-system-web"
    language="bash"
  ></geov-code>,
);

const sparql = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?classLabel
WHERE {
  geov:i315803 rdf:type/rdfs:label ?classLabel
}
LIMIT 1`;
export const CodeSparql = stencilWrapper(<geov-code code={sparql} language="sparql"></geov-code>);

export const CodeNoButton = stencilWrapper(
  <geov-code
    code="pre,
code {
  margin: 0;
  padding: 0;
}"
    language="css"
    copyButton={false}
  ></geov-code>,
);

const typescript = `import { Component, Host, h, State, Prop } from '@stencil/core';
import { FetchResponse } from '../../lib/FetchResponse';
import { sparqlJson, SparqlBinding } from '../../lib/sparqlJson';
import { getSSRData } from '../../lib/ssr/getSSRData';
import { setSSRData } from '../../lib/ssr/setSSRData';
import { setSSRId } from '../../lib/ssr/setSSRId';
import { GeovEntityLabelData } from '../geov-entity-label/geov-entity-label';

const qrLabel = (id: string) => \`
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?classLabel
WHERE {
  geov:\${id} rdf:type/rdfs:label ?classLabel
}
LIMIT 1
\`;

export interface GeovHelloWorldData extends FetchResponse {
  label?: string;
  error?: boolean;
}

@Component({
  tag: 'geov-hello-world',
  styleUrl: 'geov-hello-world.css',
  shadow: true,
})
export class GeovHelloWorld {
  @Prop({ reflect: true }) _ssrId?: string;
  /**
   * sparqlEndpoint
   * URL of the sparql endpoint
   */
  @Prop() sparqlEndpoint: string;
  /**
   * entityId
   * ID number of entity, e.g. 'i315800'
   */
  @Prop() entityId: string;

  /**
   * the data (or model) used in the view
   */
  @State() data?: GeovHelloWorldData;

  constructor() {
    setSSRId(this);
  }

  async componentWillLoad() {
    // try to get data from ssr
    this.data = getSSRData(this._ssrId);

    // if no data found, fetchData
    if (!this.data) {
      // set data to loading (in immutable way)
      this.data = { loading: true };

      await this.fetchData()
        .then(d => {
          this.data = d;
          setSSRData(this._ssrId, d);
          return d;
        })
        .catch(d => {
          this.data = d;
          return d;
        });
    }
  }

  /**
   * Do the sparql request(s)
   * @returns a Promise with the data for this component
   */
  async fetchData(): Promise<GeovEntityLabelData> {
    return sparqlJson<{ classLabel: SparqlBinding }>(this.sparqlEndpoint, qrLabel(this.entityId))
      .then(res => {
        return {
          ...this.data,
          label: res?.results?.bindings?.[0]?.classLabel?.value,
          loading: false,
        };
      })
      .catch(_ => {
        return {
          ...this.data,
          error: true,
          loading: false,
        };
      });
  }

  render() {
    return (
      <Host>
        {this.data.label}
        {this.data.loading && \`loading...\`}
        {this.data.error && \`error!\`}
        {!this.data.label && !this.data.loading && !this.data.error && <span class="no-label-found">no label found</span>}
        <slot />
      </Host>
    );
  }
}
`;
export const CodeTypeScript = stencilWrapper(<geov-code code={typescript} language="typescript"></geov-code>);
