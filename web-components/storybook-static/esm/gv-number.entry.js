import { r as registerInstance, h, H as Host } from './index-e81b4cbd.js';

const gvNumberCss = ":host{display:block}";

const GvNumber = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("h1", null, "Attribute number: ", this.attributeNumber), h("h1", null, "Slot number: ", h("slot", null))));
  }
};
GvNumber.style = gvNumberCss;

export { GvNumber as gv_number };
