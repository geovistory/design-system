import { h } from '@stencil/core';
import { docsTemlpate } from '../../../.storybook/templates/docsTemplate';
import { stencilWrapper } from '../../../.storybook/lib/stencilWrapper';
import componentApi from './docs-component-api.md?raw';
import overview from './docs-overview.md?raw';
export default {
  title: 'Design Components/Yasgui',
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
GROUP BY ?label ?long ?lat ?type ?link`,
  },
];

export const Default = await stencilWrapper(<geov-yasgui></geov-yasgui>);
export const WithMapPlugin = await stencilWrapper(<geov-yasgui plugins={new Set(['mapCircles'])} defaultPlugin={'mapCircles'} queryTabs={tabs}></geov-yasgui>);
