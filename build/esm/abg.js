import { p as promiseResolve, b as bootstrapLazy } from './index-b508fa74.js';
export { s as setNonce } from './index-b508fa74.js';

/*
 Stencil Client Patch Browser v4.0.1 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["abg-nav_2",[[1,"abg-nav",{"routes":[16],"active":[32]}],[0,"abg-router",{"home":[16],"notFound":[16],"routes":[16],"markup":[32]}]]],["abg-article",[[1,"abg-article",{"item":[16]}]]],["abg-article-list",[[1,"abg-article-list",{"showDescription":[4,"show-description"],"items":[16]}]]],["abg-tags",[[1,"abg-tags",{"tags":[16]}]]]], options);
});

//# sourceMappingURL=abg.js.map