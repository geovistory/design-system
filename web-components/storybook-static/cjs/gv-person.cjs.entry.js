'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e58dabe7.js');

const gvPersonCss = ":host{display:block}";

const GvPerson = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mode = 'short';
  }
  render() {
    this.parsedBirthDate = new Date(this.birthdate);
    console.log('in render:', this.mode);
    return (index.h(index.Host, null, index.h("gv-button", { onClick: () => this.toggleMode() }, "Toggle"), this.mode === 'long' ? this.getInnerHTML_long() : this.getInnerHTML_short()));
  }
  toggleMode() {
    if (this.mode === 'long')
      this.mode = 'short';
    else if (this.mode === 'short')
      this.mode = 'long';
  }
  getInnerHTML_long() {
    return index.h("h1", null, index.h("span", { id: "name" }, this.name), " - ", index.h("span", { id: "lastname" }, this.lastname), index.h("span", { style: { 'font-size': '12px', 'padding-left': '10px' } }, this.birthdate));
  }
  getInnerHTML_short() {
    let age = (new Date()).getTime() - (new Date(this.birthdate)).getTime();
    age /= (1000 * 3600 * 24 * 365.25);
    return index.h("h3", null, this.name.charAt(0), ". ", this.lastname, index.h("span", { style: { 'font-size': '12px', 'padding-left': '10px' } }, Math.round(age), " years"));
  }
};
GvPerson.style = gvPersonCss;

exports.gv_person = GvPerson;
