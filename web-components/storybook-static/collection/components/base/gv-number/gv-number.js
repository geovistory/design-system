import { Component, Host, h, Prop } from '@stencil/core';
export class GvNumber {
  render() {
    return (h(Host, null,
      h("h1", null,
        "Attribute number: ",
        this.attributeNumber),
      h("h1", null,
        "Slot number: ",
        h("slot", null))));
  }
  static get is() { return "gv-number"; }
  static get originalStyleUrls() { return {
    "$": ["gv-number.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gv-number.css"]
  }; }
  static get properties() { return {
    "attributeNumber": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "attribute-number",
      "reflect": false
    }
  }; }
}
