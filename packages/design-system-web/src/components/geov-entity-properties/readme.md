# geov-entity-properties



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                     | Type      | Default     |
| ------------------- | --------------------- | ------------------------------------------------------------------------------- | --------- | ----------- |
| `entityId`          | `entity-id`           | entityId ID number of entity, e.g. 'i315800'                                    | `string`  | `undefined` |
| `fetchBeforeRender` | `fetch-before-render` |                                                                                 | `boolean` | `undefined` |
| `language`          | `language`            | language prints the label with the language or english, if not found, e.g. 'en' | `string`  | `'en'`      |
| `sparqlEndpoint`    | `sparql-endpoint`     | sparqlEndpoint URL of the sparql endpoint                                       | `string`  | `undefined` |


## Dependencies

### Depends on

- [geov-entity-props-by-predicate](../geov-entity-props-by-predicate)

### Graph
```mermaid
graph TD;
  geov-entity-properties --> geov-entity-props-by-predicate
  geov-entity-props-by-predicate --> ion-list
  geov-entity-props-by-predicate --> ion-item
  geov-entity-props-by-predicate --> ion-label
  geov-entity-props-by-predicate --> geov-display-time-datetimedescription
  geov-entity-props-by-predicate --> geov-display-geosparql-wktliteral
  geov-entity-props-by-predicate --> geov-paginator
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  geov-paginator --> ion-note
  geov-paginator --> ion-buttons
  geov-paginator --> ion-button
  geov-paginator --> ion-icon
  ion-button --> ion-ripple-effect
  style geov-entity-properties fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
