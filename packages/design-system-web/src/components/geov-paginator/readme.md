# geov-paginator



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description | Type      | Default     |
| ---------------------- | ------------------------- | ----------- | --------- | ----------- |
| `color`                | `color`                   |             | `string`  | `undefined` |
| `hidePageSize`         | `hide-page-size`          |             | `boolean` | `undefined` |
| `length`               | `length`                  |             | `number`  | `0`         |
| `pageIndex`            | `page-index`              |             | `number`  | `0`         |
| `pageSize`             | `page-size`               |             | `number`  | `25`        |
| `showFirstLastButtons` | `show-first-last-buttons` |             | `boolean` | `true`      |


## Events

| Event         | Description | Type                     |
| ------------- | ----------- | ------------------------ |
| `pageChanged` |             | `CustomEvent<PageEvent>` |


## Dependencies

### Used by

 - [geov-entity-props-by-predicate](../geov-entity-props-by-predicate)
 - [geov-explorer](../geov-explorer)

### Depends on

- ion-item
- ion-note
- ion-buttons
- ion-button
- ion-icon

### Graph
```mermaid
graph TD;
  geov-paginator --> ion-item
  geov-paginator --> ion-note
  geov-paginator --> ion-buttons
  geov-paginator --> ion-button
  geov-paginator --> ion-icon
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  ion-button --> ion-ripple-effect
  geov-entity-props-by-predicate --> geov-paginator
  geov-explorer --> geov-paginator
  style geov-paginator fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
