'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eadb5464.js');

/*
 Stencil Client Patch Browser v4.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('abg.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["abg-nav_2.cjs",[[1,"abg-nav",{"routes":[16],"active":[32]}],[0,"abg-router",{"home":[16],"notFound":[16],"routes":[16],"markup":[32]}]]],["abg-article.cjs",[[1,"abg-article",{"item":[16]}]]],["abg-article-list.cjs",[[1,"abg-article-list",{"showDescription":[4,"show-description"],"items":[16]}]]],["abg-tags.cjs",[[1,"abg-tags",{"tags":[16]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=abg.cjs.js.map