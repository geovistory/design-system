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

const tabsForTimeline = [
  {
    name: 'Ship voyages',
    sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_project_84760',
    query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT (concat(str(?e), "?p=84760") as ?entityLink) (MIN(?date) as ?startDate) (MAX(?date) as ?endDate) (SAMPLE(?l) as ?entityLabel) ?entityClassLabel
WHERE {
  # event is a Ship voyages
  ?e a ontome:c523 .
  ontome:c523 rdfs:label ?entityClassLabel .
  # event -> has -> time span
  ?e ontome:p4 ?timespan.
  # time span -> timeprop -> date time description
  ?timespan ontome:p71|ontome:p72|ontome:p150|ontome:p151|ontome:p152|ontome:p153 ?dtd.
  # date time description -> year;month;day
  ?dtd time:year ?y ; time:month ?m  ; time:day ?d .
  FILTER regex(str(?y), '^-') # necessary because of https://github.com/geovistory/toolbox-streams/issues/124
  # parse to xsd:date
  bind(xsd:date(concat(replace(str(?y), "^-", "" ), replace(str(?m), "^-", "" ),replace(str(?d), "^--", "" ))) as ?date)
  # event -> has -> label
  ?e rdfs:label ?l .
}
GROUP BY ?e ?entityClassLabel
LIMIT 10`,
  },
  {
    name: 'A Person',
    sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_project_924033',
    query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xml: <http://www.w3.org/XML/1998/namespace>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX time: <http://www.w3.org/2006/time#>
PREFIX ontome: <https://ontome.net/ontology/>
PREFIX geov: <http://geovistory.org/resource/>

SELECT
(concat(str(?e), "?p=924033") as ?entityLink)
(MIN(?date) as ?startDate) (MAX(?date) as ?endDate) (SAMPLE(?l) as ?entityLabel) (SAMPLE(?classLabel) as ?entityClassLabel)
WHERE {
  # person -> a -> class
  geov:i868683 a ontome:c21 ;
    # -> has -> label
      rdfs:label ?l ;
      # -> was born | died in -> event
      ontome:p86i|ontome:p88i ?e .
  # event class label
  ?e a/rdfs:label ?classLabel .
  # event -> has -> time span
  ?e ontome:p4 ?timespan.
  # time span -> timeprop -> date time description
  ?timespan ontome:p71|ontome:p72|ontome:p150|ontome:p151|ontome:p152|ontome:p153 ?dtd.
  # date time description -> year;month;day
  ?dtd time:year ?y ; time:month ?m  ; time:day ?d .
  FILTER regex(str(?y), '^-') # necessary because of https://github.com/geovistory/toolbox-streams/issues/124
  # parse to xsd:date
  bind(xsd:date(concat(replace(str(?y), "^-", "" ), replace(str(?m), "^-", "" ),replace(str(?d), "^--", "" ))) as ?date)

}
GROUP BY ?e ?classLabel`,
  },
];

export const Default = await stencilWrapper(<geov-yasgui></geov-yasgui>);

export const HideYasgui = await stencilWrapper(<geov-yasgui plugins={new Set(['mapCircles'])} defaultPlugin={'mapCircles'} queryTabs={tabs} collapse={true}></geov-yasgui>);
export const HideYasguiAndToggle = await stencilWrapper(
  <geov-yasgui plugins={new Set(['mapCircles'])} defaultPlugin={'mapCircles'} queryTabs={tabs} collapse={true} hideYasqueToggle={true}></geov-yasgui>,
);

export const PluginMap = await stencilWrapper(<geov-yasgui plugins={new Set(['mapCircles'])} defaultPlugin={'mapCircles'} queryTabs={tabs}></geov-yasgui>);
export const PluginMapHeight200px = await stencilWrapper(
  <geov-yasgui
    plugins={new Set(['mapCircles'])}
    defaultPlugin={'mapCircles'}
    queryTabs={tabs}
    pluginConfig={{
      mapCircles: { mapHeight: '200px' },
    }}
  ></geov-yasgui>,
);

export const PluginMapCustomized = await stencilWrapper(
  <geov-yasgui
    plugins={new Set(['mapCircles'])}
    defaultPlugin={'mapCircles'}
    queryTabs={tabs}
    pluginConfig={{
      mapCircles: { colorScale: ['#000', '#3246a8'], maxZoom: 25, radiusMin: 4, radiusMax: 25 },
    }}
  ></geov-yasgui>,
);

export const PlugingMapPopupsNested = await stencilWrapper(
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

export const PluginMapLongLabelInLegend = await stencilWrapper(
  <geov-yasgui
    plugins={new Set(['mapCircles'])}
    defaultPlugin={'mapCircles'}
    queryTabs={[
      {
        name: 'a',
        query: `SELECT
( "foo" AS ?label )
( 11.342778 AS ?long )
( 44.493889 AS ?lat )
( 2 as ?radius )
( 1 as ?number )
( "Liste jüdischer Handwerker und Kaufleute in Basel" AS ?type )
( "http://geovistory.org/resource/i1939375?p=1719422" AS ?link )
WHERE {
  # This part is empty because we're not actually querying a database
}`,
        sparqlEndpoint: 'https://sparql.geovistory.org/api_v1_project_591',
        selectedPlugin: 'mapCircles',
      },
    ]}
    pluginConfig={{
      mapCircles: { mapHeight: '200px' },
    }}
  ></geov-yasgui>,
);

export const WithTimeline = await stencilWrapper(<geov-yasgui plugins={new Set(['timeline'])} defaultPlugin={'timeline'} queryTabs={tabsForTimeline}></geov-yasgui>);
