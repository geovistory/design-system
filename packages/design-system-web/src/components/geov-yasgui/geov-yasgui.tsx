import { Component, Host, h, Element, Prop } from '@stencil/core';
import type Yasgui from '@triply/yasgui';
import { importYasgui } from '../../lib/importYasgui';

interface Query {
  name?: string;
  sparqlEndpoint: string;
  query: string;
}
@Component({
  tag: 'geov-yasgui',
  shadow: false,
})
export class GeovYasgui {
  @Element() el: HTMLElement;

  @Prop() queries: Query[] = [
    {
      name: 'Origin of Persons',
      sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_project_591',
      query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?label ?long ?lat (count(?person) * 0.5 as ?radius) (count(?person) as ?number) ?type ?link
    WHERE {

    # Geographical Place -had presence-> Presence -was at-> Place (lat/long)
    ?s ontome:p147i/ontome:p148 ?place.

    # Geographical Place -label-> label
    ?s rdfs:label ?label.

    # Geographical Place -is origin of-> Person
    ?s ontome:p1439i ?person.

    # Geographical Place -has type-> Geographical Place Type -label-> label
    optional{?s ontome:p1110/rdfs:label ?type}

    # Extract lat and long from WKT
  bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
    bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
    bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

    # Append the project query param to the URI
  bind(concat(str(?s), "?p=591") as ?link )
}
GROUP BY ?label ?long ?lat ?type ?link
`,
    },
    {
      name: 'Origin of Persons2',
      sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_project_591',
      query: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?label ?long ?lat (count(?person) * 0.5 as ?radius) (count(?person) as ?number) ?type ?link
    WHERE {

    # Geographical Place -had presence-> Presence -was at-> Place (lat/long)
    ?s ontome:p147i/ontome:p148 ?place.

    # Geographical Place -label-> label
    ?s rdfs:label ?label.

    # Geographical Place -is origin of-> Person
    ?s ontome:p1439i ?person.

    # Geographical Place -has type-> Geographical Place Type -label-> label
    optional{?s ontome:p1110/rdfs:label ?type}

    # Extract lat and long from WKT
  bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
    bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
    bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

    # Append the project query param to the URI
  bind(concat(str(?s), "?p=591") as ?link )
}
GROUP BY ?label ?long ?lat ?type ?link
`,
    },
  ];

  @Prop() plugins: any[] = [];

  @Prop() defaultPlugin: string = 'table';

  Y: typeof Yasgui;

  async componentWillLoad() {
    this.Y = await importYasgui();
  }

  componentDidLoad() {
    this.setYasrDefaults();
    localStorage.removeItem('yagui__config');
    if (!this.el) return;

    const yasgui = new this.Y(this.el, {});

    // close initial tab
    yasgui.getTab().close();

    // add tabs
    const tabDefaults = this.Y.Tab.getDefaults();
    this.queries.forEach((q, i) => {
      yasgui.addTab(
        i === 0,
        {
          ...tabDefaults,
          id: 'tab' + i,
          requestConfig: { ...tabDefaults.requestConfig, endpoint: q.sparqlEndpoint },
          name: q.name,
          yasqe: { value: q.query },
          yasr: {
            ...tabDefaults.yasr,
            settings: {
              selectedPlugin: this.defaultPlugin,
            },
          },
        },
        { avoidDuplicateTabs: true },
      );
    });

    // execute query of active tab
    yasgui.getTab().query();
  }

  /**
   * Setup defaults for yasr.
   * This will be on window. Side effects expected, with multiple instances
   * on the same page.
   */
  setYasrDefaults() {
    this.Y.Yasr.defaults.pluginOrder = ['response', 'table', 'map'];
    this.plugins.forEach(p => this.Y.Yasr.registerPlugin(p.guiName, p));
  }

  render() {
    return <Host></Host>;
  }
}
