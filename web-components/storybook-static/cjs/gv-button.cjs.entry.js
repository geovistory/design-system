'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e58dabe7.js');

const gvButtonCss = ":host{display:block}button{height:40px;padding-left:20px;padding-right:20px;font-size:15px;border:none;border-radius:99999px;background-color:lightblue}";

const GvButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("button", null, index.h("slot", null))));
  }
};
GvButton.style = gvButtonCss;

exports.gv_button = GvButton;
