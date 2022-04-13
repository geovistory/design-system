'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e58dabe7.js');

/*
 Stencil Client Patch Esm v2.15.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["gv-button.cjs",[[1,"gv-button"]]],["gv-person.cjs",[[0,"gv-person",{"name":[1],"lastname":[1],"birthdate":[1],"mode":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
