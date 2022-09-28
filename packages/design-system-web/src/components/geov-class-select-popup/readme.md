# geov-class-radio-group



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description | Type                    | Default     |
| ----------- | --------- | ----------- | ----------------------- | ----------- |
| `initValue` | --        |             | `GeovClassSelectItem`   | `undefined` |
| `items`     | --        |             | `GeovClassSelectItem[]` | `undefined` |


## Events

| Event              | Description | Type                                     |
| ------------------ | ----------- | ---------------------------------------- |
| `selectionChanged` |             | `CustomEvent<GeovClassSelectPopupEvent>` |


## Dependencies

### Used by

 - [geov-explorer](../geov-explorer)

### Depends on

- ion-list
- ion-item
- ion-note
- ion-select
- ion-select-option
- ion-label

### Graph
```mermaid
graph TD;
  geov-class-select-popup --> ion-list
  geov-class-select-popup --> ion-item
  geov-class-select-popup --> ion-note
  geov-class-select-popup --> ion-select
  geov-class-select-popup --> ion-select-option
  geov-class-select-popup --> ion-label
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  ion-select --> ion-select-popover
  ion-select --> ion-popover
  ion-select --> ion-action-sheet
  ion-select --> ion-alert
  ion-select-popover --> ion-item
  ion-select-popover --> ion-checkbox
  ion-select-popover --> ion-label
  ion-select-popover --> ion-radio-group
  ion-select-popover --> ion-radio
  ion-select-popover --> ion-list
  ion-select-popover --> ion-list-header
  ion-popover --> ion-backdrop
  ion-action-sheet --> ion-backdrop
  ion-action-sheet --> ion-icon
  ion-action-sheet --> ion-ripple-effect
  ion-alert --> ion-ripple-effect
  ion-alert --> ion-backdrop
  geov-explorer --> geov-class-select-popup
  style geov-class-select-popup fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
