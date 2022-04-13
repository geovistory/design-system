import { p as promiseResolve, b as bootstrapLazy } from './index-5113fe84.js';

/*
 Stencil Client Patch Esm v2.15.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["gv-button",[[1,"gv-button"]]],["gv-person",[[0,"gv-person",{"name":[1],"lastname":[1],"birthdate":[1],"mode":[32]}]]]], options);
  });
};

export { defineCustomElements };
