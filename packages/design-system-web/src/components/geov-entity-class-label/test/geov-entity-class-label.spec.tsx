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
    const html = `<meta charset="utf-8">
    <style sty-id="sc-geov-entity-class-label">
      /*!@:host*/.sc-geov-entity-class-label-h{display:inline;vertical-align:middle}
    </style>
    <geov-entity-class-label _ssr-id="myId" class="hydrated sc-geov-entity-class-label-h sc-geov-entity-class-label-s" entity-id="i315803" s-id="1" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data">
      <!--r.1-->
      <!--t.1.0.0.0-->
      Person
      <!--s.1.1.0.1.-->
    </geov-entity-class-label>`;
    const page = await newSpecPage({
      components: [GeovEntityClassLabel],
      includeAnnotations: true,
      hydrateClientSide: true,
      html,
    });
    await page.waitForChanges();
    expect(page.root)
      .toEqualHtml(`<geov-entity-class-label _ssr-id="myId" class="hydrated" entity-id="i315803" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data">
    <mock:shadow-root>
      Person
      <slot></slot>
    </mock:shadow-root>
  </geov-entity-class-label>`);
  });

  it('Server side (hydrate-script): renders initial state (with icon)', async () => {
    let serverFetchedData;
    const html = `<geov-entity-class-label _ssr-id="myId" with-icon="true" entity-id="i315803" sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"></geov-entity-class-label>`;

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

    expect(rendered.html).toEqualHtml(`<meta charset=\"utf-8\">
    <style sty-id=\"sc-geov-entity-class-label\">
      /*!@:host*/.sc-geov-entity-class-label-h{display:inline;vertical-align:middle}
    </style>
    <style sty-id=\"sc-geov-entity-class-icon\">
      /*!@:host*/.sc-geov-entity-class-icon-h{display:inline;vertical-align:middle}/*!@ion-icon*/ion-icon.sc-geov-entity-class-icon{--ion-margin:0.3em;margin-right:var(--ion-margin)}
    </style>
    <geov-entity-class-label _ssr-id=\"myId\" class=\"hydrated sc-geov-entity-class-label-h sc-geov-entity-class-label-s\" entity-id=\"i315803\" s-id=\"1\" sparql-endpoint=\"https://sparql.geovistory.org/api_v1_community_data\" with-icon=\"true\">
      <!--r.1-->
      <geov-entity-class-icon c-id=\"1.0.0.0\" class=\"hydrated sc-geov-entity-class-icon-h sc-geov-entity-class-label\" s-id=\"2\">
        <!--r.2-->
        <ion-icon c-id=\"2.0.0.0\" class=\"sc-geov-entity-class-icon\" icon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z'/><path d='M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z'/></svg>\"></ion-icon>
      </geov-entity-class-icon>
      <!--t.1.1.0.1-->
      Person
      <!--s.1.2.0.2.-->
    </geov-entity-class-label>`);
  });

  it('Client side: fetches data and hydrates prerendered html (with icon)', async () => {
    // prerendered html
    const html = `<meta charset=\"utf-8\">
    <style sty-id=\"sc-geov-entity-class-label\">
      /*!@:host*/.sc-geov-entity-class-label-h{display:inline;vertical-align:middle}
    </style>
    <style sty-id=\"sc-geov-entity-class-icon\">
      /*!@:host*/.sc-geov-entity-class-icon-h{display:inline;vertical-align:middle}/*!@ion-icon*/ion-icon.sc-geov-entity-class-icon{--ion-margin:0.3em;margin-right:var(--ion-margin)}
    </style>
    <geov-entity-class-label _ssr-id=\"myId\" class=\"hydrated sc-geov-entity-class-label-h sc-geov-entity-class-label-s\" entity-id=\"i315803\" s-id=\"1\" sparql-endpoint=\"https://sparql.geovistory.org/api_v1_community_data\" with-icon=\"true\">
      <!--r.1-->
      <geov-entity-class-icon c-id=\"1.0.0.0\" class=\"hydrated sc-geov-entity-class-icon-h sc-geov-entity-class-label\" s-id=\"2\">
        <!--r.2-->
        <ion-icon c-id=\"2.0.0.0\" class=\"sc-geov-entity-class-icon\" icon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z'/><path d='M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z'/></svg>\"></ion-icon>
      </geov-entity-class-icon>
      <!--t.1.1.0.1-->
      Person
      <!--s.1.2.0.2.-->
    </geov-entity-class-label>`;
    const page = await newSpecPage({
      components: [GeovEntityClassLabel],
      includeAnnotations: true,
      hydrateClientSide: true,
      html,
    });
    await page.waitForChanges();
    expect(page.root)
      .toEqualHtml(`<geov-entity-class-label _ssr-id=\"myId\" class=\"hydrated\" entity-id=\"i315803\" sparql-endpoint=\"https://sparql.geovistory.org/api_v1_community_data\" with-icon=\"true\">
    <mock:shadow-root>
      <geov-entity-class-icon class=\"hydrated sc-geov-entity-class-icon-h sc-geov-entity-class-label\" classuri=\"https://ontome.net/ontology/c21\" s-id=\"2\">
        <!--r.2-->
        <ion-icon c-id=\"2.0.0.0\" class=\"sc-geov-entity-class-icon\" icon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z'/><path d='M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z'/></svg>\"></ion-icon>
      </geov-entity-class-icon>
      Person
      <slot></slot>
    </mock:shadow-root>
  </geov-entity-class-label>`);
  });
});
