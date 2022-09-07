# geov-entity-label



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                                                                                                                          | Type     | Default     |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------- |
| `_ssrId`         | `_ssr-id`         | _ssrId is short for server side rendering id and identifies this component and the fetched data respectively. Set this only if you want to enable this component to fetch serve side | `string` | `undefined` |
| `entityId`       | `entity-id`       | entityId ID number of entity, e.g. 'i315800'                                                                                                                                         | `string` | `undefined` |
| `sparqlEndpoint` | `sparql-endpoint` | sparqlEndpoint URL of the sparql endpoint                                                                                                                                            | `string` | `undefined` |


## Methods

### `fetchData() => Promise<GeovDataFetchExampleData>`

Do the sparql request(s)

#### Returns

Type: `Promise<GeovDataFetchExampleData>`

a Promise with the data for this component


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
