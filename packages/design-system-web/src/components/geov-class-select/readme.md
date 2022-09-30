# geov-class-select



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description                                                            | Type                    | Default     |
| --------------- | ----------------- | ---------------------------------------------------------------------- | ----------------------- | ----------- |
| `checkedOnInit` | `checked-on-init` | If true, the classes are checked on init, else none is checked on init | `boolean`               | `true`      |
| `items`         | --                |                                                                        | `GeovClassSelectItem[]` | `undefined` |
| `loading`       | `loading`         |                                                                        | `boolean`               | `undefined` |


## Events

| Event              | Description | Type                            |
| ------------------ | ----------- | ------------------------------- |
| `selectionChanged` |             | `CustomEvent<ClassSelectEvent>` |


## Dependencies

### Depends on

- ion-list
- ion-list-header
- ion-label
- ion-button
- ion-item
- ion-note
- ion-checkbox
- ion-badge
- ion-skeleton-text

### Graph
```mermaid
graph TD;
  geov-class-select --> ion-list
  geov-class-select --> ion-list-header
  geov-class-select --> ion-label
  geov-class-select --> ion-button
  geov-class-select --> ion-item
  geov-class-select --> ion-note
  geov-class-select --> ion-checkbox
  geov-class-select --> ion-badge
  geov-class-select --> ion-skeleton-text
  ion-button --> ion-ripple-effect
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  style geov-class-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
