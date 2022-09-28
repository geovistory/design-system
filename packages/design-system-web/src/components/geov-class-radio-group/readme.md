# geov-class-radio-group



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description | Type                    | Default     |
| ----------- | --------- | ----------- | ----------------------- | ----------- |
| `initValue` | --        |             | `GeovClassSelectItem`   | `undefined` |
| `items`     | --        |             | `GeovClassSelectItem[]` | `undefined` |
| `loading`   | `loading` |             | `boolean`               | `undefined` |


## Events

| Event              | Description | Type                                    |
| ------------------ | ----------- | --------------------------------------- |
| `selectionChanged` |             | `CustomEvent<GeovClassRadioGroupEvent>` |


## Dependencies

### Used by

 - [geov-explorer](../geov-explorer)

### Depends on

- ion-list
- ion-radio-group
- ion-item-divider
- ion-label
- ion-item
- ion-note
- ion-radio
- ion-button
- ion-skeleton-text

### Graph
```mermaid
graph TD;
  geov-class-radio-group --> ion-list
  geov-class-radio-group --> ion-radio-group
  geov-class-radio-group --> ion-item-divider
  geov-class-radio-group --> ion-label
  geov-class-radio-group --> ion-item
  geov-class-radio-group --> ion-note
  geov-class-radio-group --> ion-radio
  geov-class-radio-group --> ion-button
  geov-class-radio-group --> ion-skeleton-text
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  ion-button --> ion-ripple-effect
  geov-explorer --> geov-class-radio-group
  style geov-class-radio-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
