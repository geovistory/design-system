import { MockWindow } from '@stencil/core/mock-doc';
import { mockFetch, newSpecPage } from '@stencil/core/testing';
import { renderToString } from '../../../../hydrate/index';
import { SparqlBinding } from '../../../components';
import { SparqlRes } from '../../../lib/sparqlJson';
import { GeovClassDistri } from '../geov-class-distri';

describe('geov-class-distry', () => {
  beforeEach(() => {
    // Mock the data returned by sparql query
    const mockResponse: SparqlRes<{ classnames: SparqlBinding; classcounts: SparqlBinding }> = {
      results: {
        bindings: [
          {
            classnames: { type: 'literal', value: 'Person' },
            classcounts: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#integer', value: '179204' },
          },
          {
            classnames: { type: 'literal', value: 'Definition' },
            classcounts: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#integer', value: '160877' },
          },
        ],
      },
    };
    // Register the mock data for the sparql get request (URL)
    mockFetch.json(
      mockResponse,
      'https://sparql.geovistory.org/api_v1_community_data?query=%0A++PREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0A%0A++SELECT+%28group_concat%28%3Fclassname%3Bseparator%3D%22%2C+%22%29+as+%3Fclassnames%29+%28Max%28%3Fclasscount%29+as+%3Fclasscounts%29%0A++WHERE+%7B%0A++++++%7B%0A++++++++++SELECT+%3Fclassuri+%28count%28%3Fentity%29+as+%3Fclasscount%29%0A++++++++++WHERE+%7B%0A++++++++++++++%3Fentity+a+%3Fclassuri+.%0A++++++++++%7D%0A++++++++++GROUP+BY+%3Fclassuri%0A++++++%7D%0A++++++%3Fclassuri+rdfs%3Alabel+%3Fclassname%0A++%7D%0A++GROUP+BY+%3Fclassuri%0A++ORDER+by+DESC%28%3Fclasscounts%29%0A',
    );
  });

  it('Client side: fetches data and renders', async () => {
    const page = await newSpecPage({
      components: [GeovClassDistri],
      html: `<geov-class-distri width="500" height="500" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"></geov-class-distri>`,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <geov-class-distri width="500" height="500" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data">
        <div id="class-distri-pie-chart"></div>
      </geov-class-distri>
    `);
  });

  it('Server side (hydrate-script): renders initial state', async () => {
    let serverFetchedData;
    const html = `<geov-class-distri width="500" height="500" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"></geov-class-distri>`;

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
    expect(serverFetchedData).toEqual({});

    expect(rendered.html).toEqualHtml(`
      <!doctype html>
      <html data-stencil-build="n9evv7qg" class="plt-tablet plt-desktop md hydrated" mode="md">
        <head>
          <meta charset="utf-8"><style sty-id="sc-geov-class-distri"> :host{display:block}</style>
        </head>
        <body>
          <geov-class-distri class="hydrated" height="500" s-id="1" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data" width="500">
            <!--r.1-->
            <div c-id="1.0.0.0" id="class-distri-pie-chart"></div>
            <!--s.1.1.0.1.-->
          </geov-class-distri>
        </body>
      </html>
    `);
  });

  it('Client side: fetches data and hydrates prerendered html', async () => {
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
        <meta charset="utf-8"><style sty-id="sc-geov-class-distri"> :host{display:block}</style>
      </head>
      <body>
        <geov-class-distri class="hydrated" height="500" s-id="1" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data" width="500">
          <!--r.1-->
          <div c-id="1.0.0.0" id="class-distri-pie-chart"></div>
          <!--s.1.1.0.1.-->
        </geov-class-distri>
      </body>
    </html>`;
    const page = await newSpecPage({
      components: [GeovClassDistri],
      includeAnnotations: true,
      hydrateClientSide: true,
      html,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <geov-class-distri width="500" height="500" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data" class="hydrated">
          <!--r.1-->
          <div id="class-distri-pie-chart"></div>
          <!--s.1.1.0.1.-->
      </geov-class-distri>
    `);
  });
});
