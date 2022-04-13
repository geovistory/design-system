import { p as promiseResolve, b as bootstrapLazy } from './index-5113fe84.js';

/*
 Stencil Client Patch Browser v2.15.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["gv-button",[[1,"gv-button"]]],["gv-person",[[0,"gv-person",{"name":[1],"lastname":[1],"birthdate":[1],"mode":[32]}]]]], options);
});
