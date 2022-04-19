'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-11dd8fae.js');

/*
 Stencil Client Patch Esm v2.15.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["gv-test.cjs",[[0,"gv-test",{"name":[1],"lastname":[1],"birthdate":[1],"mode":[32]}]]],["gv-number.cjs",[[4,"gv-number",{"attributeNumber":[2,"attribute-number"]}]]],["gv-person-rdf.cjs",[[1,"gv-person-rdf",{"pkEntity":[1,"pk-entity"]}]]],["gv-button.cjs",[[1,"gv-button"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
