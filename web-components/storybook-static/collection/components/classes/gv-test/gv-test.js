import { Component, Host, h, Prop, State } from '@stencil/core';
export class GvTest {
  constructor() {
    this.mode = 'short';
  }
  render() {
    this.parsedBirthDate = new Date(this.birthdate);
    return (h(Host, null,
      h("gv-button", { onClick: () => this.toggleMode() }, "Toggle"),
      this.mode === 'long' ? this.getInnerHTML_long() : this.getInnerHTML_short()));
  }
  toggleMode() {
    if (this.mode === 'long')
      this.mode = 'short';
    else if (this.mode === 'short')
      this.mode = 'long';
  }
  getInnerHTML_long() {
    return h("h1", null,
      this.name,
      " - ",
      this.lastname,
      h("span", { style: { 'font-size': '12px', 'padding-left': '10px' } }, this.birthdate));
  }
  getInnerHTML_short() {
    let age = (new Date()).getTime() - (new Date(this.birthdate)).getTime();
    age /= (1000 * 3600 * 24 * 365.25);
    return h("h3", null,
      this.name.charAt(0),
      ". ",
      this.lastname,
      h("span", { style: { 'font-size': '12px', 'padding-left': '10px' } },
        Math.round(age),
        " years"));
  }
  static get is() { return "gv-test"; }
  static get originalStyleUrls() { return {
    "$": ["gv-test.css"]
  }; }
  static get styleUrls() { return {
    "$": ["gv-test.css"]
  }; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "name",
      "reflect": false
    },
    "lastname": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "lastname",
      "reflect": false
    },
    "birthdate": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "birthdate",
      "reflect": false
    }
  }; }
  static get states() { return {
    "mode": {}
  }; }
}
