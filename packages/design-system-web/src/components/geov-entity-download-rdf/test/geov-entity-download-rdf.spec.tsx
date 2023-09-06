import { newSpecPage } from '@stencil/core/testing';
import { renderToString } from '../../../../hydrate/index';
import { GeovEntityDownloadRdf } from '../geov-entity-download-rdf';

describe('geov-entity-download-rdf', () => {
  it('Client side: fetches data and renders', async () => {
    const page = await newSpecPage({
      components: [GeovEntityDownloadRdf],
      html: `<geov-entity-download-rdf entityId="i785518" color="primary" expand="block" fill="outline" button-label="Download RDF" button-icon="download-outline"></geov-entity-download-rdf>`,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <geov-entity-download-rdf button-icon="download-outline" button-label="Download RDF" color="primary" entityid="i785518" expand="block" fill="outline">
      <ion-button id="open-custom-dialog" expand="block" fill="outline" color="primary">
        Download RDF <ion-icon name="download-outline"></ion-icon>
      </ion-button>
      <ion-modal id="example-modal" trigger="open-custom-dialog">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button>Cancel</ion-button>
            </ion-buttons>
            <ion-title>Download RDF</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-list lines="none">
            <ion-item button="" download="Download">
              <ion-icon slot="start" name="download-outline"></ion-icon>
              <ion-label>RDF XML</ion-label>
            </ion-item>
            <ion-item button="" download="Download">
              <ion-icon slot="start" name="download-outline"></ion-icon>
              <ion-label>JSON-LD</ion-label>
            </ion-item>
            <ion-item button="" download="Download">
              <ion-icon slot="start" name="download-outline"></ion-icon>
              <ion-label>N-Triples</ion-label>
            </ion-item>
            <ion-item button="" download="Download">
              <ion-icon slot="start" name="download-outline"></ion-icon>
              <ion-label>N-Quads</ion-label>
            </ion-item>
            <ion-item button="" download="Download">
              <ion-icon slot="start" name="download-outline"></ion-icon>
              <ion-label>TRIX</ion-label>
            </ion-item>
            <ion-item button="" download="Download">
              <ion-icon slot="start" name="download-outline"></ion-icon>
              <ion-label>Thrift</ion-label>
            </ion-item>
            <ion-item button="" download="Download">
              <ion-icon slot="start" name="download-outline"></ion-icon>
              <ion-label>Turtle</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-modal>
    </geov-entity-download-rdf>
    `);
  });
  it('Server side (hydrate-script): renders initial state', async () => {
    let serverFetchedData;
    const html = `<geov-entity-download-rdf entity-id="i785518" color="primary" expand="block" fill="outline" button-label="Download RDF" button-icon="download-outline"></geov-entity-download-rdf>`;

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
        <html data-stencil-build="g0f0pogm" class="hydrated">

        <head>
            <meta charset="utf-8">
            <style sty-id="sc-geov-entity-download-rdf">
                :host{display:block}
            </style>
        </head>

        <body><geov-entity-download-rdf entity-id="i785518" color="primary" expand="block" fill="outline"
                button-label="Download RDF" button-icon="download-outline" class="hydrated" s-id="1"><!--r.1--><ion-button
                    id="open-custom-dialog" expand="block" fill="outline" color="primary"
                    c-id="1.0.0.0"><!--t.1.1.1.0-->Download RDF <ion-icon name="download-outline"
                        c-id="1.2.1.1"></ion-icon></ion-button><ion-modal id="example-modal" trigger="open-custom-dialog"
                    c-id="1.3.0.1"><ion-header c-id="1.4.1.0"><ion-toolbar c-id="1.5.2.0"><ion-buttons slot="start"
                                c-id="1.6.3.0"><ion-button
                                    c-id="1.7.4.0"><!--t.1.8.5.0-->Cancel</ion-button></ion-buttons><ion-title
                                c-id="1.9.3.1"><!--t.1.10.4.0-->Download RDF</ion-title></ion-toolbar></ion-header><ion-content
                        class="ion-padding" c-id="1.11.1.1"><ion-list lines="none" c-id="1.12.2.0"><ion-item button=""
                                download="Download" c-id="1.13.3.0"><ion-icon slot="start" name="download-outline"
                                    c-id="1.14.4.0"></ion-icon><ion-label c-id="1.15.4.1"><!--t.1.16.5.0-->RDF
                                    XML</ion-label></ion-item><ion-item button="" download="Download" c-id="1.17.3.1"><ion-icon
                                    slot="start" name="download-outline" c-id="1.18.4.0"></ion-icon><ion-label
                                    c-id="1.19.4.1"><!--t.1.20.5.0-->JSON-LD</ion-label></ion-item><ion-item button=""
                                download="Download" c-id="1.21.3.2"><ion-icon slot="start" name="download-outline"
                                    c-id="1.22.4.0"></ion-icon><ion-label
                                    c-id="1.23.4.1"><!--t.1.24.5.0-->N-Triples</ion-label></ion-item><ion-item button=""
                                download="Download" c-id="1.25.3.3"><ion-icon slot="start" name="download-outline"
                                    c-id="1.26.4.0"></ion-icon><ion-label
                                    c-id="1.27.4.1"><!--t.1.28.5.0-->N-Quads</ion-label></ion-item><ion-item button=""
                                download="Download" c-id="1.29.3.4"><ion-icon slot="start" name="download-outline"
                                    c-id="1.30.4.0"></ion-icon><ion-label
                                    c-id="1.31.4.1"><!--t.1.32.5.0-->TRIX</ion-label></ion-item><ion-item button=""
                                download="Download" c-id="1.33.3.5"><ion-icon slot="start" name="download-outline"
                                    c-id="1.34.4.0"></ion-icon><ion-label
                                    c-id="1.35.4.1"><!--t.1.36.5.0-->Thrift</ion-label></ion-item><ion-item button=""
                                download="Download" c-id="1.37.3.6"><ion-icon slot="start" name="download-outline"
                                    c-id="1.38.4.0"></ion-icon><ion-label
                                    c-id="1.39.4.1"><!--t.1.40.5.0-->Turtle</ion-label></ion-item></ion-list></ion-content></ion-modal><!--s.1.41.0.2.--></geov-entity-download-rdf>
        </body>

        </html>
    `);
  });

  it('Client side: fetches data and hydrates prerendered html', async () => {
    // prerendered html
    const html = `
      <!doctype html>
      <html data-stencil-build="g0f0pogm" class="hydrated">

      <head>
          <meta charset="utf-8">
          <style sty-id="sc-geov-entity-download-rdf">
              :host{display:block}
          </style>
      </head>

      <body><geov-entity-download-rdf entity-id="i785518" color="primary" expand="block" fill="outline"
              button-label="Download RDF" button-icon="download-outline" class="hydrated" s-id="1"><!--r.1--><ion-button
                  id="open-custom-dialog" expand="block" fill="outline" color="primary"
                  c-id="1.0.0.0"><!--t.1.1.1.0-->Download RDF <ion-icon name="download-outline"
                      c-id="1.2.1.1"></ion-icon></ion-button><ion-modal id="example-modal" trigger="open-custom-dialog"
                  c-id="1.3.0.1"><ion-header c-id="1.4.1.0"><ion-toolbar c-id="1.5.2.0"><ion-buttons slot="start"
                              c-id="1.6.3.0"><ion-button
                                  c-id="1.7.4.0"><!--t.1.8.5.0-->Cancel</ion-button></ion-buttons><ion-title
                              c-id="1.9.3.1"><!--t.1.10.4.0-->Download RDF</ion-title></ion-toolbar></ion-header><ion-content
                      class="ion-padding" c-id="1.11.1.1"><ion-list lines="none" c-id="1.12.2.0"><ion-item button=""
                              download="Download" c-id="1.13.3.0"><ion-icon slot="start" name="download-outline"
                                  c-id="1.14.4.0"></ion-icon><ion-label c-id="1.15.4.1"><!--t.1.16.5.0-->RDF
                                  XML</ion-label></ion-item><ion-item button="" download="Download" c-id="1.17.3.1"><ion-icon
                                  slot="start" name="download-outline" c-id="1.18.4.0"></ion-icon><ion-label
                                  c-id="1.19.4.1"><!--t.1.20.5.0-->JSON-LD</ion-label></ion-item><ion-item button=""
                              download="Download" c-id="1.21.3.2"><ion-icon slot="start" name="download-outline"
                                  c-id="1.22.4.0"></ion-icon><ion-label
                                  c-id="1.23.4.1"><!--t.1.24.5.0-->N-Triples</ion-label></ion-item><ion-item button=""
                              download="Download" c-id="1.25.3.3"><ion-icon slot="start" name="download-outline"
                                  c-id="1.26.4.0"></ion-icon><ion-label
                                  c-id="1.27.4.1"><!--t.1.28.5.0-->N-Quads</ion-label></ion-item><ion-item button=""
                              download="Download" c-id="1.29.3.4"><ion-icon slot="start" name="download-outline"
                                  c-id="1.30.4.0"></ion-icon><ion-label
                                  c-id="1.31.4.1"><!--t.1.32.5.0-->TRIX</ion-label></ion-item><ion-item button=""
                              download="Download" c-id="1.33.3.5"><ion-icon slot="start" name="download-outline"
                                  c-id="1.34.4.0"></ion-icon><ion-label
                                  c-id="1.35.4.1"><!--t.1.36.5.0-->Thrift</ion-label></ion-item><ion-item button=""
                              download="Download" c-id="1.37.3.6"><ion-icon slot="start" name="download-outline"
                                  c-id="1.38.4.0"></ion-icon><ion-label
                                  c-id="1.39.4.1"><!--t.1.40.5.0-->Turtle</ion-label></ion-item></ion-list></ion-content></ion-modal><!--s.1.41.0.2.--></geov-entity-download-rdf>
      </body>

      </html>
    `;
    const page = await newSpecPage({
      components: [GeovEntityDownloadRdf],
      includeAnnotations: true,
      hydrateClientSide: true,
      html,
    });
    await page.waitForChanges();
    expect(page.root).toEqualHtml(
      `<geov-entity-download-rdf entity-id="i785518" color="primary" expand="block" fill="outline" button-label="Download RDF"
      button-icon="download-outline" class="hydrated"><!--r.1--><ion-button id="open-custom-dialog" expand="block"
          fill="outline" color="primary">Download RDF <ion-icon name="download-outline"></ion-icon></ion-button><ion-modal
          id="example-modal" trigger="open-custom-dialog"><ion-header><ion-toolbar><ion-buttons
                      slot="start"><ion-button>Cancel</ion-button></ion-buttons><ion-title>Download
                      RDF</ion-title></ion-toolbar></ion-header><ion-content class="ion-padding"><ion-list
                  lines="none"><ion-item button="" download="Download"><ion-icon slot="start"
                          name="download-outline"></ion-icon><ion-label>RDF XML</ion-label></ion-item><ion-item button=""
                      download="Download"><ion-icon slot="start"
                          name="download-outline"></ion-icon><ion-label>JSON-LD</ion-label></ion-item><ion-item button=""
                      download="Download"><ion-icon slot="start"
                          name="download-outline"></ion-icon><ion-label>N-Triples</ion-label></ion-item><ion-item
                      button="" download="Download"><ion-icon slot="start"
                          name="download-outline"></ion-icon><ion-label>N-Quads</ion-label></ion-item><ion-item button=""
                      download="Download"><ion-icon slot="start"
                          name="download-outline"></ion-icon><ion-label>TRIX</ion-label></ion-item><ion-item button=""
                      download="Download"><ion-icon slot="start"
                          name="download-outline"></ion-icon><ion-label>Thrift</ion-label></ion-item><ion-item button=""
                      download="Download"><ion-icon slot="start"
                          name="download-outline"></ion-icon><ion-label>Turtle</ion-label></ion-item></ion-list></ion-content></ion-modal><!--s.1.41.0.2.--></geov-entity-download-rdf>`,
    );
  });
});
