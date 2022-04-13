import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './gv-button2.js';

const gvPersonCss = ":host{display:block}";

const GvPerson$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.mode = 'short';
  }
  render() {
    this.parsedBirthDate = new Date(this.birthdate);
    console.log('in render:', this.mode);
    return (h(Host, null, h("gv-button", { onClick: () => this.toggleMode() }, "Toggle"), this.mode === 'long' ? this.getInnerHTML_long() : this.getInnerHTML_short()));
  }
  toggleMode() {
    if (this.mode === 'long')
      this.mode = 'short';
    else if (this.mode === 'short')
      this.mode = 'long';
  }
  getInnerHTML_long() {
    return h("h1", null, h("span", { id: "name" }, this.name), " - ", h("span", { id: "lastname" }, this.lastname), h("span", { style: { 'font-size': '12px', 'padding-left': '10px' } }, this.birthdate));
  }
  getInnerHTML_short() {
    let age = (new Date()).getTime() - (new Date(this.birthdate)).getTime();
    age /= (1000 * 3600 * 24 * 365.25);
    return h("h3", null, this.name.charAt(0), ". ", this.lastname, h("span", { style: { 'font-size': '12px', 'padding-left': '10px' } }, Math.round(age), " years"));
  }
  static get style() { return gvPersonCss; }
}, [0, "gv-person", {
    "name": [1],
    "lastname": [1],
    "birthdate": [1],
    "mode": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gv-person", "gv-button"];
  components.forEach(tagName => { switch (tagName) {
    case "gv-person":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GvPerson$1);
      }
      break;
    case "gv-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GvPerson = GvPerson$1;
const defineCustomElement = defineCustomElement$1;

export { GvPerson, defineCustomElement };
