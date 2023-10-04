import { mockFetch, newSpecPage } from '@stencil/core/testing';
import { renderToString } from '../../../../hydrate/index';
import { SparqlRes, SparqlBinding } from '../../../lib/sparqlJson';
import * as crypto from 'crypto';
import { GeovEntity } from '../geov-entity';

describe('geov-entity', () => {
  beforeEach(() => {
    // Mock the data returned by sparql queries
    const mockResponseClassLabel: SparqlRes<{ classLabel: SparqlBinding; t: SparqlBinding }> = {
      results: {
        bindings: [
          {
            classLabel: { type: 'literal', value: 'Person' },
            t: { type: 'uri', value: 'https://ontome.net/ontology/c21' },
          },
        ],
      },
    };
    const mockResponseDefinition: SparqlRes<{ definition: SparqlBinding }> = {
      results: {
        bindings: [
          {
            definition: {
              type: 'literal',
              value:
                "Johannes Kepler (ou Keppler), né le 27 décembre 1571 à Weil (ville libre d'Empire) et mort le 15 novembre 1630 à Ratisbonne (ville libre d'Empire), est un astronome allemand célèbre pour avoir étudié l\u2019hypothèse héliocentrique de Nicolas Copernic, affirmant que la Terre tourne autour du Soleil et surtout pour avoir découvert que les planètes ne tournent pas autour du Soleil en suivant des trajectoires circulaires parfaites mais des trajectoires elliptiques. ",
            },
          },
          {
            definition: { type: 'literal', value: '[Complément] Astronom; Mathematiker [Notes] fb_import_20140912_466' },
          },
        ],
      },
    };
    const mockResponseEntityLabel: SparqlRes<{ o: SparqlBinding }> = {
      results: {
        bindings: [
          {
            o: { type: 'literal', value: 'Kepler, Johannes' },
          },
        ],
      },
    };
    const mockResponseRest: SparqlRes<{ predicate: SparqlBinding; predicateLabel: SparqlBinding; count: SparqlBinding }> = {
      results: {
        bindings: [
          {
            predicate: { type: 'uri', value: 'https://ontome.net/ontology/p1429' },
            predicateLabel: { 'type': 'literal', 'xml:lang': 'en', 'value': 'has gender' },
            count: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#integer', value: '1' },
          },
          {
            predicate: { type: 'uri', value: 'https://ontome.net/ontology/p88i' },
            predicateLabel: { 'type': 'literal', 'xml:lang': 'en', 'value': 'died in' },
            count: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#integer', value: '1' },
          },
          {
            predicate: { type: 'uri', value: 'http://www.w3.org/2002/07/owl#sameAs' },
            predicateLabel: { 'type': 'literal', 'xml:lang': 'en', 'value': 'same as' },
            count: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#integer', value: '9' },
          },
          {
            predicate: { type: 'uri', value: 'https://ontome.net/ontology/p1111i' },
            predicateLabel: { 'type': 'literal', 'xml:lang': 'en', 'value': 'has appellation for language' },
            count: { type: 'literal', datatype: 'http://www.w3.org/2001/XMLSchema#integer', value: '1' },
          },
        ],
      },
    };
    const mockResponseTime: SparqlRes<{ predicate: SparqlBinding; predicateLabel: SparqlBinding; count: SparqlBinding }> = {
      results: {
        bindings: [],
      },
    };
    const mockResponseSameAs: SparqlRes<{ entity: SparqlBinding }> = {
      results: {
        bindings: [
          {
            entity: { type: 'uri', value: 'https://dbpedia.org/resource/Johannes_Kepler' },
          },
          {
            entity: { type: 'uri', value: 'http://viaf.org/viaf/41842150' },
          },
          {
            entity: { type: 'uri', value: 'http://d-nb.info/gnd/118561448' },
          },
        ],
      },
    };
    const mockResponsep1111i: SparqlRes<{ entity: SparqlBinding; entityLabel: SparqlBinding; entityType: SparqlBinding; entityTypeLabel: SparqlBinding }> = {
      results: {
        bindings: [
          {
            entity: { type: 'uri', value: 'http://geovistory.org/resource/i7442632' },
            entityLabel: { type: 'literal', value: 'Kepler, Johannes' },
            entityType: { type: 'uri', value: 'https://ontome.net/ontology/c868' },
            entityTypeLabel: { type: 'literal', value: 'Person Appellation in a Language' },
          },
        ],
      },
    };
    const mockResponsep1429: SparqlRes<{ entity: SparqlBinding; entityLabel: SparqlBinding; entityType: SparqlBinding; entityTypeLabel: SparqlBinding }> = {
      results: {
        bindings: [
          {
            entity: { type: 'uri', value: 'http://geovistory.org/resource/i739340' },
            entityLabel: { type: 'literal', value: 'Homme' },
            entityType: { type: 'uri', value: 'https://ontome.net/ontology/c629' },
            entityTypeLabel: { type: 'literal', value: 'Gender' },
          },
        ],
      },
    };
    const mockResponsep88i: SparqlRes<{ entity: SparqlBinding; entityLabel: SparqlBinding; entityType: SparqlBinding; entityTypeLabel: SparqlBinding }> = {
      results: {
        bindings: [
          {
            entity: { type: 'uri', value: 'http://geovistory.org/resource/i7726698' },
            entityLabel: { type: 'literal', value: 'Kepler, Johannes' },
            entityType: { type: 'uri', value: 'https://ontome.net/ontology/c63' },
            entityTypeLabel: { type: 'literal', value: 'Death' },
          },
        ],
      },
    };
    // Register the mock data for the sparql get request (URL)
    mockFetch.json(
      mockResponseClassLabel,
      'https://sparql.geovistory.org/api_v1_community_data?query=%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+geov%3A+%3Chttp%3A%2F%2Fgeovistory.org%2Fresource%2F%3E%0A%0ASELECT+%3FclassLabel+%3Ft%0AWHERE+%7B%0A++geov%3Ai785518+rdf%3Atype+%3Ft.%0A++optional%7B%3Ft+rdfs%3Alabel+%3FclassLabel%7D%0A%7D%0ALIMIT+1%0A',
    );
    mockFetch.json(
      mockResponseDefinition,
      'https://sparql.geovistory.org/api_v1_community_data?query=%0APREFIX+ontome%3A+%3Chttps%3A%2F%2Fontome.net%2Fontology%2F%3E%0APREFIX+geov%3A+%3Chttp%3A%2F%2Fgeovistory.org%2Fresource%2F%3E%0A%0ASELECT++%3Fdefinition%0AWHERE+%7B%0A++geov%3Ai785518+ontome%3Ap1762+%2F+ontome%3Ap1864+%3Fdefinition%3B%0A%7D%0ALIMIT+10%0A',
    );
    mockFetch.json(
      mockResponseEntityLabel,
      'https://sparql.geovistory.org/api_v1_community_data?query=%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+geov%3A+%3Chttp%3A%2F%2Fgeovistory.org%2Fresource%2F%3E%0A%0ASELECT+%3Fo%0AWHERE+%7B%0A++geov%3Ai785518+rdfs%3Alabel+%3Fo+.%0A%7D%0ALIMIT+1%0A',
    );
    mockFetch.json(
      mockResponseRest,
      'https://sparql.geovistory.org/api_v1_community_data?query=%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX+xml%3A+%3Chttp%3A%2F%2Fwww.w3.org%2FXML%2F1998%2Fnamespace%3E%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0APREFIX+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0APREFIX+time%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Ftime%23%3E%0APREFIX+ontome%3A+%3Chttps%3A%2F%2Fontome.net%2Fontology%2F%3E%0APREFIX+geov%3A+%3Chttp%3A%2F%2Fgeovistory.org%2Fresource%2F%3E%0A%0A%0A++++SELECT+%3Fpredicate+%3FpredicateLabel+%28count%28distinct+%3Fobject%29+as+%3Fcount%29%0A++++WHERE+%7B%0A++++++geov%3Ai785518+%3Fpredicate+%3Fobject+.%0A++++++OPTIONAL+%7B%0A++++++++%3Fpredicate+rdfs%3Alabel+%3FpredicateLabel+.%0A++++++++FILTER%28LANG%28%3FpredicateLabel%29+IN+%28%22en%22%2C+%22en%22%29%29%0A++++++%7D+.%0A++++++FILTER+%28str%28%3Fpredicate%29+NOT+IN+%28%0A++++++%22http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23label%22%2C%0A++++++++%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23type%22%2C%0A++++++++%22https%3A%2F%2Fontome.net%2Fontology%2Fp4%22%2C%0A++++++++%22https%3A%2F%2Fontome.net%2Fontology%2Fp1943%22%2C%0A++++++++%22https%3A%2F%2Fontome.net%2Fontology%2Fp1762%22%0A++++++%29%29%0A++++%7D%0A++++GROUP+BY+%3Fpredicate+%3FpredicateLabel%0A++++%0A',
    );
    mockFetch.json(
      mockResponseTime,
      'https://sparql.geovistory.org/api_v1_project_924033?query=%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX+xml%3A+%3Chttp%3A%2F%2Fwww.w3.org%2FXML%2F1998%2Fnamespace%3E%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0APREFIX+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0APREFIX+time%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Ftime%23%3E%0APREFIX+ontome%3A+%3Chttps%3A%2F%2Fontome.net%2Fontology%2F%3E%0APREFIX+geov%3A+%3Chttp%3A%2F%2Fgeovistory.org%2Fresource%2F%3E%0A%0ASELECT+*+%7B%0A++++++%0A++++++%7B%0A++++++++SELECT+%28%3Chttps%3A%2F%2Fontome.net%2Fontology%2Fp4%3E+as+%3Fpredicate%29+%3FpredicateLabel+%28count%28distinct+%3Fobject%29+as+%3Fcount%29%0A++++++++WHERE+%7B%0A++++++++++geov%3Ai542181+%3Chttps%3A%2F%2Fontome.net%2Fontology%2Fp4%3E+%3Fobject+.%0A++++++++++OPTIONAL+%7B%0A++++++++++++%3Chttps%3A%2F%2Fontome.net%2Fontology%2Fp4%3E+rdfs%3Alabel+%3FpredicateLabel+.%0A++++++++++++FILTER%28LANG%28%3FpredicateLabel%29+IN+%28%22en%22%2C+%22en%22%29%29%0A++++++++++%7D+.%0A++++++++++%0A++++++++%7D%0A++++++++GROUP+BY+%3Fpredicate+%3FpredicateLabel%0A++++++%7D%0A++++%7D%0A',
    );
    mockFetch.json(
      mockResponseSameAs,
      'https://sparql.geovistory.org/api_v1_community_data?query=%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX+xml%3A+%3Chttp%3A%2F%2Fwww.w3.org%2FXML%2F1998%2Fnamespace%3E%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0APREFIX+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0APREFIX+time%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Ftime%23%3E%0APREFIX+ontome%3A+%3Chttps%3A%2F%2Fontome.net%2Fontology%2F%3E%0APREFIX+geov%3A+%3Chttp%3A%2F%2Fgeovistory.org%2Fresource%2F%3E%0A%0ASELECT+DISTINCT+%3Fentity+%3FentityLabel+%3FentityType+%3FentityTypeLabel+%3Fdt%0AWHERE+%7B%0A++geov%3Ai785518+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23sameAs%3E+%3Fentity+.%0A++OPTIONAL+%7B%3Fentity+rdfs%3Alabel+%3FentityLabel+.%7D%0A++OPTIONAL+%7B%3Fentity+rdf%3Atype+%3FentityType+.+OPTIONAL+%7B%3FentityType+rdfs%3Alabel+%3FentityTypeLabel+.%7D%7D%0A++BIND+%28datatype%28%3Fentity%29+AS+%3Fdt%29+.%0A%7D%0ALIMIT+3+OFFSET+0%0A',
    );
    mockFetch.json(
      mockResponsep1111i,
      'https://sparql.geovistory.org/api_v1_community_data?query=%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX+xml%3A+%3Chttp%3A%2F%2Fwww.w3.org%2FXML%2F1998%2Fnamespace%3E%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0APREFIX+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0APREFIX+time%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Ftime%23%3E%0APREFIX+ontome%3A+%3Chttps%3A%2F%2Fontome.net%2Fontology%2F%3E%0APREFIX+geov%3A+%3Chttp%3A%2F%2Fgeovistory.org%2Fresource%2F%3E%0A%0ASELECT+DISTINCT+%3Fentity+%3FentityLabel+%3FentityType+%3FentityTypeLabel+%3Fdt%0AWHERE+%7B%0A++geov%3Ai785518+%3Chttps%3A%2F%2Fontome.net%2Fontology%2Fp1111i%3E+%3Fentity+.%0A++OPTIONAL+%7B%3Fentity+rdfs%3Alabel+%3FentityLabel+.%7D%0A++OPTIONAL+%7B%3Fentity+rdf%3Atype+%3FentityType+.+OPTIONAL+%7B%3FentityType+rdfs%3Alabel+%3FentityTypeLabel+.%7D%7D%0A++BIND+%28datatype%28%3Fentity%29+AS+%3Fdt%29+.%0A%7D%0ALIMIT+3+OFFSET+0%0A',
    );
    mockFetch.json(
      mockResponsep1429,
      'https://sparql.geovistory.org/api_v1_community_data?query=%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX+xml%3A+%3Chttp%3A%2F%2Fwww.w3.org%2FXML%2F1998%2Fnamespace%3E%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0APREFIX+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0APREFIX+time%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Ftime%23%3E%0APREFIX+ontome%3A+%3Chttps%3A%2F%2Fontome.net%2Fontology%2F%3E%0APREFIX+geov%3A+%3Chttp%3A%2F%2Fgeovistory.org%2Fresource%2F%3E%0A%0ASELECT+DISTINCT+%3Fentity+%3FentityLabel+%3FentityType+%3FentityTypeLabel+%3Fdt%0AWHERE+%7B%0A++geov%3Ai785518+%3Chttps%3A%2F%2Fontome.net%2Fontology%2Fp1429%3E+%3Fentity+.%0A++OPTIONAL+%7B%3Fentity+rdfs%3Alabel+%3FentityLabel+.%7D%0A++OPTIONAL+%7B%3Fentity+rdf%3Atype+%3FentityType+.+OPTIONAL+%7B%3FentityType+rdfs%3Alabel+%3FentityTypeLabel+.%7D%7D%0A++BIND+%28datatype%28%3Fentity%29+AS+%3Fdt%29+.%0A%7D%0ALIMIT+3+OFFSET+0%0A',
    );
    mockFetch.json(
      mockResponsep88i,
      'https://sparql.geovistory.org/api_v1_community_data?query=%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX+xml%3A+%3Chttp%3A%2F%2Fwww.w3.org%2FXML%2F1998%2Fnamespace%3E%0APREFIX+xsd%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0APREFIX+geo%3A+%3Chttp%3A%2F%2Fwww.opengis.net%2Font%2Fgeosparql%23%3E%0APREFIX+time%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2006%2Ftime%23%3E%0APREFIX+ontome%3A+%3Chttps%3A%2F%2Fontome.net%2Fontology%2F%3E%0APREFIX+geov%3A+%3Chttp%3A%2F%2Fgeovistory.org%2Fresource%2F%3E%0A%0ASELECT+DISTINCT+%3Fentity+%3FentityLabel+%3FentityType+%3FentityTypeLabel+%3Fdt%0AWHERE+%7B%0A++geov%3Ai785518+%3Chttps%3A%2F%2Fontome.net%2Fontology%2Fp88i%3E+%3Fentity+.%0A++OPTIONAL+%7B%3Fentity+rdfs%3Alabel+%3FentityLabel+.%7D%0A++OPTIONAL+%7B%3Fentity+rdf%3Atype+%3FentityType+.+OPTIONAL+%7B%3FentityType+rdfs%3Alabel+%3FentityTypeLabel+.%7D%7D%0A++BIND+%28datatype%28%3Fentity%29+AS+%3Fdt%29+.%0A%7D%0ALIMIT+3+OFFSET+0%0A',
    );
  });

  it('Server side (hydrate-script): renders initial state', async () => {
    let serverFetchedData;
    const html = `<geov-entity sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data" entity-id="i785518" language="en" fetch-before-render="true"></geov-entity>`;

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

    // check that queries return the hash of this data in the expected hash
    const hash = crypto.createHash('md5').update(JSON.stringify(serverFetchedData)).digest('hex');
    expect(hash).toEqual('68a5740fcbe1a24c97e1f487d33250a9');

    expect(rendered.html).toEqualHtml(`<meta charset=\"utf-8\">
    <style sty-id=\"sc-geov-entity\">
      :host{display:block}.container{background:var(--ion-color-tertiary);color:var(--ion-color-tertiary-contrast)}.header{padding:var(--ion-padding)}.header h1{margin-top:0}.header geov-entity-class-label,.header geov-entity-definition{overflow:hidden;text-overflow:ellipsis}.section{display:block;color:var(--ion-color-tertiary-contrast);padding:24px 0}.section:nth-child(even){background:var(--ion-color-tertiary-shade)}.section:nth-child(odd){background:var(--ion-color-tertiary)}.columns-1{--column-count:1;--column-gap:0px}.columns-2{--column-count:1;--column-gap:0px}.columns-3{--column-count:1;--column-gap:0px}@media screen and (min-width: 992px){.columns-3,.columns-2{--column-count:2}}@media screen and (min-width: 1200px){.columns-3{--column-count:3}}p.supertitle geov-entity-class-label{font-size:1.7rem}
    </style>
    <style sty-id=\"sc-geov-entity-download-rdf\">
      :host{display:block}
    </style>
    <style sty-id=\"sc-geov-entity-class-label\">
      /*!@:host*/.sc-geov-entity-class-label-h{display:inline;vertical-align:middle}
    </style>
    <style sty-id=\"sc-geov-entity-label\">
      /*!@:host*/.sc-geov-entity-label-h{display:block;margin-top:0}
    </style>
    <style sty-id=\"sc-geov-entity-definition\">
      /*!@:host*/.sc-geov-entity-definition-h{display:block}
    </style>
    <style sty-id=\"sc-geov-entity-properties\">
      /*!@html.ios*/html.ios.sc-geov-entity-properties{--ion-default-font:-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif}/*!@html.md*/html.md.sc-geov-entity-properties{--ion-default-font:\"Roboto\", \"Helvetica Neue\", sans-serif}/*!@html*/html.sc-geov-entity-properties{--ion-font-family:var(--ion-default-font)}/*!@body*/body.sc-geov-entity-properties{background:var(--ion-background-color)}/*!@body.backdrop-no-scroll*/body.backdrop-no-scroll.sc-geov-entity-properties{overflow:hidden}/*!@html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,
html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,
html.ios ion-modal ion-footer ion-toolbar:first-of-type*/html.ios.sc-geov-entity-properties ion-modal.modal-card.sc-geov-entity-properties ion-header.sc-geov-entity-properties ion-toolbar.sc-geov-entity-properties:first-of-type,html.ios.sc-geov-entity-properties ion-modal.modal-sheet.sc-geov-entity-properties ion-header.sc-geov-entity-properties ion-toolbar.sc-geov-entity-properties:first-of-type,html.ios.sc-geov-entity-properties ion-modal.sc-geov-entity-properties ion-footer.sc-geov-entity-properties ion-toolbar.sc-geov-entity-properties:first-of-type{padding-top:6px}/*!@html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,
html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type*/html.ios.sc-geov-entity-properties ion-modal.modal-card.sc-geov-entity-properties ion-header.sc-geov-entity-properties ion-toolbar.sc-geov-entity-properties:last-of-type,html.ios.sc-geov-entity-properties ion-modal.modal-sheet.sc-geov-entity-properties ion-header.sc-geov-entity-properties ion-toolbar.sc-geov-entity-properties:last-of-type{padding-bottom:6px}/*!@html.ios ion-modal ion-toolbar*/html.ios.sc-geov-entity-properties ion-modal.sc-geov-entity-properties ion-toolbar.sc-geov-entity-properties{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){/*!@html.ios ion-modal.modal-card:first-of-type*/html.ios.sc-geov-entity-properties ion-modal.modal-card.sc-geov-entity-properties:first-of-type{--backdrop-opacity:0.18}}/*!@ion-modal.modal-default.show-modal ~ ion-modal.modal-default*/ion-modal.modal-default.show-modal.sc-geov-entity-properties~ion-modal.modal-default.sc-geov-entity-properties{--backdrop-opacity:0;--box-shadow:none}/*!@html.ios ion-modal.modal-card .ion-page*/html.ios.sc-geov-entity-properties ion-modal.modal-card.sc-geov-entity-properties .ion-page.sc-geov-entity-properties{border-top-left-radius:var(--border-radius)}/*!@.ion-color-primary*/.ion-color-primary.sc-geov-entity-properties{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}/*!@.ion-color-secondary*/.ion-color-secondary.sc-geov-entity-properties{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}/*!@.ion-color-tertiary*/.ion-color-tertiary.sc-geov-entity-properties{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}/*!@.ion-color-success*/.ion-color-success.sc-geov-entity-properties{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}/*!@.ion-color-warning*/.ion-color-warning.sc-geov-entity-properties{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}/*!@.ion-color-danger*/.ion-color-danger.sc-geov-entity-properties{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}/*!@.ion-color-light*/.ion-color-light.sc-geov-entity-properties{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}/*!@.ion-color-medium*/.ion-color-medium.sc-geov-entity-properties{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}/*!@.ion-color-dark*/.ion-color-dark.sc-geov-entity-properties{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}/*!@.ion-page*/.ion-page.sc-geov-entity-properties{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}/*!@ion-modal > .ion-page*/ion-modal.sc-geov-entity-properties>.ion-page.sc-geov-entity-properties{position:relative;contain:layout style;height:100%}/*!@.split-pane-visible > .ion-page.split-pane-main*/.split-pane-visible.sc-geov-entity-properties>.ion-page.split-pane-main.sc-geov-entity-properties{position:relative}/*!@ion-route,
ion-route-redirect,
ion-router,
ion-select-option,
ion-nav-controller,
ion-menu-controller,
ion-action-sheet-controller,
ion-alert-controller,
ion-loading-controller,
ion-modal-controller,
ion-picker-controller,
ion-popover-controller,
ion-toast-controller,
.ion-page-hidden*/ion-route.sc-geov-entity-properties,ion-route-redirect.sc-geov-entity-properties,ion-router.sc-geov-entity-properties,ion-select-option.sc-geov-entity-properties,ion-nav-controller.sc-geov-entity-properties,ion-menu-controller.sc-geov-entity-properties,ion-action-sheet-controller.sc-geov-entity-properties,ion-alert-controller.sc-geov-entity-properties,ion-loading-controller.sc-geov-entity-properties,ion-modal-controller.sc-geov-entity-properties,ion-picker-controller.sc-geov-entity-properties,ion-popover-controller.sc-geov-entity-properties,ion-toast-controller.sc-geov-entity-properties,.ion-page-hidden.sc-geov-entity-properties{display:none !important}/*!@.ion-page-invisible*/.ion-page-invisible.sc-geov-entity-properties{opacity:0}/*!@.can-go-back > ion-header ion-back-button*/.can-go-back.sc-geov-entity-properties>ion-header.sc-geov-entity-properties ion-back-button.sc-geov-entity-properties{display:block}/*!@html.plt-ios.plt-hybrid, html.plt-ios.plt-pwa*/html.plt-ios.plt-hybrid.sc-geov-entity-properties,html.plt-ios.plt-pwa.sc-geov-entity-properties{--ion-statusbar-padding:20px}@supports (padding-top: 20px){/*!@html*/html.sc-geov-entity-properties{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){/*!@html*/html.sc-geov-entity-properties{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){/*!@html*/html.sc-geov-entity-properties{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}/*!@ion-card.ion-color .ion-inherit-color,
ion-card-header.ion-color .ion-inherit-color*/ion-card.ion-color.sc-geov-entity-properties .ion-inherit-color.sc-geov-entity-properties,ion-card-header.ion-color.sc-geov-entity-properties .ion-inherit-color.sc-geov-entity-properties{color:inherit}/*!@.menu-content*/.menu-content.sc-geov-entity-properties{transform:translate3d(0,  0,  0)}/*!@.menu-content-open*/.menu-content-open.sc-geov-entity-properties{cursor:pointer;touch-action:manipulation;pointer-events:none}/*!@.ios .menu-content-reveal*/.ios.sc-geov-entity-properties .menu-content-reveal.sc-geov-entity-properties{box-shadow:-8px 0 42px rgba(0, 0, 0, 0.08)}/*!@[dir=rtl].ios .menu-content-reveal*/[dir=rtl].ios.sc-geov-entity-properties .menu-content-reveal.sc-geov-entity-properties{box-shadow:8px 0 42px rgba(0, 0, 0, 0.08)}/*!@.md .menu-content-reveal*/.md.sc-geov-entity-properties .menu-content-reveal.sc-geov-entity-properties{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}/*!@.md .menu-content-push*/.md.sc-geov-entity-properties .menu-content-push.sc-geov-entity-properties{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}/*!@ion-accordion-group.accordion-group-expand-inset > ion-accordion:first-of-type*/ion-accordion-group.accordion-group-expand-inset.sc-geov-entity-properties>ion-accordion.sc-geov-entity-properties:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}/*!@ion-accordion-group.accordion-group-expand-inset > ion-accordion:last-of-type*/ion-accordion-group.accordion-group-expand-inset.sc-geov-entity-properties>ion-accordion.sc-geov-entity-properties:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}/*!@ion-accordion-group > ion-accordion:last-of-type ion-item[slot=header]*/ion-accordion-group.sc-geov-entity-properties>ion-accordion.sc-geov-entity-properties:last-of-type ion-item[slot=header].sc-geov-entity-properties{--border-width:0px}/*!@ion-accordion.accordion-animated > [slot=header] .ion-accordion-toggle-icon*/ion-accordion.accordion-animated.sc-geov-entity-properties>[slot=header].sc-geov-entity-properties .ion-accordion-toggle-icon.sc-geov-entity-properties{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){/*!@ion-accordion .ion-accordion-toggle-icon*/ion-accordion.sc-geov-entity-properties .ion-accordion-toggle-icon.sc-geov-entity-properties{transition:none !important}}/*!@ion-accordion.accordion-expanding > [slot=header] .ion-accordion-toggle-icon,
ion-accordion.accordion-expanded > [slot=header] .ion-accordion-toggle-icon*/ion-accordion.accordion-expanding.sc-geov-entity-properties>[slot=header].sc-geov-entity-properties .ion-accordion-toggle-icon.sc-geov-entity-properties,ion-accordion.accordion-expanded.sc-geov-entity-properties>[slot=header].sc-geov-entity-properties .ion-accordion-toggle-icon.sc-geov-entity-properties{transform:rotate(180deg)}/*!@ion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-previous ion-item[slot=header]*/ion-accordion-group.accordion-group-expand-inset.md.sc-geov-entity-properties>ion-accordion.accordion-previous.sc-geov-entity-properties ion-item[slot=header].sc-geov-entity-properties{--border-width:0px;--inner-border-width:0px}/*!@ion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanding:first-of-type,
ion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanded:first-of-type*/ion-accordion-group.accordion-group-expand-inset.md.sc-geov-entity-properties>ion-accordion.accordion-expanding.sc-geov-entity-properties:first-of-type,ion-accordion-group.accordion-group-expand-inset.md.sc-geov-entity-properties>ion-accordion.accordion-expanded.sc-geov-entity-properties:first-of-type{margin-top:0}/*!@ion-input input::-webkit-date-and-time-value*/ion-input.sc-geov-entity-properties input.sc-geov-entity-properties::-webkit-date-and-time-value{text-align:start}/*!@.ion-datetime-button-overlay*/.ion-datetime-button-overlay.sc-geov-entity-properties{--width:fit-content;--height:fit-content}/*!@.ion-datetime-button-overlay ion-datetime.datetime-grid*/.ion-datetime-button-overlay.sc-geov-entity-properties ion-datetime.datetime-grid.sc-geov-entity-properties{width:320px;min-height:320px}/*!@:host.container,
.container*/.container.sc-geov-entity-properties-h,.container.sc-geov-entity-properties{display:block;column-count:var(--column-count);column-gap:var(--column-gap);column-rule-style:var(--column-rule-style);column-rule-width:var(--column-rule-width);column-rule-color:var(--column-rule-color);column-rule:var(--column-rule);column-span:var(--column-span);column-width:var(--column-width)}/*!@geov-entity-props-by-predicate ~ geov-entity-props-by-predicate*/geov-entity-props-by-predicate.sc-geov-entity-properties~geov-entity-props-by-predicate.sc-geov-entity-properties{margin-top:24px}
      </style>
      <style sty-id=\"sc-geov-entity-class-icon\">
        /*!@:host*/.sc-geov-entity-class-icon-h{display:inline;vertical-align:middle}/*!@ion-icon*/ion-icon.sc-geov-entity-class-icon{--ion-margin:0.3em;margin-right:var(--ion-margin)}
      </style>
      <style sty-id=\"sc-geov-entity-props-by-predicate\">
        /*!@html.ios*/html.ios.sc-geov-entity-props-by-predicate{--ion-default-font:-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif}/*!@html.md*/html.md.sc-geov-entity-props-by-predicate{--ion-default-font:\"Roboto\", \"Helvetica Neue\", sans-serif}/*!@html*/html.sc-geov-entity-props-by-predicate{--ion-font-family:var(--ion-default-font)}/*!@body*/body.sc-geov-entity-props-by-predicate{background:var(--ion-background-color)}/*!@body.backdrop-no-scroll*/body.backdrop-no-scroll.sc-geov-entity-props-by-predicate{overflow:hidden}/*!@html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,
html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,
html.ios ion-modal ion-footer ion-toolbar:first-of-type*/html.ios.sc-geov-entity-props-by-predicate ion-modal.modal-card.sc-geov-entity-props-by-predicate ion-header.sc-geov-entity-props-by-predicate ion-toolbar.sc-geov-entity-props-by-predicate:first-of-type,html.ios.sc-geov-entity-props-by-predicate ion-modal.modal-sheet.sc-geov-entity-props-by-predicate ion-header.sc-geov-entity-props-by-predicate ion-toolbar.sc-geov-entity-props-by-predicate:first-of-type,html.ios.sc-geov-entity-props-by-predicate ion-modal.sc-geov-entity-props-by-predicate ion-footer.sc-geov-entity-props-by-predicate ion-toolbar.sc-geov-entity-props-by-predicate:first-of-type{padding-top:6px}/*!@html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,
html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type*/html.ios.sc-geov-entity-props-by-predicate ion-modal.modal-card.sc-geov-entity-props-by-predicate ion-header.sc-geov-entity-props-by-predicate ion-toolbar.sc-geov-entity-props-by-predicate:last-of-type,html.ios.sc-geov-entity-props-by-predicate ion-modal.modal-sheet.sc-geov-entity-props-by-predicate ion-header.sc-geov-entity-props-by-predicate ion-toolbar.sc-geov-entity-props-by-predicate:last-of-type{padding-bottom:6px}/*!@html.ios ion-modal ion-toolbar*/html.ios.sc-geov-entity-props-by-predicate ion-modal.sc-geov-entity-props-by-predicate ion-toolbar.sc-geov-entity-props-by-predicate{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){/*!@html.ios ion-modal.modal-card:first-of-type*/html.ios.sc-geov-entity-props-by-predicate ion-modal.modal-card.sc-geov-entity-props-by-predicate:first-of-type{--backdrop-opacity:0.18}}/*!@ion-modal.modal-default.show-modal ~ ion-modal.modal-default*/ion-modal.modal-default.show-modal.sc-geov-entity-props-by-predicate~ion-modal.modal-default.sc-geov-entity-props-by-predicate{--backdrop-opacity:0;--box-shadow:none}/*!@html.ios ion-modal.modal-card .ion-page*/html.ios.sc-geov-entity-props-by-predicate ion-modal.modal-card.sc-geov-entity-props-by-predicate .ion-page.sc-geov-entity-props-by-predicate{border-top-left-radius:var(--border-radius)}/*!@.ion-color-primary*/.ion-color-primary.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}/*!@.ion-color-secondary*/.ion-color-secondary.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}/*!@.ion-color-tertiary*/.ion-color-tertiary.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}/*!@.ion-color-success*/.ion-color-success.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}/*!@.ion-color-warning*/.ion-color-warning.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}/*!@.ion-color-danger*/.ion-color-danger.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}/*!@.ion-color-light*/.ion-color-light.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}/*!@.ion-color-medium*/.ion-color-medium.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}/*!@.ion-color-dark*/.ion-color-dark.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}/*!@.ion-page*/.ion-page.sc-geov-entity-props-by-predicate{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}/*!@ion-modal > .ion-page*/ion-modal.sc-geov-entity-props-by-predicate>.ion-page.sc-geov-entity-props-by-predicate{position:relative;contain:layout style;height:100%}/*!@.split-pane-visible > .ion-page.split-pane-main*/.split-pane-visible.sc-geov-entity-props-by-predicate>.ion-page.split-pane-main.sc-geov-entity-props-by-predicate{position:relative}/*!@ion-route,
ion-route-redirect,
ion-router,
ion-select-option,
ion-nav-controller,
ion-menu-controller,
ion-action-sheet-controller,
ion-alert-controller,
ion-loading-controller,
ion-modal-controller,
ion-picker-controller,
ion-popover-controller,
ion-toast-controller,
.ion-page-hidden*/ion-route.sc-geov-entity-props-by-predicate,ion-route-redirect.sc-geov-entity-props-by-predicate,ion-router.sc-geov-entity-props-by-predicate,ion-select-option.sc-geov-entity-props-by-predicate,ion-nav-controller.sc-geov-entity-props-by-predicate,ion-menu-controller.sc-geov-entity-props-by-predicate,ion-action-sheet-controller.sc-geov-entity-props-by-predicate,ion-alert-controller.sc-geov-entity-props-by-predicate,ion-loading-controller.sc-geov-entity-props-by-predicate,ion-modal-controller.sc-geov-entity-props-by-predicate,ion-picker-controller.sc-geov-entity-props-by-predicate,ion-popover-controller.sc-geov-entity-props-by-predicate,ion-toast-controller.sc-geov-entity-props-by-predicate,.ion-page-hidden.sc-geov-entity-props-by-predicate{display:none !important}/*!@.ion-page-invisible*/.ion-page-invisible.sc-geov-entity-props-by-predicate{opacity:0}/*!@.can-go-back > ion-header ion-back-button*/.can-go-back.sc-geov-entity-props-by-predicate>ion-header.sc-geov-entity-props-by-predicate ion-back-button.sc-geov-entity-props-by-predicate{display:block}/*!@html.plt-ios.plt-hybrid, html.plt-ios.plt-pwa*/html.plt-ios.plt-hybrid.sc-geov-entity-props-by-predicate,html.plt-ios.plt-pwa.sc-geov-entity-props-by-predicate{--ion-statusbar-padding:20px}@supports (padding-top: 20px){/*!@html*/html.sc-geov-entity-props-by-predicate{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){/*!@html*/html.sc-geov-entity-props-by-predicate{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){/*!@html*/html.sc-geov-entity-props-by-predicate{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}/*!@ion-card.ion-color .ion-inherit-color,
ion-card-header.ion-color .ion-inherit-color*/ion-card.ion-color.sc-geov-entity-props-by-predicate .ion-inherit-color.sc-geov-entity-props-by-predicate,ion-card-header.ion-color.sc-geov-entity-props-by-predicate .ion-inherit-color.sc-geov-entity-props-by-predicate{color:inherit}/*!@.menu-content*/.menu-content.sc-geov-entity-props-by-predicate{transform:translate3d(0,  0,  0)}/*!@.menu-content-open*/.menu-content-open.sc-geov-entity-props-by-predicate{cursor:pointer;touch-action:manipulation;pointer-events:none}/*!@.ios .menu-content-reveal*/.ios.sc-geov-entity-props-by-predicate .menu-content-reveal.sc-geov-entity-props-by-predicate{box-shadow:-8px 0 42px rgba(0, 0, 0, 0.08)}/*!@[dir=rtl].ios .menu-content-reveal*/[dir=rtl].ios.sc-geov-entity-props-by-predicate .menu-content-reveal.sc-geov-entity-props-by-predicate{box-shadow:8px 0 42px rgba(0, 0, 0, 0.08)}/*!@.md .menu-content-reveal*/.md.sc-geov-entity-props-by-predicate .menu-content-reveal.sc-geov-entity-props-by-predicate{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}/*!@.md .menu-content-push*/.md.sc-geov-entity-props-by-predicate .menu-content-push.sc-geov-entity-props-by-predicate{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}/*!@ion-accordion-group.accordion-group-expand-inset > ion-accordion:first-of-type*/ion-accordion-group.accordion-group-expand-inset.sc-geov-entity-props-by-predicate>ion-accordion.sc-geov-entity-props-by-predicate:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}/*!@ion-accordion-group.accordion-group-expand-inset > ion-accordion:last-of-type*/ion-accordion-group.accordion-group-expand-inset.sc-geov-entity-props-by-predicate>ion-accordion.sc-geov-entity-props-by-predicate:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}/*!@ion-accordion-group > ion-accordion:last-of-type ion-item[slot=header]*/ion-accordion-group.sc-geov-entity-props-by-predicate>ion-accordion.sc-geov-entity-props-by-predicate:last-of-type ion-item[slot=header].sc-geov-entity-props-by-predicate{--border-width:0px}/*!@ion-accordion.accordion-animated > [slot=header] .ion-accordion-toggle-icon*/ion-accordion.accordion-animated.sc-geov-entity-props-by-predicate>[slot=header].sc-geov-entity-props-by-predicate .ion-accordion-toggle-icon.sc-geov-entity-props-by-predicate{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){/*!@ion-accordion .ion-accordion-toggle-icon*/ion-accordion.sc-geov-entity-props-by-predicate .ion-accordion-toggle-icon.sc-geov-entity-props-by-predicate{transition:none !important}}/*!@ion-accordion.accordion-expanding > [slot=header] .ion-accordion-toggle-icon,
ion-accordion.accordion-expanded > [slot=header] .ion-accordion-toggle-icon*/ion-accordion.accordion-expanding.sc-geov-entity-props-by-predicate>[slot=header].sc-geov-entity-props-by-predicate .ion-accordion-toggle-icon.sc-geov-entity-props-by-predicate,ion-accordion.accordion-expanded.sc-geov-entity-props-by-predicate>[slot=header].sc-geov-entity-props-by-predicate .ion-accordion-toggle-icon.sc-geov-entity-props-by-predicate{transform:rotate(180deg)}/*!@ion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-previous ion-item[slot=header]*/ion-accordion-group.accordion-group-expand-inset.md.sc-geov-entity-props-by-predicate>ion-accordion.accordion-previous.sc-geov-entity-props-by-predicate ion-item[slot=header].sc-geov-entity-props-by-predicate{--border-width:0px;--inner-border-width:0px}/*!@ion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanding:first-of-type,
ion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanded:first-of-type*/ion-accordion-group.accordion-group-expand-inset.md.sc-geov-entity-props-by-predicate>ion-accordion.accordion-expanding.sc-geov-entity-props-by-predicate:first-of-type,ion-accordion-group.accordion-group-expand-inset.md.sc-geov-entity-props-by-predicate>ion-accordion.accordion-expanded.sc-geov-entity-props-by-predicate:first-of-type{margin-top:0}/*!@ion-input input::-webkit-date-and-time-value*/ion-input.sc-geov-entity-props-by-predicate input.sc-geov-entity-props-by-predicate::-webkit-date-and-time-value{text-align:start}/*!@.ion-datetime-button-overlay*/.ion-datetime-button-overlay.sc-geov-entity-props-by-predicate{--width:fit-content;--height:fit-content}/*!@.ion-datetime-button-overlay ion-datetime.datetime-grid*/.ion-datetime-button-overlay.sc-geov-entity-props-by-predicate ion-datetime.datetime-grid.sc-geov-entity-props-by-predicate{width:320px;min-height:320px}/*!@:host*/.sc-geov-entity-props-by-predicate-h{display:block}/*!@ion-card*/ion-card.sc-geov-entity-props-by-predicate{box-shadow:none !important;margin:0 16px !important}/*!@geov-paginator*/geov-paginator.sc-geov-entity-props-by-predicate{margin-left:auto}
    </style>
    <style sty-id=\"sc-geov-paginator\">
      /*!@:host*/.sc-geov-paginator-h{display:flex;align-items:center;flex-direction:row;flex-wrap:wrap}
    </style>
    <geov-entity class=\"hydrated\" entity-id=\"i785518\" fetch-before-render=\"true\" language=\"en\" s-id=\"1\" sparql-endpoint=\"https://sparql.geovistory.org/api_v1_community_data\">
      <!--r.1-->
      <div c-id=\"1.0.0.0\" class=\"container\">
        <div c-id=\"1.1.1.0\" class=\"header\">
          <ion-grid c-id=\"1.2.2.0\" class=\"ion-padding\" fixed=\"\">
            <p c-id=\"1.3.3.0\" class=\"supertitle\">
              <geov-entity-class-label _ssr-id=\"classLabel\" c-id=\"1.4.4.0\" class=\"hydrated sc-geov-entity-class-label-h sc-geov-entity-class-label-s\" s-id=\"2\">
                <!--r.2-->
                <geov-entity-class-icon c-id=\"2.0.0.0\" class=\"hydrated sc-geov-entity-class-icon-h sc-geov-entity-class-label\" s-id=\"3\">
                  <!--r.3-->
                  <ion-icon c-id=\"3.0.0.0\" class=\"sc-geov-entity-class-icon\" icon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z'/><path d='M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z'/></svg>\"></ion-icon>
                </geov-entity-class-icon>
                <!--t.2.1.0.1-->
                Person
                <!--s.2.2.0.2.-->
              </geov-entity-class-label>
            </p>
            <h1 c-id=\"1.5.3.1\">
              <geov-entity-label _ssr-id=\"entityLabel\" c-id=\"1.6.4.0\" class=\"hydrated sc-geov-entity-label-h sc-geov-entity-label-s\" s-id=\"4\">
                <!--r.4-->
                <!--t.4.0.0.0-->
                Kepler, Johannes
                <!--s.4.1.0.1.-->
              </geov-entity-label>
            </h1>
            <p c-id=\"1.7.3.2\">
              <geov-entity-definition _ssr-id=\"definition\" c-id=\"1.8.4.0\" class=\"hydrated sc-geov-entity-definition-h sc-geov-entity-definition-s\" s-id=\"5\">
                <!--r.5-->
              </geov-entity-definition>
            </p>
            <p c-id=\"5.0.0.0\" class=\"definition sc-geov-entity-definition\">
              <!--t.5.1.1.0-->
              Johannes Kepler (ou Keppler), né le 27 décembre 1571 à Weil (ville libre d'Empire) et mort le 15 novembre 1630 à Ratisbonne (ville libre d'Empire), est un astronome allemand célèbre pour avoir étudié l’hypothèse héliocentrique de Nicolas Copernic, affirmant que la Terre tourne autour du Soleil et surtout pour avoir découvert que les planètes ne tournent pas autour du Soleil en suivant des trajectoires circulaires parfaites mais des trajectoires elliptiques.
            </p>
            <p c-id=\"5.2.0.1\" class=\"definition sc-geov-entity-definition\">
              <!--t.5.3.1.0-->
              [Complément] Astronom; Mathematiker [Notes] fb_import_20140912_466
            </p>
            <!--s.5.4.0.2.-->
            <p></p>
          </ion-grid>
        </div>
        <!--s.1.9.1.1.body-start-->
        <geov-entity-properties _ssr-id=\"rest\" c-id=\"1.10.1.2\" class=\"columns-3 hydrated sc-geov-entity-properties-h section\" s-id=\"6\">
          <!--r.6-->
          <ion-grid c-id=\"6.0.0.0\" class=\"container sc-geov-entity-properties\" fixed=\"\">
            <geov-entity-props-by-predicate _ssr-id=\"entityPropsByPredicate_p1429\" c-id=\"6.1.1.0\" class=\"hydrated sc-geov-entity-properties sc-geov-entity-props-by-predicate-h\" s-id=\"7\">
              <!--r.7-->
              <ion-card c-id=\"7.0.0.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\">
                <ion-card-header c-id=\"7.1.1.0\" class=\"sc-geov-entity-props-by-predicate\">
                  <ion-card-subtitle c-id=\"7.2.2.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <!--t.7.3.3.0-->
                    has gender
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-list c-id=\"7.4.1.1\" class=\"sc-geov-entity-props-by-predicate\" lines=\"none\" style=\"min-height: 0px;\">
                  <ion-item c-id=\"7.5.2.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" href=\"http://geovistory.org/resource/i739340\" target=\"\">
                    <ion-label c-id=\"7.6.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <h2 c-id=\"7.7.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.7.8.5.0-->
                        Homme
                      </h2>
                      <p c-id=\"7.9.4.1\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.7.10.5.0-->
                        Gender
                      </p>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-card>
            </geov-entity-props-by-predicate>
            <geov-entity-props-by-predicate _ssr-id=\"entityPropsByPredicate_p88i\" c-id=\"6.2.1.1\" class=\"hydrated sc-geov-entity-properties sc-geov-entity-props-by-predicate-h\" s-id=\"8\">
              <!--r.8-->
              <ion-card c-id=\"8.0.0.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\">
                <ion-card-header c-id=\"8.1.1.0\" class=\"sc-geov-entity-props-by-predicate\">
                  <ion-card-subtitle c-id=\"8.2.2.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <!--t.8.3.3.0-->
                    died in
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-list c-id=\"8.4.1.1\" class=\"sc-geov-entity-props-by-predicate\" lines=\"none\" style=\"min-height: 0px;\">
                  <ion-item c-id=\"8.5.2.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" href=\"http://geovistory.org/resource/i7726698\" target=\"\">
                    <ion-label c-id=\"8.6.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <h2 c-id=\"8.7.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.8.8.5.0-->
                        Kepler, Johannes
                      </h2>
                      <p c-id=\"8.9.4.1\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.8.10.5.0-->
                        Death
                      </p>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-card>
            </geov-entity-props-by-predicate>
            <geov-entity-props-by-predicate _ssr-id=\"entityPropsByPredicate_owl#sameAs\" c-id=\"6.3.1.2\" class=\"hydrated sc-geov-entity-properties sc-geov-entity-props-by-predicate-h\" s-id=\"9\">
              <!--r.9-->
              <ion-card c-id=\"9.0.0.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\">
                <ion-card-header c-id=\"9.1.1.0\" class=\"sc-geov-entity-props-by-predicate\">
                  <ion-card-subtitle c-id=\"9.2.2.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <!--t.9.3.3.0-->
                    same as (9)
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-list c-id=\"9.4.1.1\" class=\"sc-geov-entity-props-by-predicate\" lines=\"none\" style=\"min-height: 186px;\">
                  <ion-item c-id=\"9.5.2.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" detailicon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>\" href=\"https://dbpedia.org/resource/Johannes_Kepler\" target=\"_blank\">
                    <ion-label c-id=\"9.6.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <p c-id=\"9.7.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.9.8.5.0-->
                        https://dbpedia.org/resource/Johannes_Kepler
                      </p>
                    </ion-label>
                  </ion-item>
                  <ion-item c-id=\"9.9.2.1\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" detailicon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>\" href=\"http://viaf.org/viaf/41842150\" target=\"_blank\">
                    <ion-label c-id=\"9.10.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <p c-id=\"9.11.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.9.12.5.0-->
                        http://viaf.org/viaf/41842150
                      </p>
                    </ion-label>
                  </ion-item>
                  <ion-item c-id=\"9.13.2.2\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" detailicon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>\" href=\"http://d-nb.info/gnd/118561448\" target=\"_blank\">
                    <ion-label c-id=\"9.14.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <p c-id=\"9.15.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.9.16.5.0-->
                        http://d-nb.info/gnd/118561448
                      </p>
                    </ion-label>
                  </ion-item>
                </ion-list>
                <ion-item c-id=\"9.17.1.2\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" lines=\"none\">
                  <geov-paginator c-id=\"9.18.2.0\" class=\"hydrated sc-geov-entity-props-by-predicate sc-geov-paginator-h\" s-id=\"10\">
                    <!--r.10-->
                    <ion-item c-id=\"10.0.0.0\" class=\"sc-geov-paginator\" color=\"\" lines=\"none\">
                      <ion-note c-id=\"10.1.1.0\" class=\"sc-geov-paginator\">
                        <!--t.10.2.2.0-->
                        1 –&nbsp;3
                      </ion-note>
                      <ion-buttons c-id=\"10.3.1.1\" class=\"sc-geov-paginator\">
                        <ion-button c-id=\"10.4.2.0\" class=\"sc-geov-paginator\" disabled=\"\">
                          <ion-icon c-id=\"10.5.3.0\" class=\"sc-geov-paginator\" icon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>\" slot=\"icon-only\"></ion-icon>
                        </ion-button>
                        <ion-button c-id=\"10.6.2.1\" class=\"sc-geov-paginator\">
                          <ion-icon c-id=\"10.7.3.0\" class=\"sc-geov-paginator\" icon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>\" slot=\"icon-only\"></ion-icon>
                        </ion-button>
                      </ion-buttons>
                    </ion-item>
                  </geov-paginator>
                </ion-item>
              </ion-card>
            </geov-entity-props-by-predicate>
            <geov-entity-props-by-predicate _ssr-id=\"entityPropsByPredicate_p1111i\" c-id=\"6.4.1.3\" class=\"hydrated sc-geov-entity-properties sc-geov-entity-props-by-predicate-h\" s-id=\"11\">
              <!--r.11-->
              <ion-card c-id=\"11.0.0.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\">
                <ion-card-header c-id=\"11.1.1.0\" class=\"sc-geov-entity-props-by-predicate\">
                  <ion-card-subtitle c-id=\"11.2.2.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <!--t.11.3.3.0-->
                    has appellation for language
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-list c-id=\"11.4.1.1\" class=\"sc-geov-entity-props-by-predicate\" lines=\"none\" style=\"min-height: 0px;\">
                  <ion-item c-id=\"11.5.2.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" href=\"http://geovistory.org/resource/i7442632\" target=\"\">
                    <ion-label c-id=\"11.6.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <h2 c-id=\"11.7.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.11.8.5.0-->
                        Kepler, Johannes
                      </h2>
                      <p c-id=\"11.9.4.1\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.11.10.5.0-->
                        Person Appellation in a Language
                      </p>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-card>
            </geov-entity-props-by-predicate>
          </ion-grid>
        </geov-entity-properties>
        <div c-id=\"1.12.1.4\" class=\"columns-1 ion-text-center section\">
          <geov-entity-download-rdf c-id=\"1.13.2.0\" class=\"hydrated\" s-id=\"12\">
            <!--r.12-->
            <ion-button c-id=\"12.0.0.0\" color=\"primary\" fill=\"outline\">
              <!--t.12.1.1.0-->
              Download RDF
              <ion-icon c-id=\"12.2.1.1\" icon=\"download-outline\"></ion-icon>
            </ion-button>
            <ion-modal c-id=\"12.3.0.1\">
              <ion-header c-id=\"12.4.1.0\">
                <ion-toolbar c-id=\"12.5.2.0\">
                  <ion-buttons c-id=\"12.6.3.0\" slot=\"start\">
                    <ion-button c-id=\"12.7.4.0\">
                      <!--t.12.8.5.0-->
                      Cancel
                    </ion-button>
                  </ion-buttons>
                  <ion-title c-id=\"12.9.3.1\">
                    <!--t.12.10.4.0-->
                    Download RDF
                  </ion-title>
                </ion-toolbar>
              </ion-header>
              <ion-content c-id=\"12.11.1.1\" class=\"ion-padding\">
                <ion-list c-id=\"12.12.2.0\" lines=\"none\">
                  <ion-item button=\"\" c-id=\"12.13.3.0\" download=\"Download\">
                    <ion-icon c-id=\"12.14.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.15.4.1\">
                      <!--t.12.16.5.0-->
                      RDF XML
                    </ion-label>
                  </ion-item>
                  <ion-item button=\"\" c-id=\"12.17.3.1\" download=\"Download\">
                    <ion-icon c-id=\"12.18.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.19.4.1\">
                      <!--t.12.20.5.0-->
                      JSON-LD
                    </ion-label>
                  </ion-item>
                  <ion-item button=\"\" c-id=\"12.21.3.2\" download=\"Download\">
                    <ion-icon c-id=\"12.22.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.23.4.1\">
                      <!--t.12.24.5.0-->
                      N-Triples
                    </ion-label>
                  </ion-item>
                  <ion-item button=\"\" c-id=\"12.25.3.3\" download=\"Download\">
                    <ion-icon c-id=\"12.26.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.27.4.1\">
                      <!--t.12.28.5.0-->
                      N-Quads
                    </ion-label>
                  </ion-item>
                  <ion-item button=\"\" c-id=\"12.29.3.4\" download=\"Download\">
                    <ion-icon c-id=\"12.30.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.31.4.1\">
                      <!--t.12.32.5.0-->
                      TRIX
                    </ion-label>
                  </ion-item>
                  <ion-item button=\"\" c-id=\"12.33.3.5\" download=\"Download\">
                    <ion-icon c-id=\"12.34.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.35.4.1\">
                      <!--t.12.36.5.0-->
                      Thrift
                    </ion-label>
                  </ion-item>
                  <ion-item button=\"\" c-id=\"12.37.3.6\" download=\"Download\">
                    <ion-icon c-id=\"12.38.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.39.4.1\">
                      <!--t.12.40.5.0-->
                      Turtle
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-content>
            </ion-modal>
            <!--s.12.41.0.2.-->
          </geov-entity-download-rdf>
        </div>
        <!--s.1.14.1.5.body-end-->
      </div>
    </geov-entity>`);
  });

  it('Client side: fetches data and hydrates prerendered html', async () => {
    // prerendered html
    const html = `<meta charset=\"utf-8\">
    <style sty-id=\"sc-geov-entity\">
      :host{display:block}.container{background:var(--ion-color-tertiary);color:var(--ion-color-tertiary-contrast)}.header{padding:var(--ion-padding)}.header h1{margin-top:0}.header geov-entity-class-label,.header geov-entity-definition{overflow:hidden;text-overflow:ellipsis}.section{display:block;color:var(--ion-color-tertiary-contrast);padding:24px 0}.section:nth-child(even){background:var(--ion-color-tertiary-shade)}.section:nth-child(odd){background:var(--ion-color-tertiary)}.columns-1{--column-count:1;--column-gap:0px}.columns-2{--column-count:1;--column-gap:0px}.columns-3{--column-count:1;--column-gap:0px}@media screen and (min-width: 992px){.columns-3,.columns-2{--column-count:2}}@media screen and (min-width: 1200px){.columns-3{--column-count:3}}p.supertitle geov-entity-class-label{font-size:1.7rem}
    </style>
    <style sty-id=\"sc-geov-entity-download-rdf\">
      :host{display:block}
    </style>
    <style sty-id=\"sc-geov-entity-class-label\">
      /*!@:host*/.sc-geov-entity-class-label-h{display:inline;vertical-align:middle}
    </style>
    <style sty-id=\"sc-geov-entity-label\">
      /*!@:host*/.sc-geov-entity-label-h{display:block;margin-top:0}
    </style>
    <style sty-id=\"sc-geov-entity-definition\">
      /*!@:host*/.sc-geov-entity-definition-h{display:block}
    </style>
    <style sty-id=\"sc-geov-entity-properties\">
      /*!@html.ios*/html.ios.sc-geov-entity-properties{--ion-default-font:-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif}/*!@html.md*/html.md.sc-geov-entity-properties{--ion-default-font:\"Roboto\", \"Helvetica Neue\", sans-serif}/*!@html*/html.sc-geov-entity-properties{--ion-font-family:var(--ion-default-font)}/*!@body*/body.sc-geov-entity-properties{background:var(--ion-background-color)}/*!@body.backdrop-no-scroll*/body.backdrop-no-scroll.sc-geov-entity-properties{overflow:hidden}/*!@html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,
html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,
html.ios ion-modal ion-footer ion-toolbar:first-of-type*/html.ios.sc-geov-entity-properties ion-modal.modal-card.sc-geov-entity-properties ion-header.sc-geov-entity-properties ion-toolbar.sc-geov-entity-properties:first-of-type,html.ios.sc-geov-entity-properties ion-modal.modal-sheet.sc-geov-entity-properties ion-header.sc-geov-entity-properties ion-toolbar.sc-geov-entity-properties:first-of-type,html.ios.sc-geov-entity-properties ion-modal.sc-geov-entity-properties ion-footer.sc-geov-entity-properties ion-toolbar.sc-geov-entity-properties:first-of-type{padding-top:6px}/*!@html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,
html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type*/html.ios.sc-geov-entity-properties ion-modal.modal-card.sc-geov-entity-properties ion-header.sc-geov-entity-properties ion-toolbar.sc-geov-entity-properties:last-of-type,html.ios.sc-geov-entity-properties ion-modal.modal-sheet.sc-geov-entity-properties ion-header.sc-geov-entity-properties ion-toolbar.sc-geov-entity-properties:last-of-type{padding-bottom:6px}/*!@html.ios ion-modal ion-toolbar*/html.ios.sc-geov-entity-properties ion-modal.sc-geov-entity-properties ion-toolbar.sc-geov-entity-properties{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){/*!@html.ios ion-modal.modal-card:first-of-type*/html.ios.sc-geov-entity-properties ion-modal.modal-card.sc-geov-entity-properties:first-of-type{--backdrop-opacity:0.18}}/*!@ion-modal.modal-default.show-modal ~ ion-modal.modal-default*/ion-modal.modal-default.show-modal.sc-geov-entity-properties~ion-modal.modal-default.sc-geov-entity-properties{--backdrop-opacity:0;--box-shadow:none}/*!@html.ios ion-modal.modal-card .ion-page*/html.ios.sc-geov-entity-properties ion-modal.modal-card.sc-geov-entity-properties .ion-page.sc-geov-entity-properties{border-top-left-radius:var(--border-radius)}/*!@.ion-color-primary*/.ion-color-primary.sc-geov-entity-properties{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}/*!@.ion-color-secondary*/.ion-color-secondary.sc-geov-entity-properties{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}/*!@.ion-color-tertiary*/.ion-color-tertiary.sc-geov-entity-properties{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}/*!@.ion-color-success*/.ion-color-success.sc-geov-entity-properties{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}/*!@.ion-color-warning*/.ion-color-warning.sc-geov-entity-properties{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}/*!@.ion-color-danger*/.ion-color-danger.sc-geov-entity-properties{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}/*!@.ion-color-light*/.ion-color-light.sc-geov-entity-properties{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}/*!@.ion-color-medium*/.ion-color-medium.sc-geov-entity-properties{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}/*!@.ion-color-dark*/.ion-color-dark.sc-geov-entity-properties{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}/*!@.ion-page*/.ion-page.sc-geov-entity-properties{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}/*!@ion-modal > .ion-page*/ion-modal.sc-geov-entity-properties>.ion-page.sc-geov-entity-properties{position:relative;contain:layout style;height:100%}/*!@.split-pane-visible > .ion-page.split-pane-main*/.split-pane-visible.sc-geov-entity-properties>.ion-page.split-pane-main.sc-geov-entity-properties{position:relative}/*!@ion-route,
ion-route-redirect,
ion-router,
ion-select-option,
ion-nav-controller,
ion-menu-controller,
ion-action-sheet-controller,
ion-alert-controller,
ion-loading-controller,
ion-modal-controller,
ion-picker-controller,
ion-popover-controller,
ion-toast-controller,
.ion-page-hidden*/ion-route.sc-geov-entity-properties,ion-route-redirect.sc-geov-entity-properties,ion-router.sc-geov-entity-properties,ion-select-option.sc-geov-entity-properties,ion-nav-controller.sc-geov-entity-properties,ion-menu-controller.sc-geov-entity-properties,ion-action-sheet-controller.sc-geov-entity-properties,ion-alert-controller.sc-geov-entity-properties,ion-loading-controller.sc-geov-entity-properties,ion-modal-controller.sc-geov-entity-properties,ion-picker-controller.sc-geov-entity-properties,ion-popover-controller.sc-geov-entity-properties,ion-toast-controller.sc-geov-entity-properties,.ion-page-hidden.sc-geov-entity-properties{display:none !important}/*!@.ion-page-invisible*/.ion-page-invisible.sc-geov-entity-properties{opacity:0}/*!@.can-go-back > ion-header ion-back-button*/.can-go-back.sc-geov-entity-properties>ion-header.sc-geov-entity-properties ion-back-button.sc-geov-entity-properties{display:block}/*!@html.plt-ios.plt-hybrid, html.plt-ios.plt-pwa*/html.plt-ios.plt-hybrid.sc-geov-entity-properties,html.plt-ios.plt-pwa.sc-geov-entity-properties{--ion-statusbar-padding:20px}@supports (padding-top: 20px){/*!@html*/html.sc-geov-entity-properties{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){/*!@html*/html.sc-geov-entity-properties{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){/*!@html*/html.sc-geov-entity-properties{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}/*!@ion-card.ion-color .ion-inherit-color,
ion-card-header.ion-color .ion-inherit-color*/ion-card.ion-color.sc-geov-entity-properties .ion-inherit-color.sc-geov-entity-properties,ion-card-header.ion-color.sc-geov-entity-properties .ion-inherit-color.sc-geov-entity-properties{color:inherit}/*!@.menu-content*/.menu-content.sc-geov-entity-properties{transform:translate3d(0,  0,  0)}/*!@.menu-content-open*/.menu-content-open.sc-geov-entity-properties{cursor:pointer;touch-action:manipulation;pointer-events:none}/*!@.ios .menu-content-reveal*/.ios.sc-geov-entity-properties .menu-content-reveal.sc-geov-entity-properties{box-shadow:-8px 0 42px rgba(0, 0, 0, 0.08)}/*!@[dir=rtl].ios .menu-content-reveal*/[dir=rtl].ios.sc-geov-entity-properties .menu-content-reveal.sc-geov-entity-properties{box-shadow:8px 0 42px rgba(0, 0, 0, 0.08)}/*!@.md .menu-content-reveal*/.md.sc-geov-entity-properties .menu-content-reveal.sc-geov-entity-properties{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}/*!@.md .menu-content-push*/.md.sc-geov-entity-properties .menu-content-push.sc-geov-entity-properties{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}/*!@ion-accordion-group.accordion-group-expand-inset > ion-accordion:first-of-type*/ion-accordion-group.accordion-group-expand-inset.sc-geov-entity-properties>ion-accordion.sc-geov-entity-properties:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}/*!@ion-accordion-group.accordion-group-expand-inset > ion-accordion:last-of-type*/ion-accordion-group.accordion-group-expand-inset.sc-geov-entity-properties>ion-accordion.sc-geov-entity-properties:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}/*!@ion-accordion-group > ion-accordion:last-of-type ion-item[slot=header]*/ion-accordion-group.sc-geov-entity-properties>ion-accordion.sc-geov-entity-properties:last-of-type ion-item[slot=header].sc-geov-entity-properties{--border-width:0px}/*!@ion-accordion.accordion-animated > [slot=header] .ion-accordion-toggle-icon*/ion-accordion.accordion-animated.sc-geov-entity-properties>[slot=header].sc-geov-entity-properties .ion-accordion-toggle-icon.sc-geov-entity-properties{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){/*!@ion-accordion .ion-accordion-toggle-icon*/ion-accordion.sc-geov-entity-properties .ion-accordion-toggle-icon.sc-geov-entity-properties{transition:none !important}}/*!@ion-accordion.accordion-expanding > [slot=header] .ion-accordion-toggle-icon,
ion-accordion.accordion-expanded > [slot=header] .ion-accordion-toggle-icon*/ion-accordion.accordion-expanding.sc-geov-entity-properties>[slot=header].sc-geov-entity-properties .ion-accordion-toggle-icon.sc-geov-entity-properties,ion-accordion.accordion-expanded.sc-geov-entity-properties>[slot=header].sc-geov-entity-properties .ion-accordion-toggle-icon.sc-geov-entity-properties{transform:rotate(180deg)}/*!@ion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-previous ion-item[slot=header]*/ion-accordion-group.accordion-group-expand-inset.md.sc-geov-entity-properties>ion-accordion.accordion-previous.sc-geov-entity-properties ion-item[slot=header].sc-geov-entity-properties{--border-width:0px;--inner-border-width:0px}/*!@ion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanding:first-of-type,
ion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanded:first-of-type*/ion-accordion-group.accordion-group-expand-inset.md.sc-geov-entity-properties>ion-accordion.accordion-expanding.sc-geov-entity-properties:first-of-type,ion-accordion-group.accordion-group-expand-inset.md.sc-geov-entity-properties>ion-accordion.accordion-expanded.sc-geov-entity-properties:first-of-type{margin-top:0}/*!@ion-input input::-webkit-date-and-time-value*/ion-input.sc-geov-entity-properties input.sc-geov-entity-properties::-webkit-date-and-time-value{text-align:start}/*!@.ion-datetime-button-overlay*/.ion-datetime-button-overlay.sc-geov-entity-properties{--width:fit-content;--height:fit-content}/*!@.ion-datetime-button-overlay ion-datetime.datetime-grid*/.ion-datetime-button-overlay.sc-geov-entity-properties ion-datetime.datetime-grid.sc-geov-entity-properties{width:320px;min-height:320px}/*!@:host.container,
.container*/.container.sc-geov-entity-properties-h,.container.sc-geov-entity-properties{display:block;column-count:var(--column-count);column-gap:var(--column-gap);column-rule-style:var(--column-rule-style);column-rule-width:var(--column-rule-width);column-rule-color:var(--column-rule-color);column-rule:var(--column-rule);column-span:var(--column-span);column-width:var(--column-width)}/*!@geov-entity-props-by-predicate ~ geov-entity-props-by-predicate*/geov-entity-props-by-predicate.sc-geov-entity-properties~geov-entity-props-by-predicate.sc-geov-entity-properties{margin-top:24px}
      </style>
      <style sty-id=\"sc-geov-entity-class-icon\">
        /*!@:host*/.sc-geov-entity-class-icon-h{display:inline;vertical-align:middle}/*!@ion-icon*/ion-icon.sc-geov-entity-class-icon{--ion-margin:0.3em;margin-right:var(--ion-margin)}
      </style>
      <style sty-id=\"sc-geov-entity-props-by-predicate\">
        /*!@html.ios*/html.ios.sc-geov-entity-props-by-predicate{--ion-default-font:-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif}/*!@html.md*/html.md.sc-geov-entity-props-by-predicate{--ion-default-font:\"Roboto\", \"Helvetica Neue\", sans-serif}/*!@html*/html.sc-geov-entity-props-by-predicate{--ion-font-family:var(--ion-default-font)}/*!@body*/body.sc-geov-entity-props-by-predicate{background:var(--ion-background-color)}/*!@body.backdrop-no-scroll*/body.backdrop-no-scroll.sc-geov-entity-props-by-predicate{overflow:hidden}/*!@html.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,
html.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,
html.ios ion-modal ion-footer ion-toolbar:first-of-type*/html.ios.sc-geov-entity-props-by-predicate ion-modal.modal-card.sc-geov-entity-props-by-predicate ion-header.sc-geov-entity-props-by-predicate ion-toolbar.sc-geov-entity-props-by-predicate:first-of-type,html.ios.sc-geov-entity-props-by-predicate ion-modal.modal-sheet.sc-geov-entity-props-by-predicate ion-header.sc-geov-entity-props-by-predicate ion-toolbar.sc-geov-entity-props-by-predicate:first-of-type,html.ios.sc-geov-entity-props-by-predicate ion-modal.sc-geov-entity-props-by-predicate ion-footer.sc-geov-entity-props-by-predicate ion-toolbar.sc-geov-entity-props-by-predicate:first-of-type{padding-top:6px}/*!@html.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,
html.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type*/html.ios.sc-geov-entity-props-by-predicate ion-modal.modal-card.sc-geov-entity-props-by-predicate ion-header.sc-geov-entity-props-by-predicate ion-toolbar.sc-geov-entity-props-by-predicate:last-of-type,html.ios.sc-geov-entity-props-by-predicate ion-modal.modal-sheet.sc-geov-entity-props-by-predicate ion-header.sc-geov-entity-props-by-predicate ion-toolbar.sc-geov-entity-props-by-predicate:last-of-type{padding-bottom:6px}/*!@html.ios ion-modal ion-toolbar*/html.ios.sc-geov-entity-props-by-predicate ion-modal.sc-geov-entity-props-by-predicate ion-toolbar.sc-geov-entity-props-by-predicate{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){/*!@html.ios ion-modal.modal-card:first-of-type*/html.ios.sc-geov-entity-props-by-predicate ion-modal.modal-card.sc-geov-entity-props-by-predicate:first-of-type{--backdrop-opacity:0.18}}/*!@ion-modal.modal-default.show-modal ~ ion-modal.modal-default*/ion-modal.modal-default.show-modal.sc-geov-entity-props-by-predicate~ion-modal.modal-default.sc-geov-entity-props-by-predicate{--backdrop-opacity:0;--box-shadow:none}/*!@html.ios ion-modal.modal-card .ion-page*/html.ios.sc-geov-entity-props-by-predicate ion-modal.modal-card.sc-geov-entity-props-by-predicate .ion-page.sc-geov-entity-props-by-predicate{border-top-left-radius:var(--border-radius)}/*!@.ion-color-primary*/.ion-color-primary.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast:var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint:var(--ion-color-primary-tint, #4c8dff) !important}/*!@.ion-color-secondary*/.ion-color-secondary.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb:var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast:var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint:var(--ion-color-secondary-tint, #50c8ff) !important}/*!@.ion-color-tertiary*/.ion-color-tertiary.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb:var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast:var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint:var(--ion-color-tertiary-tint, #6370ff) !important}/*!@.ion-color-success*/.ion-color-success.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb:var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast:var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint:var(--ion-color-success-tint, #42d77d) !important}/*!@.ion-color-warning*/.ion-color-warning.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb:var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast:var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint:var(--ion-color-warning-tint, #ffca22) !important}/*!@.ion-color-danger*/.ion-color-danger.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb:var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast:var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint:var(--ion-color-danger-tint, #ed576b) !important}/*!@.ion-color-light*/.ion-color-light.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb:var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast:var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb:var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade:var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint:var(--ion-color-light-tint, #f5f6f9) !important}/*!@.ion-color-medium*/.ion-color-medium.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb:var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast:var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-medium-shade, #808289) !important;--ion-color-tint:var(--ion-color-medium-tint, #9d9fa6) !important}/*!@.ion-color-dark*/.ion-color-dark.sc-geov-entity-props-by-predicate{--ion-color-base:var(--ion-color-dark, #222428) !important;--ion-color-base-rgb:var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast:var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb:var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade:var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint:var(--ion-color-dark-tint, #383a3e) !important}/*!@.ion-page*/.ion-page.sc-geov-entity-props-by-predicate{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}/*!@ion-modal > .ion-page*/ion-modal.sc-geov-entity-props-by-predicate>.ion-page.sc-geov-entity-props-by-predicate{position:relative;contain:layout style;height:100%}/*!@.split-pane-visible > .ion-page.split-pane-main*/.split-pane-visible.sc-geov-entity-props-by-predicate>.ion-page.split-pane-main.sc-geov-entity-props-by-predicate{position:relative}/*!@ion-route,
ion-route-redirect,
ion-router,
ion-select-option,
ion-nav-controller,
ion-menu-controller,
ion-action-sheet-controller,
ion-alert-controller,
ion-loading-controller,
ion-modal-controller,
ion-picker-controller,
ion-popover-controller,
ion-toast-controller,
.ion-page-hidden*/ion-route.sc-geov-entity-props-by-predicate,ion-route-redirect.sc-geov-entity-props-by-predicate,ion-router.sc-geov-entity-props-by-predicate,ion-select-option.sc-geov-entity-props-by-predicate,ion-nav-controller.sc-geov-entity-props-by-predicate,ion-menu-controller.sc-geov-entity-props-by-predicate,ion-action-sheet-controller.sc-geov-entity-props-by-predicate,ion-alert-controller.sc-geov-entity-props-by-predicate,ion-loading-controller.sc-geov-entity-props-by-predicate,ion-modal-controller.sc-geov-entity-props-by-predicate,ion-picker-controller.sc-geov-entity-props-by-predicate,ion-popover-controller.sc-geov-entity-props-by-predicate,ion-toast-controller.sc-geov-entity-props-by-predicate,.ion-page-hidden.sc-geov-entity-props-by-predicate{display:none !important}/*!@.ion-page-invisible*/.ion-page-invisible.sc-geov-entity-props-by-predicate{opacity:0}/*!@.can-go-back > ion-header ion-back-button*/.can-go-back.sc-geov-entity-props-by-predicate>ion-header.sc-geov-entity-props-by-predicate ion-back-button.sc-geov-entity-props-by-predicate{display:block}/*!@html.plt-ios.plt-hybrid, html.plt-ios.plt-pwa*/html.plt-ios.plt-hybrid.sc-geov-entity-props-by-predicate,html.plt-ios.plt-pwa.sc-geov-entity-props-by-predicate{--ion-statusbar-padding:20px}@supports (padding-top: 20px){/*!@html*/html.sc-geov-entity-props-by-predicate{--ion-safe-area-top:var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){/*!@html*/html.sc-geov-entity-props-by-predicate{--ion-safe-area-top:constant(safe-area-inset-top);--ion-safe-area-bottom:constant(safe-area-inset-bottom);--ion-safe-area-left:constant(safe-area-inset-left);--ion-safe-area-right:constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){/*!@html*/html.sc-geov-entity-props-by-predicate{--ion-safe-area-top:env(safe-area-inset-top);--ion-safe-area-bottom:env(safe-area-inset-bottom);--ion-safe-area-left:env(safe-area-inset-left);--ion-safe-area-right:env(safe-area-inset-right)}}/*!@ion-card.ion-color .ion-inherit-color,
ion-card-header.ion-color .ion-inherit-color*/ion-card.ion-color.sc-geov-entity-props-by-predicate .ion-inherit-color.sc-geov-entity-props-by-predicate,ion-card-header.ion-color.sc-geov-entity-props-by-predicate .ion-inherit-color.sc-geov-entity-props-by-predicate{color:inherit}/*!@.menu-content*/.menu-content.sc-geov-entity-props-by-predicate{transform:translate3d(0,  0,  0)}/*!@.menu-content-open*/.menu-content-open.sc-geov-entity-props-by-predicate{cursor:pointer;touch-action:manipulation;pointer-events:none}/*!@.ios .menu-content-reveal*/.ios.sc-geov-entity-props-by-predicate .menu-content-reveal.sc-geov-entity-props-by-predicate{box-shadow:-8px 0 42px rgba(0, 0, 0, 0.08)}/*!@[dir=rtl].ios .menu-content-reveal*/[dir=rtl].ios.sc-geov-entity-props-by-predicate .menu-content-reveal.sc-geov-entity-props-by-predicate{box-shadow:8px 0 42px rgba(0, 0, 0, 0.08)}/*!@.md .menu-content-reveal*/.md.sc-geov-entity-props-by-predicate .menu-content-reveal.sc-geov-entity-props-by-predicate{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}/*!@.md .menu-content-push*/.md.sc-geov-entity-props-by-predicate .menu-content-push.sc-geov-entity-props-by-predicate{box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}/*!@ion-accordion-group.accordion-group-expand-inset > ion-accordion:first-of-type*/ion-accordion-group.accordion-group-expand-inset.sc-geov-entity-props-by-predicate>ion-accordion.sc-geov-entity-props-by-predicate:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}/*!@ion-accordion-group.accordion-group-expand-inset > ion-accordion:last-of-type*/ion-accordion-group.accordion-group-expand-inset.sc-geov-entity-props-by-predicate>ion-accordion.sc-geov-entity-props-by-predicate:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}/*!@ion-accordion-group > ion-accordion:last-of-type ion-item[slot=header]*/ion-accordion-group.sc-geov-entity-props-by-predicate>ion-accordion.sc-geov-entity-props-by-predicate:last-of-type ion-item[slot=header].sc-geov-entity-props-by-predicate{--border-width:0px}/*!@ion-accordion.accordion-animated > [slot=header] .ion-accordion-toggle-icon*/ion-accordion.accordion-animated.sc-geov-entity-props-by-predicate>[slot=header].sc-geov-entity-props-by-predicate .ion-accordion-toggle-icon.sc-geov-entity-props-by-predicate{transition:300ms transform cubic-bezier(0.25, 0.8, 0.5, 1)}@media (prefers-reduced-motion: reduce){/*!@ion-accordion .ion-accordion-toggle-icon*/ion-accordion.sc-geov-entity-props-by-predicate .ion-accordion-toggle-icon.sc-geov-entity-props-by-predicate{transition:none !important}}/*!@ion-accordion.accordion-expanding > [slot=header] .ion-accordion-toggle-icon,
ion-accordion.accordion-expanded > [slot=header] .ion-accordion-toggle-icon*/ion-accordion.accordion-expanding.sc-geov-entity-props-by-predicate>[slot=header].sc-geov-entity-props-by-predicate .ion-accordion-toggle-icon.sc-geov-entity-props-by-predicate,ion-accordion.accordion-expanded.sc-geov-entity-props-by-predicate>[slot=header].sc-geov-entity-props-by-predicate .ion-accordion-toggle-icon.sc-geov-entity-props-by-predicate{transform:rotate(180deg)}/*!@ion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-previous ion-item[slot=header]*/ion-accordion-group.accordion-group-expand-inset.md.sc-geov-entity-props-by-predicate>ion-accordion.accordion-previous.sc-geov-entity-props-by-predicate ion-item[slot=header].sc-geov-entity-props-by-predicate{--border-width:0px;--inner-border-width:0px}/*!@ion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanding:first-of-type,
ion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanded:first-of-type*/ion-accordion-group.accordion-group-expand-inset.md.sc-geov-entity-props-by-predicate>ion-accordion.accordion-expanding.sc-geov-entity-props-by-predicate:first-of-type,ion-accordion-group.accordion-group-expand-inset.md.sc-geov-entity-props-by-predicate>ion-accordion.accordion-expanded.sc-geov-entity-props-by-predicate:first-of-type{margin-top:0}/*!@ion-input input::-webkit-date-and-time-value*/ion-input.sc-geov-entity-props-by-predicate input.sc-geov-entity-props-by-predicate::-webkit-date-and-time-value{text-align:start}/*!@.ion-datetime-button-overlay*/.ion-datetime-button-overlay.sc-geov-entity-props-by-predicate{--width:fit-content;--height:fit-content}/*!@.ion-datetime-button-overlay ion-datetime.datetime-grid*/.ion-datetime-button-overlay.sc-geov-entity-props-by-predicate ion-datetime.datetime-grid.sc-geov-entity-props-by-predicate{width:320px;min-height:320px}/*!@:host*/.sc-geov-entity-props-by-predicate-h{display:block}/*!@ion-card*/ion-card.sc-geov-entity-props-by-predicate{box-shadow:none !important;margin:0 16px !important}/*!@geov-paginator*/geov-paginator.sc-geov-entity-props-by-predicate{margin-left:auto}
    </style>
    <style sty-id=\"sc-geov-paginator\">
      /*!@:host*/.sc-geov-paginator-h{display:flex;align-items:center;flex-direction:row;flex-wrap:wrap}
    </style>
    <geov-entity class=\"hydrated\" entity-id=\"i785518\" fetch-before-render=\"true\" language=\"en\" s-id=\"1\" sparql-endpoint=\"https://sparql.geovistory.org/api_v1_community_data\">
      <!--r.1-->
      <div c-id=\"1.0.0.0\" class=\"container\">
        <div c-id=\"1.1.1.0\" class=\"header\">
          <ion-grid c-id=\"1.2.2.0\" class=\"ion-padding\" fixed=\"\">
            <p c-id=\"1.3.3.0\" class=\"supertitle\">
              <geov-entity-class-label _ssr-id=\"classLabel\" c-id=\"1.4.4.0\" class=\"hydrated sc-geov-entity-class-label-h sc-geov-entity-class-label-s\" s-id=\"2\">
                <!--r.2-->
                <geov-entity-class-icon c-id=\"2.0.0.0\" class=\"hydrated sc-geov-entity-class-icon-h sc-geov-entity-class-label\" s-id=\"3\">
                  <!--r.3-->
                  <ion-icon c-id=\"3.0.0.0\" class=\"sc-geov-entity-class-icon\" icon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z'/><path d='M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z'/></svg>\"></ion-icon>
                </geov-entity-class-icon>
                <!--t.2.1.0.1-->
                Person
                <!--s.2.2.0.2.-->
              </geov-entity-class-label>
            </p>
            <h1 c-id=\"1.5.3.1\">
              <geov-entity-label _ssr-id=\"entityLabel\" c-id=\"1.6.4.0\" class=\"hydrated sc-geov-entity-label-h sc-geov-entity-label-s\" s-id=\"4\">
                <!--r.4-->
                <!--t.4.0.0.0-->
                Kepler, Johannes
                <!--s.4.1.0.1.-->
              </geov-entity-label>
            </h1>
            <p c-id=\"1.7.3.2\">
              <geov-entity-definition _ssr-id=\"definition\" c-id=\"1.8.4.0\" class=\"hydrated sc-geov-entity-definition-h sc-geov-entity-definition-s\" s-id=\"5\">
                <!--r.5-->
              </geov-entity-definition>
            </p>
            <p c-id=\"5.0.0.0\" class=\"definition sc-geov-entity-definition\">
              <!--t.5.1.1.0-->
              Johannes Kepler (ou Keppler), né le 27 décembre 1571 à Weil (ville libre d'Empire) et mort le 15 novembre 1630 à Ratisbonne (ville libre d'Empire), est un astronome allemand célèbre pour avoir étudié l’hypothèse héliocentrique de Nicolas Copernic, affirmant que la Terre tourne autour du Soleil et surtout pour avoir découvert que les planètes ne tournent pas autour du Soleil en suivant des trajectoires circulaires parfaites mais des trajectoires elliptiques.
            </p>
            <p c-id=\"5.2.0.1\" class=\"definition sc-geov-entity-definition\">
              <!--t.5.3.1.0-->
              [Complément] Astronom; Mathematiker [Notes] fb_import_20140912_466
            </p>
            <!--s.5.4.0.2.-->
            <p></p>
          </ion-grid>
        </div>
        <!--s.1.9.1.1.body-start-->
        <geov-entity-properties _ssr-id=\"rest\" c-id=\"1.10.1.2\" class=\"columns-3 hydrated sc-geov-entity-properties-h section\" s-id=\"6\">
          <!--r.6-->
          <ion-grid c-id=\"6.0.0.0\" class=\"container sc-geov-entity-properties\" fixed=\"\">
            <geov-entity-props-by-predicate _ssr-id=\"entityPropsByPredicate_p1429\" c-id=\"6.1.1.0\" class=\"hydrated sc-geov-entity-properties sc-geov-entity-props-by-predicate-h\" s-id=\"7\">
              <!--r.7-->
              <ion-card c-id=\"7.0.0.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\">
                <ion-card-header c-id=\"7.1.1.0\" class=\"sc-geov-entity-props-by-predicate\">
                  <ion-card-subtitle c-id=\"7.2.2.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <!--t.7.3.3.0-->
                    has gender
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-list c-id=\"7.4.1.1\" class=\"sc-geov-entity-props-by-predicate\" lines=\"none\" style=\"min-height: 0px;\">
                  <ion-item c-id=\"7.5.2.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" href=\"http://geovistory.org/resource/i739340\" target=\"\">
                    <ion-label c-id=\"7.6.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <h2 c-id=\"7.7.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.7.8.5.0-->
                        Homme
                      </h2>
                      <p c-id=\"7.9.4.1\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.7.10.5.0-->
                        Gender
                      </p>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-card>
            </geov-entity-props-by-predicate>
            <geov-entity-props-by-predicate _ssr-id=\"entityPropsByPredicate_p88i\" c-id=\"6.2.1.1\" class=\"hydrated sc-geov-entity-properties sc-geov-entity-props-by-predicate-h\" s-id=\"8\">
              <!--r.8-->
              <ion-card c-id=\"8.0.0.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\">
                <ion-card-header c-id=\"8.1.1.0\" class=\"sc-geov-entity-props-by-predicate\">
                  <ion-card-subtitle c-id=\"8.2.2.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <!--t.8.3.3.0-->
                    died in
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-list c-id=\"8.4.1.1\" class=\"sc-geov-entity-props-by-predicate\" lines=\"none\" style=\"min-height: 0px;\">
                  <ion-item c-id=\"8.5.2.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" href=\"http://geovistory.org/resource/i7726698\" target=\"\">
                    <ion-label c-id=\"8.6.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <h2 c-id=\"8.7.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.8.8.5.0-->
                        Kepler, Johannes
                      </h2>
                      <p c-id=\"8.9.4.1\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.8.10.5.0-->
                        Death
                      </p>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-card>
            </geov-entity-props-by-predicate>
            <geov-entity-props-by-predicate _ssr-id=\"entityPropsByPredicate_owl#sameAs\" c-id=\"6.3.1.2\" class=\"hydrated sc-geov-entity-properties sc-geov-entity-props-by-predicate-h\" s-id=\"9\">
              <!--r.9-->
              <ion-card c-id=\"9.0.0.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\">
                <ion-card-header c-id=\"9.1.1.0\" class=\"sc-geov-entity-props-by-predicate\">
                  <ion-card-subtitle c-id=\"9.2.2.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <!--t.9.3.3.0-->
                    same as (9)
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-list c-id=\"9.4.1.1\" class=\"sc-geov-entity-props-by-predicate\" lines=\"none\" style=\"min-height: 186px;\">
                  <ion-item c-id=\"9.5.2.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" detailicon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>\" href=\"https://dbpedia.org/resource/Johannes_Kepler\" target=\"_blank\">
                    <ion-label c-id=\"9.6.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <p c-id=\"9.7.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.9.8.5.0-->
                        https://dbpedia.org/resource/Johannes_Kepler
                      </p>
                    </ion-label>
                  </ion-item>
                  <ion-item c-id=\"9.9.2.1\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" detailicon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>\" href=\"http://viaf.org/viaf/41842150\" target=\"_blank\">
                    <ion-label c-id=\"9.10.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <p c-id=\"9.11.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.9.12.5.0-->
                        http://viaf.org/viaf/41842150
                      </p>
                    </ion-label>
                  </ion-item>
                  <ion-item c-id=\"9.13.2.2\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" detailicon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>\" href=\"http://d-nb.info/gnd/118561448\" target=\"_blank\">
                    <ion-label c-id=\"9.14.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <p c-id=\"9.15.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.9.16.5.0-->
                        http://d-nb.info/gnd/118561448
                      </p>
                    </ion-label>
                  </ion-item>
                </ion-list>
                <ion-item c-id=\"9.17.1.2\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" lines=\"none\">
                  <geov-paginator c-id=\"9.18.2.0\" class=\"hydrated sc-geov-entity-props-by-predicate sc-geov-paginator-h\" s-id=\"10\">
                    <!--r.10-->
                    <ion-item c-id=\"10.0.0.0\" class=\"sc-geov-paginator\" color=\"\" lines=\"none\">
                      <ion-note c-id=\"10.1.1.0\" class=\"sc-geov-paginator\">
                        <!--t.10.2.2.0-->
                        1 –&nbsp;3
                      </ion-note>
                      <ion-buttons c-id=\"10.3.1.1\" class=\"sc-geov-paginator\">
                        <ion-button c-id=\"10.4.2.0\" class=\"sc-geov-paginator\" disabled=\"\">
                          <ion-icon c-id=\"10.5.3.0\" class=\"sc-geov-paginator\" icon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>\" slot=\"icon-only\"></ion-icon>
                        </ion-button>
                        <ion-button c-id=\"10.6.2.1\" class=\"sc-geov-paginator\">
                          <ion-icon c-id=\"10.7.3.0\" class=\"sc-geov-paginator\" icon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>\" slot=\"icon-only\"></ion-icon>
                        </ion-button>
                      </ion-buttons>
                    </ion-item>
                  </geov-paginator>
                </ion-item>
              </ion-card>
            </geov-entity-props-by-predicate>
            <geov-entity-props-by-predicate _ssr-id=\"entityPropsByPredicate_p1111i\" c-id=\"6.4.1.3\" class=\"hydrated sc-geov-entity-properties sc-geov-entity-props-by-predicate-h\" s-id=\"11\">
              <!--r.11-->
              <ion-card c-id=\"11.0.0.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\">
                <ion-card-header c-id=\"11.1.1.0\" class=\"sc-geov-entity-props-by-predicate\">
                  <ion-card-subtitle c-id=\"11.2.2.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <!--t.11.3.3.0-->
                    has appellation for language
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-list c-id=\"11.4.1.1\" class=\"sc-geov-entity-props-by-predicate\" lines=\"none\" style=\"min-height: 0px;\">
                  <ion-item c-id=\"11.5.2.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" href=\"http://geovistory.org/resource/i7442632\" target=\"\">
                    <ion-label c-id=\"11.6.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <h2 c-id=\"11.7.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.11.8.5.0-->
                        Kepler, Johannes
                      </h2>
                      <p c-id=\"11.9.4.1\" class=\"sc-geov-entity-props-by-predicate\">
                        <!--t.11.10.5.0-->
                        Person Appellation in a Language
                      </p>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-card>
            </geov-entity-props-by-predicate>
          </ion-grid>
        </geov-entity-properties>
        <div c-id=\"1.12.1.4\" class=\"columns-1 ion-text-center section\">
          <geov-entity-download-rdf c-id=\"1.13.2.0\" class=\"hydrated\" s-id=\"12\">
            <!--r.12-->
            <ion-button c-id=\"12.0.0.0\" color=\"primary\" fill=\"outline\">
              <!--t.12.1.1.0-->
              Download RDF
              <ion-icon c-id=\"12.2.1.1\" icon=\"download-outline\"></ion-icon>
            </ion-button>
            <ion-modal c-id=\"12.3.0.1\">
              <ion-header c-id=\"12.4.1.0\">
                <ion-toolbar c-id=\"12.5.2.0\">
                  <ion-buttons c-id=\"12.6.3.0\" slot=\"start\">
                    <ion-button c-id=\"12.7.4.0\">
                      <!--t.12.8.5.0-->
                      Cancel
                    </ion-button>
                  </ion-buttons>
                  <ion-title c-id=\"12.9.3.1\">
                    <!--t.12.10.4.0-->
                    Download RDF
                  </ion-title>
                </ion-toolbar>
              </ion-header>
              <ion-content c-id=\"12.11.1.1\" class=\"ion-padding\">
                <ion-list c-id=\"12.12.2.0\" lines=\"none\">
                  <ion-item button=\"\" c-id=\"12.13.3.0\" download=\"Download\">
                    <ion-icon c-id=\"12.14.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.15.4.1\">
                      <!--t.12.16.5.0-->
                      RDF XML
                    </ion-label>
                  </ion-item>
                  <ion-item button=\"\" c-id=\"12.17.3.1\" download=\"Download\">
                    <ion-icon c-id=\"12.18.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.19.4.1\">
                      <!--t.12.20.5.0-->
                      JSON-LD
                    </ion-label>
                  </ion-item>
                  <ion-item button=\"\" c-id=\"12.21.3.2\" download=\"Download\">
                    <ion-icon c-id=\"12.22.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.23.4.1\">
                      <!--t.12.24.5.0-->
                      N-Triples
                    </ion-label>
                  </ion-item>
                  <ion-item button=\"\" c-id=\"12.25.3.3\" download=\"Download\">
                    <ion-icon c-id=\"12.26.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.27.4.1\">
                      <!--t.12.28.5.0-->
                      N-Quads
                    </ion-label>
                  </ion-item>
                  <ion-item button=\"\" c-id=\"12.29.3.4\" download=\"Download\">
                    <ion-icon c-id=\"12.30.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.31.4.1\">
                      <!--t.12.32.5.0-->
                      TRIX
                    </ion-label>
                  </ion-item>
                  <ion-item button=\"\" c-id=\"12.33.3.5\" download=\"Download\">
                    <ion-icon c-id=\"12.34.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.35.4.1\">
                      <!--t.12.36.5.0-->
                      Thrift
                    </ion-label>
                  </ion-item>
                  <ion-item button=\"\" c-id=\"12.37.3.6\" download=\"Download\">
                    <ion-icon c-id=\"12.38.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                    <ion-label c-id=\"12.39.4.1\">
                      <!--t.12.40.5.0-->
                      Turtle
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-content>
            </ion-modal>
            <!--s.12.41.0.2.-->
          </geov-entity-download-rdf>
        </div>
        <!--s.1.14.1.5.body-end-->
      </div>
    </geov-entity>`;
    const page = await newSpecPage({
      components: [GeovEntity],
      includeAnnotations: true,
      hydrateClientSide: true,
      html,
    });
    await page.waitForChanges();
    expect(page.root)
      .toEqualHtml(`<geov-entity class=\"hydrated\" entity-id=\"i785518\" fetch-before-render=\"true\" language=\"en\" sparql-endpoint=\"https://sparql.geovistory.org/api_v1_community_data\">
    <!--r.1-->
    <div class=\"container\">
      <div class=\"header\">
        <ion-grid class=\"ion-padding\" fixed=\"\">
          <p class=\"supertitle\">
            <geov-entity-class-label _ssr-id=\"classLabel\" _ssrid=\"classLabel\" class=\"hydrated sc-geov-entity-class-label-h sc-geov-entity-class-label-s\" entityid=\"i785518\" s-id=\"2\" sparqlendpoint=\"https://sparql.geovistory.org/api_v1_community_data\" withicon=\"\">
              <!--r.2-->
              <geov-entity-class-icon c-id=\"2.0.0.0\" class=\"hydrated sc-geov-entity-class-icon-h sc-geov-entity-class-label\" s-id=\"3\">
                <!--r.3-->
                <ion-icon c-id=\"3.0.0.0\" class=\"sc-geov-entity-class-icon\" icon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z'/><path d='M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z'/></svg>\"></ion-icon>
              </geov-entity-class-icon>
              <!--t.2.1.0.1-->
              Person
              <!--s.2.2.0.2.-->
            </geov-entity-class-label>
          </p>
          <h1>
            <geov-entity-label _ssr-id=\"entityLabel\" _ssrid=\"entityLabel\" class=\"hydrated sc-geov-entity-label-h sc-geov-entity-label-s\" entityid=\"i785518\" s-id=\"4\" sparqlendpoint=\"https://sparql.geovistory.org/api_v1_community_data\">
              <!--r.4-->
              <!--t.4.0.0.0-->
              Kepler, Johannes
              <!--s.4.1.0.1.-->
            </geov-entity-label>
          </h1>
          <p>
            <geov-entity-definition _ssr-id=\"definition\" _ssrid=\"definition\" class=\"hydrated sc-geov-entity-definition-h sc-geov-entity-definition-s\" entityid=\"i785518\" s-id=\"5\" sparqlendpoint=\"https://sparql.geovistory.org/api_v1_community_data\">
              <!--r.5-->
            </geov-entity-definition>
          </p>
          <p c-id=\"5.0.0.0\" class=\"definition sc-geov-entity-definition\">
            <!--t.5.1.1.0-->
            Johannes Kepler (ou Keppler), né le 27 décembre 1571 à Weil (ville libre d'Empire) et mort le 15 novembre 1630 à Ratisbonne (ville libre d'Empire), est un astronome allemand célèbre pour avoir étudié l’hypothèse héliocentrique de Nicolas Copernic, affirmant que la Terre tourne autour du Soleil et surtout pour avoir découvert que les planètes ne tournent pas autour du Soleil en suivant des trajectoires circulaires parfaites mais des trajectoires elliptiques.
          </p>
          <p c-id=\"5.2.0.1\" class=\"definition sc-geov-entity-definition\">
            <!--t.5.3.1.0-->
            [Complément] Astronom; Mathematiker [Notes] fb_import_20140912_466
          </p>
          <!--s.5.4.0.2.-->
          <p></p>
        </ion-grid>
      </div>
      <!--s.1.9.1.1.body-start-->
      <geov-entity-properties _ssr-id=\"rest\" _ssrid=\"rest\" class=\"columns-3 hydrated sc-geov-entity-properties-h section\" entityid=\"i785518\" fetchbeforerender="" fixedgrid=\"\" language=\"en\" predicateexclude=\"http://www.w3.org/2000/01/rdf-schema#label,http://www.w3.org/1999/02/22-rdf-syntax-ns#type,https://ontome.net/ontology/p4,https://ontome.net/ontology/p1943,https://ontome.net/ontology/p1762\" s-id=\"6\" sparqlendpoint=\"https://sparql.geovistory.org/api_v1_community_data\">
        <!--r.6-->
        <ion-grid c-id=\"6.0.0.0\" class=\"container sc-geov-entity-properties\" fixed=\"\">
          <geov-entity-props-by-predicate _ssr-id=\"entityPropsByPredicate_p1429\" c-id=\"6.1.1.0\" class=\"hydrated sc-geov-entity-properties sc-geov-entity-props-by-predicate-h\" s-id=\"7\">
            <!--r.7-->
            <ion-card c-id=\"7.0.0.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\">
              <ion-card-header c-id=\"7.1.1.0\" class=\"sc-geov-entity-props-by-predicate\">
                <ion-card-subtitle c-id=\"7.2.2.0\" class=\"sc-geov-entity-props-by-predicate\">
                  <!--t.7.3.3.0-->
                  has gender
                </ion-card-subtitle>
              </ion-card-header>
              <ion-list c-id=\"7.4.1.1\" class=\"sc-geov-entity-props-by-predicate\" lines=\"none\" style=\"min-height: 0px;\">
                <ion-item c-id=\"7.5.2.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" href=\"http://geovistory.org/resource/i739340\" target=\"\">
                  <ion-label c-id=\"7.6.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <h2 c-id=\"7.7.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <!--t.7.8.5.0-->
                      Homme
                    </h2>
                    <p c-id=\"7.9.4.1\" class=\"sc-geov-entity-props-by-predicate\">
                      <!--t.7.10.5.0-->
                      Gender
                    </p>
                  </ion-label>
                </ion-item>
              </ion-list>
            </ion-card>
          </geov-entity-props-by-predicate>
          <geov-entity-props-by-predicate _ssr-id=\"entityPropsByPredicate_p88i\" c-id=\"6.2.1.1\" class=\"hydrated sc-geov-entity-properties sc-geov-entity-props-by-predicate-h\" s-id=\"8\">
            <!--r.8-->
            <ion-card c-id=\"8.0.0.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\">
              <ion-card-header c-id=\"8.1.1.0\" class=\"sc-geov-entity-props-by-predicate\">
                <ion-card-subtitle c-id=\"8.2.2.0\" class=\"sc-geov-entity-props-by-predicate\">
                  <!--t.8.3.3.0-->
                  died in
                </ion-card-subtitle>
              </ion-card-header>
              <ion-list c-id=\"8.4.1.1\" class=\"sc-geov-entity-props-by-predicate\" lines=\"none\" style=\"min-height: 0px;\">
                <ion-item c-id=\"8.5.2.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" href=\"http://geovistory.org/resource/i7726698\" target=\"\">
                  <ion-label c-id=\"8.6.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <h2 c-id=\"8.7.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <!--t.8.8.5.0-->
                      Kepler, Johannes
                    </h2>
                    <p c-id=\"8.9.4.1\" class=\"sc-geov-entity-props-by-predicate\">
                      <!--t.8.10.5.0-->
                      Death
                    </p>
                  </ion-label>
                </ion-item>
              </ion-list>
            </ion-card>
          </geov-entity-props-by-predicate>
          <geov-entity-props-by-predicate _ssr-id=\"entityPropsByPredicate_owl#sameAs\" c-id=\"6.3.1.2\" class=\"hydrated sc-geov-entity-properties sc-geov-entity-props-by-predicate-h\" s-id=\"9\">
            <!--r.9-->
            <ion-card c-id=\"9.0.0.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\">
              <ion-card-header c-id=\"9.1.1.0\" class=\"sc-geov-entity-props-by-predicate\">
                <ion-card-subtitle c-id=\"9.2.2.0\" class=\"sc-geov-entity-props-by-predicate\">
                  <!--t.9.3.3.0-->
                  same as (9)
                </ion-card-subtitle>
              </ion-card-header>
              <ion-list c-id=\"9.4.1.1\" class=\"sc-geov-entity-props-by-predicate\" lines=\"none\" style=\"min-height: 186px;\">
                <ion-item c-id=\"9.5.2.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" detailicon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>\" href=\"https://dbpedia.org/resource/Johannes_Kepler\" target=\"_blank\">
                  <ion-label c-id=\"9.6.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <p c-id=\"9.7.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <!--t.9.8.5.0-->
                      https://dbpedia.org/resource/Johannes_Kepler
                    </p>
                  </ion-label>
                </ion-item>
                <ion-item c-id=\"9.9.2.1\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" detailicon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>\" href=\"http://viaf.org/viaf/41842150\" target=\"_blank\">
                  <ion-label c-id=\"9.10.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <p c-id=\"9.11.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <!--t.9.12.5.0-->
                      http://viaf.org/viaf/41842150
                    </p>
                  </ion-label>
                </ion-item>
                <ion-item c-id=\"9.13.2.2\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" detailicon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>\" href=\"http://d-nb.info/gnd/118561448\" target=\"_blank\">
                  <ion-label c-id=\"9.14.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <p c-id=\"9.15.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <!--t.9.16.5.0-->
                      http://d-nb.info/gnd/118561448
                    </p>
                  </ion-label>
                </ion-item>
              </ion-list>
              <ion-item c-id=\"9.17.1.2\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" lines=\"none\">
                <geov-paginator c-id=\"9.18.2.0\" class=\"hydrated sc-geov-entity-props-by-predicate sc-geov-paginator-h\" s-id=\"10\">
                  <!--r.10-->
                  <ion-item c-id=\"10.0.0.0\" class=\"sc-geov-paginator\" color=\"\" lines=\"none\">
                    <ion-note c-id=\"10.1.1.0\" class=\"sc-geov-paginator\">
                      <!--t.10.2.2.0-->
                      1 –&nbsp;3
                    </ion-note>
                    <ion-buttons c-id=\"10.3.1.1\" class=\"sc-geov-paginator\">
                      <ion-button c-id=\"10.4.2.0\" class=\"sc-geov-paginator\" disabled=\"\">
                        <ion-icon c-id=\"10.5.3.0\" class=\"sc-geov-paginator\" icon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>\" slot=\"icon-only\"></ion-icon>
                      </ion-button>
                      <ion-button c-id=\"10.6.2.1\" class=\"sc-geov-paginator\">
                        <ion-icon c-id=\"10.7.3.0\" class=\"sc-geov-paginator\" icon=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>\" slot=\"icon-only\"></ion-icon>
                      </ion-button>
                    </ion-buttons>
                  </ion-item>
                </geov-paginator>
              </ion-item>
            </ion-card>
          </geov-entity-props-by-predicate>
          <geov-entity-props-by-predicate _ssr-id=\"entityPropsByPredicate_p1111i\" c-id=\"6.4.1.3\" class=\"hydrated sc-geov-entity-properties sc-geov-entity-props-by-predicate-h\" s-id=\"11\">
            <!--r.11-->
            <ion-card c-id=\"11.0.0.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\">
              <ion-card-header c-id=\"11.1.1.0\" class=\"sc-geov-entity-props-by-predicate\">
                <ion-card-subtitle c-id=\"11.2.2.0\" class=\"sc-geov-entity-props-by-predicate\">
                  <!--t.11.3.3.0-->
                  has appellation for language
                </ion-card-subtitle>
              </ion-card-header>
              <ion-list c-id=\"11.4.1.1\" class=\"sc-geov-entity-props-by-predicate\" lines=\"none\" style=\"min-height: 0px;\">
                <ion-item c-id=\"11.5.2.0\" class=\"sc-geov-entity-props-by-predicate\" color=\"\" href=\"http://geovistory.org/resource/i7442632\" target=\"\">
                  <ion-label c-id=\"11.6.3.0\" class=\"sc-geov-entity-props-by-predicate\">
                    <h2 c-id=\"11.7.4.0\" class=\"sc-geov-entity-props-by-predicate\">
                      <!--t.11.8.5.0-->
                      Kepler, Johannes
                    </h2>
                    <p c-id=\"11.9.4.1\" class=\"sc-geov-entity-props-by-predicate\">
                      <!--t.11.10.5.0-->
                      Person Appellation in a Language
                    </p>
                  </ion-label>
                </ion-item>
              </ion-list>
            </ion-card>
          </geov-entity-props-by-predicate>
        </ion-grid>
      </geov-entity-properties>
      <geov-entity-properties _ssrid=\"time\" class=\"columns-1 section\" fetchbeforerender="" entityid=\"i785518\" fixedgrid=\"\" language=\"en\" predicateinclude=\"https://ontome.net/ontology/p4\" sparqlendpoint=\"https://sparql.geovistory.org/api_v1_community_data\"></geov-entity-properties>
      <div class=\"columns-1 ion-text-center section\">
        <geov-entity-download-rdf buttonicon=\"download-outline\" buttonlabel=\"Download RDF\" class=\"hydrated\" color=\"primary\" entityid=\"i785518\" fill=\"outline\" s-id=\"12\">
          <!--r.12-->
          <ion-button c-id=\"12.0.0.0\" color=\"primary\" fill=\"outline\">
            <!--t.12.1.1.0-->
            Download RDF
            <ion-icon c-id=\"12.2.1.1\" icon=\"download-outline\"></ion-icon>
          </ion-button>
          <ion-modal c-id=\"12.3.0.1\">
            <ion-header c-id=\"12.4.1.0\">
              <ion-toolbar c-id=\"12.5.2.0\">
                <ion-buttons c-id=\"12.6.3.0\" slot=\"start\">
                  <ion-button c-id=\"12.7.4.0\">
                    <!--t.12.8.5.0-->
                    Cancel
                  </ion-button>
                </ion-buttons>
                <ion-title c-id=\"12.9.3.1\">
                  <!--t.12.10.4.0-->
                  Download RDF
                </ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content c-id=\"12.11.1.1\" class=\"ion-padding\">
              <ion-list c-id=\"12.12.2.0\" lines=\"none\">
                <ion-item button=\"\" c-id=\"12.13.3.0\" download=\"Download\">
                  <ion-icon c-id=\"12.14.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                  <ion-label c-id=\"12.15.4.1\">
                    <!--t.12.16.5.0-->
                    RDF XML
                  </ion-label>
                </ion-item>
                <ion-item button=\"\" c-id=\"12.17.3.1\" download=\"Download\">
                  <ion-icon c-id=\"12.18.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                  <ion-label c-id=\"12.19.4.1\">
                    <!--t.12.20.5.0-->
                    JSON-LD
                  </ion-label>
                </ion-item>
                <ion-item button=\"\" c-id=\"12.21.3.2\" download=\"Download\">
                  <ion-icon c-id=\"12.22.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                  <ion-label c-id=\"12.23.4.1\">
                    <!--t.12.24.5.0-->
                    N-Triples
                  </ion-label>
                </ion-item>
                <ion-item button=\"\" c-id=\"12.25.3.3\" download=\"Download\">
                  <ion-icon c-id=\"12.26.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                  <ion-label c-id=\"12.27.4.1\">
                    <!--t.12.28.5.0-->
                    N-Quads
                  </ion-label>
                </ion-item>
                <ion-item button=\"\" c-id=\"12.29.3.4\" download=\"Download\">
                  <ion-icon c-id=\"12.30.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                  <ion-label c-id=\"12.31.4.1\">
                    <!--t.12.32.5.0-->
                    TRIX
                  </ion-label>
                </ion-item>
                <ion-item button=\"\" c-id=\"12.33.3.5\" download=\"Download\">
                  <ion-icon c-id=\"12.34.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                  <ion-label c-id=\"12.35.4.1\">
                    <!--t.12.36.5.0-->
                    Thrift
                  </ion-label>
                </ion-item>
                <ion-item button=\"\" c-id=\"12.37.3.6\" download=\"Download\">
                  <ion-icon c-id=\"12.38.4.0\" icon=\"download-outline\" slot=\"start\"></ion-icon>
                  <ion-label c-id=\"12.39.4.1\">
                    <!--t.12.40.5.0-->
                    Turtle
                  </ion-label>
                </ion-item>
              </ion-list>
            </ion-content>
          </ion-modal>
          <!--s.12.41.0.2.-->
        </geov-entity-download-rdf>
      </div>
      <!--s.1.14.1.5.body-end-->
    </div>
  </geov-entity>`);
  });
});
