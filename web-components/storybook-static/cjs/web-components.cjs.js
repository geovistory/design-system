'use strict';

const index = require('./index-e58dabe7.js');

/*
 Stencil Client Patch Browser v2.15.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('web-components.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["gv-button.cjs",[[1,"gv-button"]]],["gv-person.cjs",[[0,"gv-person",{"name":[1],"lastname":[1],"birthdate":[1],"mode":[32]}]]]], options);
});
