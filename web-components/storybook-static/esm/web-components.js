import { p as promiseResolve, b as bootstrapLazy } from './index-e81b4cbd.js';

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
  return bootstrapLazy([["gv-test",[[0,"gv-test",{"name":[1],"lastname":[1],"birthdate":[1],"mode":[32]}]]],["gv-number",[[4,"gv-number",{"attributeNumber":[2,"attribute-number"]}]]],["gv-person-rdf",[[1,"gv-person-rdf",{"pkEntity":[1,"pk-entity"]}]]],["gv-button",[[1,"gv-button"]]]], options);
});
