import { MockWindow } from '@stencil/core/mock-doc';
import { mockFetch, newSpecPage } from '@stencil/core/testing';
import { renderToString } from '../../../../hydrate/index';
import { SparqlBinding, SparqlRes } from '../../../lib/sparqlJson';
import { GeovEntityLabel } from '../geov-entity-label';

describe('geov-entity-label', () => {
  beforeEach(() => {
    // Mock the data returned by sparql query
    const mockResponse: SparqlRes<{ o: SparqlBinding }> = {
      results: {
        bindings: [{ o: { type: 'literal', value: 'my-entity-label' } }],
      },
    };
    // Register the mock data for the sparql get request (URL)
    mockFetch.json(
      mockResponse,
      'https://sparql.geovistory.org/api_v1_community_data?query=%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+geov%3A+%3Chttp%3A%2F%2Fgeovistory.org%2Fresource%2F%3E%0A%0ASELECT+%3Fo%0AWHERE+%7B%0A++geov%3Ai315800+rdfs%3Alabel+%3Fo+.%0A%7D%0ALIMIT+1%0A',
    );
  });

  it('Client side: fetches data and renders', async () => {
    const page = await newSpecPage({
      components: [GeovEntityLabel],
      html: `<geov-entity-label entity-id="i315800" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"></geov-entity-label>`,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <geov-entity-label entity-id="i315800" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data">
        <mock:shadow-root>
          my-entity-label
          <slot></slot>
        </mock:shadow-root>
      </geov-entity-label>
    `);
  });

  it('Server side (hydrate-script): fetches data and renders', async () => {
    let serverFetchedData;
    const html = `<geov-entity-label _ssr-id="myId" entity-id="i315800" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"></geov-entity-label>`;

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
    expect(serverFetchedData.myId.label).toEqual('my-entity-label');

    expect(rendered.html).toEqualHtml(`
      <!doctype html>
      <html data-stencil-build="n9evv7qg" class="plt-tablet plt-desktop md hydrated" mode="md">
        <head>
          <meta charset="utf-8"><style sty-id="sc-geov-entity-label"> /*!@:host*/.sc-geov-entity-label-h{display:block;white-space:nowrap}</style>
        </head>
        <body>
          <geov-entity-label _ssr-id="myId" entity-id="i315800" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data" class="sc-geov-entity-label-h sc-geov-entity-label-s hydrated" s-id="1">
            <!--r.1-->
            <!--t.1.0.0.0-->
            my-entity-label
            <!--s.1.1.0.1.-->
          </geov-entity-label>
        </body>
      </html>
    `);
  });

  it('Server side (Stencil Test Library): fetches data and renders', async () => {
    const html = `<geov-entity-label _ssr-id="myId" entity-id="i315800" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"></geov-entity-label>`;

    const page = await newSpecPage({
      hydrateServerSide: true,
      components: [GeovEntityLabel],
      html,
    });
    expect(page.root).toEqualHtml(`
      <geov-entity-label _ssr-id="myId" entity-id="i315800" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data" class="sc-geov-entity-label-h sc-geov-entity-label-s hydrated" s-id="1">
        <!--r.1-->
        <!--t.1.0.0.0-->
        my-entity-label
        <!--s.1.1.0.1.-->
      </geov-entity-label>
    `);
  });

  it('Client side: hydrates prerendered html with prefetched data', async () => {
    MockWindow['prototype']['__NEXT_DATA__'] = {
      props: {
        pageProps: {
          _ssrData: {
            myId: {
              label: 'foo', // <- prefetched data
            },
          },
        },
      },
    };
    // prerendered html
    const html = `<!doctype html>
      <html data-stencil-build="n9evv7qg" class="plt-tablet plt-desktop md hydrated" mode="md">
        <head>
          <meta charset="utf-8"><style sty-id="sc-geov-entity-label">/*!@:host*/.sc-geov-entity-label-h{display:block;white-space:nowrap}</style>
        </head>
        <body>
          <geov-entity-label _ssr-id="myId" entity-id="i315800" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data" class="sc-geov-entity-label-h sc-geov-entity-label-s hydrated" s-id="1">
            <!--r.1-->
            <!--t.1.0.0.0-->
            my-entity-label
            <!--s.1.1.0.1.-->
          </geov-entity-label>
        </body>
      </html>`;
    const page = await newSpecPage({
      components: [GeovEntityLabel],
      includeAnnotations: true,
      hydrateClientSide: true,
      html,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <geov-entity-label _ssr-id="myId" entity-id="i315800" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data" class="hydrated">
        <mock:shadow-root>
          foo
          <slot></slot>
        </mock:shadow-root>
      </geov-entity-label>
    `);
  });
});
