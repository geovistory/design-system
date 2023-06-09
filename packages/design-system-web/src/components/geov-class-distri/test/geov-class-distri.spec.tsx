import { MockWindow } from '@stencil/core/mock-doc';
import { newSpecPage } from '@stencil/core/testing';
import { renderToString } from '../../../../hydrate/index';
import { GeovClassDistri } from '../geov-class-distri';

describe('geov-class-distry', () => {

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
