# geov-entity-label



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                              | Type                                 | Default     |
| ---------------- | ----------------- | -------------------------------------------------------- | ------------------------------------ | ----------- |
| `data`           | `data`            | data (optional) if provided, component won't fetchData() | `GeovDataFetchExampleData \| string` | `undefined` |
| `entityId`       | `entity-id`       | entityId ID number of entity, e.g. 'i315800'             | `string`                             | `undefined` |
| `sparqlEndpoint` | `sparql-endpoint` | sparqlEndpoint URL of the sparql endpoint                | `string`                             | `undefined` |


## Methods

### `fetchData() => Promise<GeovDataFetchExampleData>`

does the sparql request(s)

#### Returns

Type: `Promise<GeovDataFetchExampleData>`

a Promise with the data for this component


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
