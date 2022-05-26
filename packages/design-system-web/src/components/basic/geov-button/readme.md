# geov-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type                                  | Default     |
| ---------- | ----------- | ----------- | ------------------------------------- | ----------- |
| `href`     | `href`      |             | `string`                              | `undefined` |
| `icon`     | `icon`      |             | `"arrow-right" \| "github" \| "link"` | `undefined` |
| `iconPos`  | `icon-pos`  |             | `"end" \| "start"`                    | `'start'`   |
| `iconSize` | `icon-size` |             | `"large" \| "medium" \| "small"`      | `'medium'`  |
| `rounded`  | `rounded`   |             | `boolean`                             | `undefined` |
| `variant`  | `variant`   |             | `"ghost" \| "outline" \| "solid"`     | `'solid'`   |


## Dependencies

### Used by

 - [geov-company-card](../../advanced/geov-company-card)
 - [geov-project-card](../../advanced/geov-project-card)

### Depends on

- [geov-row](../../grid/geov-row)
- [geov-icon](../geov-icon)
- [geov-text](../geov-text)

### Graph
```mermaid
graph TD;
  geov-button --> geov-row
  geov-button --> geov-icon
  geov-button --> geov-text
  geov-company-card --> geov-button
  geov-project-card --> geov-button
  style geov-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
