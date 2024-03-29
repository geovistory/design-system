import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Data Visualization Components/Yasgui',
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => docsTemlpate(overview, componentApi),
    },
  },
};

const tabs = [
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

# Geographical Place -is classified by-> Geographical Place Classification -classifies with-> Geographical Place Type -label-> label
optional{?s ontome:p2124i/ontome:p2125/rdfs:label ?type}

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

# Geographical Place -is classified by-> Geographical Place Classification -classifies with-> Geographical Place Type -label-> label
optional{?s ontome:p2124i/ontome:p2125/rdfs:label ?type}

# Extract lat and long from WKT
bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

# Append the project query param to the URI
bind(concat(str(?s), "?p=591") as ?link )
}
GROUP BY ?label ?long ?lat ?type ?link`,
  },
];

export const Default = await stencilWrapper(<geov-yasgui></geov-yasgui>);
export const WithMapPlugin = await stencilWrapper(<geov-yasgui plugins={new Set(['mapCircles'])} defaultPlugin={'mapCircles'} queryTabs={tabs}></geov-yasgui>);
export const WithHiddenYasgui = await stencilWrapper(<geov-yasgui plugins={new Set(['mapCircles'])} defaultPlugin={'mapCircles'} queryTabs={tabs} collapse={true}></geov-yasgui>);
export const WithMapPluginCustomized = await stencilWrapper(
  <geov-yasgui
    plugins={new Set(['mapCircles'])}
    defaultPlugin={'mapCircles'}
    queryTabs={tabs}
    pluginConfig={{
      mapCircles: { colorScale: ['#000', '#3246a8'], maxZoom: 25, radiusMin: 4, radiusMax: 25 },
    }}
  ></geov-yasgui>,
);

export const WithMapPopupsNested = await stencilWrapper(
  <geov-yasgui
    plugins={new Set(['mapCircles'])}
    defaultPlugin={'mapCircles'}
    queryTabs={[
      {
        name: 'Addresses of Persons',
        sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_project_1719422',
        query: `

        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX ontome: <https://ontome.net/ontology/>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

        SELECT
        (SAMPLE(?buildingLabel) as ?label)
        (CONCAT(
        '[',
            GROUP_CONCAT(CONCAT('{"label":"',?persName,'", "url":"',str(?person),'?p=1719422"}'); separator=', '),
            ']'
        ) as ?children)

        ?long ?lat ?link ("Persons" as ?type)
        (count(?link) * 0.5 as ?radius)
        WHERE {

        # Construction -had presence-> Presence -was at-> Place (lat/long)
        ?building ontome:p147i/ontome:p148 ?place.

        # Construction -label-> label
        ?building rdfs:label ?buildingLabel.

        # Construction -is location of-> Legal location of an Actor
        ?building ontome:p1851i ?location.

        # -is social quality of -> Person
        ?location ontome:p1411 ?person.

        # Person -label-> persName
        ?person rdfs:label ?persName.

        # Extract lat and long from WKT
        bind(replace(str(?place), '<http://www.opengis.net/def/crs/EPSG/0/4326>', "", "i") as ?rep)
        bind(xsd:float(replace(str(?rep), "^[^0-9\\\\.-]*([-]?[0-9\\\\.]+) .*$", "$1" )) as ?long )
        bind(xsd:float(replace( str(?rep), "^.* ([-]?[0-9\\\\.]+)[^0-9\\\\.]*$", "$1" )) as ?lat )

        # Append the project query param to the URI
        bind(concat(str(?building), "?p=1719422") as ?link )


        }
        GROUP BY ?building ?long ?lat ?type ?link
        `,
      },
    ]}
    pluginConfig={{
      mapCircles: { colorScale: ['blue', 'red'], maxZoom: 25, radiusMin: 4, radiusMax: 25 },
    }}
  ></geov-yasgui>,
);
