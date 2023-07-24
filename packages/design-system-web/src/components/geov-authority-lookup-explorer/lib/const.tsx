// German Authority file (GND)
export const TITLE_GND = 'German authority file (GND)';
export const BASE_URI_GND = 'https://lobid.org/gnd/search?q=';
export const SIZE_GND = '&size=';
export const FORMAT_OUTPUT_GND = '&format=json:preferredName';

export const TYPE_PERSON_GND = '&filter=type:Person';
export const TYPE_PLACE_GND = '&filter=type:PlaceOrGeographicName';
export const TYPE_GROUP_GND = '&filter=type:CorporateBody';

// Wikidata
export const TITLE_WIKIDATA = 'Wikidata';
export const ENDPOINT_SPARQL_WIKIDATA = 'https://query.wikidata.org/sparql';
export const QR_SPARQL_WIKIDATA = (keywords: string, type: string, pageSize: number) => `SELECT DISTINCT * WHERE {
  SERVICE wikibase:mwapi {
      bd:serviceParam wikibase:endpoint "www.wikidata.org";
                      wikibase:api "EntitySearch";
                      mwapi:search "${keywords}";
                      mwapi:language "en".
      ?item wikibase:apiOutputItem mwapi:item.
      ?num wikibase:apiOrdinal true.
  }
  ?item rdfs:label ?name filter (lang(?name) = "en").
  ${type}
} ORDER BY ASC(?num) LIMIT ${pageSize}`;

export const TYPE_PERSON_WIKIDATA = '?item wdt:P31 wd:Q5.';
export const TYPE_PLACE_WIKIDATA = '?item wdt:P31/wdt:P279* wd:Q82794.';
export const TYPE_GROUP_WIKIDATA = '?item wdt:P31/wdt:P279* wd:Q43229.';

// IdRef
export const TITLE_IDREF = 'IdRef';
export const BASE_URI_IDREF = 'https://www.idref.fr/Sru/Solr?q=';
export const URL_IDREF = 'https://www.idref.fr/';
export const SIZE_IDREF = '&start=0&rows=';
export const FORMAT_OUTPUT_IDREF = '&indent=on&sort=score%20desc&fl=id,ppn_z,affcourt_z&version=2.2&wt=json';

export const TYPE_ALL_IDREF = 'all:';
export const TYPE_PERSON_IDREF = 'persname_t:';
export const TYPE_PLACE_IDREF = 'geogname_t:';
export const TYPE_GROUP_IDREF = 'corpname_t:';
