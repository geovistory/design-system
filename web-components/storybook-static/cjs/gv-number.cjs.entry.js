'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-11dd8fae.js');

const gvNumberCss = ":host{display:block}";

const GvNumber = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("h1", null, "Attribute number: ", this.attributeNumber), index.h("h1", null, "Slot number: ", index.h("slot", null))));
  }
};
GvNumber.style = gvNumberCss;

exports.gv_number = GvNumber;
