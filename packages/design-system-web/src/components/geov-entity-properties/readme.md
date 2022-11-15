# geov-entity-properties



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                                                                                                                                                                                                                       | Type      | Default     |
| ------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `entityId`          | `entity-id`           | entityId ID number of entity, e.g. 'i315800'                                                                                                                                                                                                                                      | `string`  | `undefined` |
| `fetchBeforeRender` | `fetch-before-render` |                                                                                                                                                                                                                                                                                   | `boolean` | `undefined` |
| `language`          | `language`            | language prints the label with the language or english, if not found, e.g. 'en'                                                                                                                                                                                                   | `string`  | `'en'`      |
| `sparqlEndpoint`    | `sparql-endpoint`     | sparqlEndpoint URL of the sparql endpoint                                                                                                                                                                                                                                         | `string`  | `undefined` |
| `uriRegex`          | `uri-regex`           | uriRegex Optional regex with capturing groups to transform the uri into the desired url. To use together with uriReplace.                                                                                                                                                         | `string`  | `undefined` |
| `uriReplace`        | `uri-replace`         | uriReplace String used to replace the uriRegex.  Example (pseudo code): const uriRegex = (http:\/\/geovistory.org\/)(.*) const uriReplace = "http://dev.geovistory.org/resource/$2?p=123" http://geovistory.org/resource/i54321 => http://dev.geovistory.org/resource/54321?p=123 | `string`  | `undefined` |


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
