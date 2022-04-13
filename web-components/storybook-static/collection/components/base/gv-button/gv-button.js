import { Component, Host, h } from '@stencil/core';
export class GvButton {
  render() {
    return (h(Host, null,
      h("button", null,
        h("slot", null))));
  }
  static get is() { return "gv-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["gv-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gv-button.css"]
  }; }
}
