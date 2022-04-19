import { r as registerInstance, h, H as Host } from './index-e81b4cbd.js';

const gvButtonCss = ":host{display:block}button{height:40px;padding-left:20px;padding-right:20px;font-size:15px;border:none;border-radius:99999px;background-color:lightblue}";

const GvButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("button", null, h("slot", null))));
  }
};
GvButton.style = gvButtonCss;

export { GvButton as gv_button };
