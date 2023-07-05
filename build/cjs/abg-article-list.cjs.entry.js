'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eadb5464.js');

const articleListCss = ":host h2{font-size:1.5em;margin:0;padding:0}";

const ArticleList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.abgArticleList = index.createEvent(this, "abgArticleList", 7);
    this.showDescription = false;
    this.items = [];
  }
  componentWillLoad() {
    this.abgArticleList.emit();
  }
  render() {
    return (index.h(index.Host, null, index.h("h1", null, "Articles"), index.h("ul", null, this.items.map(article => (index.h("li", { key: article.id }, index.h("a", { href: `#article/${article.slug}` }, index.h("h2", null, article.title))))))));
  }
};
ArticleList.style = articleListCss;

exports.abg_article_list = ArticleList;

//# sourceMappingURL=abg-article-list.cjs.entry.js.map