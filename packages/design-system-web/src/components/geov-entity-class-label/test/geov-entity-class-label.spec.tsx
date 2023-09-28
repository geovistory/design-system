import { mockFetch, newSpecPage } from '@stencil/core/testing';
import { renderToString } from '../../../../hydrate/index';
import { GeovEntityClassLabel } from '../../geov-entity-class-label/geov-entity-class-label';
import { SparqlRes, SparqlBinding } from '../../../lib/sparqlJson';

describe('geov-entity-class-label', () => {
  beforeEach(() => {
    // Mock the data returned by sparql query
    const mockResponse: SparqlRes<{ classLabel: SparqlBinding; t: SparqlBinding }> = {
      results: {
        bindings: [{ classLabel: { type: 'literal', value: 'Person' }, t: { type: 'uri', value: 'https://ontome.net/ontology/c21' } }],
      },
    };
    // Register the mock data for the sparql get request (URL)
    mockFetch.json(
      mockResponse,
      'https://sparql.geovistory.org/api_v1_community_data?query=%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+geov%3A+%3Chttp%3A%2F%2Fgeovistory.org%2Fresource%2F%3E%0A%0ASELECT+%3FclassLabel+%3Ft%0AWHERE+%7B%0A++geov%3Ai315803+rdf%3Atype+%3Ft.%0A++optional%7B%3Ft+rdfs%3Alabel+%3FclassLabel%7D%0A%7D%0ALIMIT+1%0A',
    );
  });

  it('Server side (hydrate-script): renders initial state', async () => {
    let serverFetchedData;
    const html = `<geov-entity-class-label _ssr-id="myId" entity-id="i315803" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"></geov-entity-class-label>`;

    const rendered = await renderToString(html, {
      runtimeLogging: true,
      removeHtmlComments: true,
      beforeHydrate: doc => {
        doc.__STENCIL_DATA__ = {};
      },
      afterHydrate: doc => {
        serverFetchedData = doc.__STENCIL_DATA__;
      },
    });
    expect(serverFetchedData.myId).toEqual({ classURI: 'https://ontome.net/ontology/c21', label: 'Person', loading: false });

    expect(rendered.html).toEqualHtml(`<meta charset="utf-8">
     <style sty-id="sc-geov-entity-class-label">
       /*!@:host*/.sc-geov-entity-class-label-h{display:inline;vertical-align:middle}
     </style>
     <geov-entity-class-label _ssr-id="myId" class="hydrated sc-geov-entity-class-label-h sc-geov-entity-class-label-s" entity-id="i315803" s-id="1" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data">
       <!--r.1-->
       <!--t.1.0.0.0-->
       Person
       <!--s.1.1.0.1.-->
     </geov-entity-class-label>`);
  });

  it('Client side: fetches data and hydrates prerendered html', async () => {
    // prerendered html
    const html = `<geov-entity-class-label entity-id="i315803" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"></geov-entity-class-label>`;
    const page = await newSpecPage({
      components: [GeovEntityClassLabel],
      includeAnnotations: true,
      hydrateClientSide: true,
      html,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`<geov-entity-class-label class="hydrated" entity-id="i315803" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data">
    <mock:shadow-root>
      Person
      <slot></slot>
    </mock:shadow-root>
  </geov-entity-class-label>`);
  });
});
