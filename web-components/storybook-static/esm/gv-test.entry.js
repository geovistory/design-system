import { r as registerInstance, h, H as Host } from './index-e81b4cbd.js';

const gvTestCss = ":host{display:block}";

const GvTest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mode = 'short';
  }
  render() {
    this.parsedBirthDate = new Date(this.birthdate);
    return (h(Host, null, h("gv-button", { onClick: () => this.toggleMode() }, "Toggle"), this.mode === 'long' ? this.getInnerHTML_long() : this.getInnerHTML_short()));
  }
  toggleMode() {
    if (this.mode === 'long')
      this.mode = 'short';
    else if (this.mode === 'short')
      this.mode = 'long';
  }
  getInnerHTML_long() {
    return h("h1", null, this.name, " - ", this.lastname, h("span", { style: { 'font-size': '12px', 'padding-left': '10px' } }, this.birthdate));
  }
  getInnerHTML_short() {
    let age = (new Date()).getTime() - (new Date(this.birthdate)).getTime();
    age /= (1000 * 3600 * 24 * 365.25);
    return h("h3", null, this.name.charAt(0), ". ", this.lastname, h("span", { style: { 'font-size': '12px', 'padding-left': '10px' } }, Math.round(age), " years"));
  }
};
GvTest.style = gvTestCss;

export { GvTest as gv_test };
