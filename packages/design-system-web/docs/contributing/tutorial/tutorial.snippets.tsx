export const files = `packages
|- design-system-angular
|- design-system-happy-dom
|- design-system-react
|- design-system-web          <- Here we develop!
`;
export const step1 = `# Make sure you are in 'packages/design-system-web' and run
npm run generate

# Enter a tag name, by convention prefixed with 'geov-'.
✔ Component tag name (dash-case): … geov-entity-class-label

# You'll be asked which additional files to generate.
# This depends on your needs. For a simple component,
# the .css might be enough. For example:
◉   Stylesheet (.css)
◯   Spec Test  (.spec.tsx)
◯   E2E Test (.e2e.ts)

# Hit 'enter'
`;

export const componentfiles = `src
 |- components
    |- geov-entity-class-label
        |- geov-entity-class-label.css
        |- geov-entity-class-label.tsx
        |- readme.md
`;

export const story = `// geov-entity-class-label.stories.tsx

import React from 'react';
import { JSX } from '../..';
import { GeovEntityClassLabel } from '../../../.storybook/stencil-generated/component';

export default {
  title: 'Basic Components/EntityClassLabel',
  component: GeovEntityClassLabel,
};
const Template = (args: JSX.GeovEntityClassLabel) => <GeovEntityClassLabel {...args}></GeovEntityClassLabel>;

export const EntityClassLabel = Template.bind({});
const args: JSX.GeovEntityClassLabel = {
};
EntityClassLabel.args = args;`;

export const helloworld = `...
render() {
  return (
    <Host>
      Hello World       <-- add this line !
      <slot></slot>
    </Host>
  );
}
...
`;

export const q1 = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX geov: <http://geovistory.org/resource/>

SELECT ?classLabel
WHERE {
  geov:i315803 rdf:type/rdfs:label ?classLabel
}
LIMIT 1`;

export const r1 = `{
  "head": {
    "vars": [
      "classLabel"
    ]
  },
  "results": {
    "bindings": [
      {
        "classLabel": {
          "type": "literal",
          "value": "Person"
        }
      }
    ]
  }
}`;

export const c1 = `import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'geov-entity-class-label',
  styleUrl: 'geov-entity-class-label.css',
  shadow: true,
})
export class GeovEntityClassLabel {

  @State() label: string = 'initializing...';

  async componentWillLoad() {
    this.label = await new Promise(resolve => {
      setTimeout(() => {
        resolve('This label was loaded async');
      }, 2000);
    });
  }

  render() {
    return (
      <Host>
        {this.label}
      </Host>
    );
  }
}`;

export const c2 =
`import { Component, Host, h, State, Prop } from '@stencil/core';
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

export interface GeovClassLabelData extends FetchResponse {
  label?: string;
  error?: boolean;
}

@Component({
  tag: 'geov-entity-class-label',
  styleUrl: 'geov-entity-class-label.css',
  shadow: true,
})
export class GeovEntityClassLabel {
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
  @State() data?: GeovClassLabelData;

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
    return sparqlJson<{ classLabel: SparqlBinding<string> }>(this.sparqlEndpoint, qrLabel(this.entityId))
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
`

export const s1 =
`import { DEFAULT_SPARQL_ENDPOINT } from '../../../.storybook/config/defaulSparqlEndpoint';

...

const args: JSX.GeovEntityClassLabel = {
  entityId:"i315803",
  sparqlEndpoint: DEFAULT_SPARQL_ENDPOINT
};

...
`
