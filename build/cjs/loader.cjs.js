'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eadb5464.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return index.bootstrapLazy([["abg-nav_2.cjs",[[1,"abg-nav",{"routes":[16],"active":[32]}],[0,"abg-router",{"home":[16],"notFound":[16],"routes":[16],"markup":[32]}]]],["abg-article.cjs",[[1,"abg-article",{"item":[16]}]]],["abg-article-list.cjs",[[1,"abg-article-list",{"showDescription":[4,"show-description"],"items":[16]}]]],["abg-tags.cjs",[[1,"abg-tags",{"tags":[16]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map