# geov-navbar



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type     | Default     |
| ------------ | ------------ | ----------- | -------- | ----------- |
| `geovStyle`  | `geov-style` |             | `string` | `''`        |
| `height`     | `height`     |             | `string` | `undefined` |
| `links`      | `links`      |             | `string` | `undefined` |
| `login`      | `login`      |             | `string` | `undefined` |
| `login_href` | `login_href` |             | `string` | `undefined` |
| `logo`       | `logo`       |             | `string` | `undefined` |


## Dependencies

### Depends on

- [geov-row](../../grid/geov-row)
- [geov-column](../../grid/geov-column)
- [geov-logo](../../basic/geov-logo)
- [geov-button](../../basic/geov-button)
- [geov-divider](../../basic/geov-divider)

### Graph
```mermaid
graph TD;
  geov-navbar --> geov-row
  geov-navbar --> geov-column
  geov-navbar --> geov-logo
  geov-navbar --> geov-button
  geov-navbar --> geov-divider
  geov-logo --> geov-link
  geov-button --> geov-row
  geov-button --> geov-icon
  geov-button --> geov-text
  style geov-navbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
