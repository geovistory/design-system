import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gvNumberCss = ":host{display:block}";

const GvNumber$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("h1", null, "Attribute number: ", this.attributeNumber), h("h1", null, "Slot number: ", h("slot", null))));
  }
  static get style() { return gvNumberCss; }
}, [4, "gv-number", {
    "attributeNumber": [2, "attribute-number"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gv-number"];
  components.forEach(tagName => { switch (tagName) {
    case "gv-number":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GvNumber$1);
      }
      break;
  } });
}

const GvNumber = GvNumber$1;
const defineCustomElement = defineCustomElement$1;

export { GvNumber, defineCustomElement };
