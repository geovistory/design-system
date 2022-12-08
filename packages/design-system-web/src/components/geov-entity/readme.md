# geov-entity



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                     | Type      | Default     |
| ------------------- | --------------------- | ------------------------------------------------------------------------------- | --------- | ----------- |
| `entityId`          | `entity-id`           | entityId ID number of entity, e.g. 'i315800'                                    | `string`  | `undefined` |
| `fetchBeforeRender` | `fetch-before-render` |                                                                                 | `boolean` | `true`      |
| `language`          | `language`            | language prints the label with the language or english, if not found, e.g. 'en' | `string`  | `'en'`      |
| `sparqlEndpoint`    | `sparql-endpoint`     | sparqlEndpoint URL of the sparql endpoint                                       | `string`  | `undefined` |


## Dependencies

### Depends on

- ion-grid
- [geov-entity-class-label](../geov-entity-class-label)
- [geov-entity-label](../geov-entity-label)
- [geov-entity-definition](../geov-entity-definition)
- [geov-entity-properties](../geov-entity-properties)
- ion-card
- ion-card-header
- ion-card-subtitle
- ion-card-content

### Graph
```mermaid
graph TD;
  geov-entity --> ion-grid
  geov-entity --> geov-entity-class-label
  geov-entity --> geov-entity-label
  geov-entity --> geov-entity-definition
  geov-entity --> geov-entity-properties
  geov-entity --> ion-card
  geov-entity --> ion-card-header
  geov-entity --> ion-card-subtitle
  geov-entity --> ion-card-content
  geov-entity-properties --> geov-entity-props-by-predicate
  geov-entity-props-by-predicate --> ion-card
  geov-entity-props-by-predicate --> ion-card-header
  geov-entity-props-by-predicate --> ion-card-subtitle
  geov-entity-props-by-predicate --> ion-card-content
  geov-entity-props-by-predicate --> ion-list
  geov-entity-props-by-predicate --> ion-item
  geov-entity-props-by-predicate --> ion-label
  geov-entity-props-by-predicate --> geov-display-time-datetimedescription
  geov-entity-props-by-predicate --> geov-display-geosparql-wktliteral
  geov-entity-props-by-predicate --> geov-paginator
  ion-card --> ion-ripple-effect
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  geov-paginator --> ion-item
  geov-paginator --> ion-note
  geov-paginator --> ion-buttons
  geov-paginator --> ion-button
  geov-paginator --> ion-icon
  ion-button --> ion-ripple-effect
  style geov-entity fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
