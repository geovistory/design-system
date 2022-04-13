import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gvButtonCss = ":host{display:block}button{height:40px;padding-left:20px;padding-right:20px;font-size:15px;border:none;border-radius:99999px;background-color:lightblue}";

const GvButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("button", null, h("slot", null))));
  }
  static get style() { return gvButtonCss; }
}, [1, "gv-button"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gv-button"];
  components.forEach(tagName => { switch (tagName) {
    case "gv-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GvButton);
      }
      break;
  } });
}

export { GvButton as G, defineCustomElement as d };
