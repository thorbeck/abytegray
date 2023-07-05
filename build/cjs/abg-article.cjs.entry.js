'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eadb5464.js');

const articleCss = ":host a{all:unset;display:revert;box-sizing:border-box;display:inline-block;color:var(--color-orange-mike);text-decoration:none;border-bottom:1px solid var(--color-orange-mike);cursor:pointer}:host a:hover,:host a:focus{color:var(--color-orange-mike);text-decoration:none}:host article>div{border-radius:var(--size-oscar);background-color:var(--color-mono-yankee);color:var(--color-mono-alfa)}@media (prefers-color-scheme: light){:host article>div{background-color:var(--color-mono-alfa);color:var(--color-mono-zulu)}}:host img{max-width:100%;height:auto}:host header{display:flex;align-items:center;gap:var(--size-mike);-webkit-user-select:none;user-select:none;background-size:cover;border-radius:var(--size-oscar)}:host header span{font-size:4em}:host header h1{font-size:var(--font-size-charlie)}";

const Article = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.abgArticle = index.createEvent(this, "abgArticle", 7);
    this.item = undefined;
  }
  componentWillLoad() {
    this.abgArticle.emit();
  }
  render() {
    if (!this.item) {
      return null;
    }
    const headerStyle = this.item.cover
      ? {
        backgroundImage: `url(${this.item.cover.url})`,
        paddingTop: '200px',
      }
      : null;
    return (index.h(index.Host, null, index.h("article", null, index.h("header", { style: headerStyle }, this.item.icon ? index.h("span", null, this.item.icon.emoji) : null, index.h("h1", null, this.item.heading)), index.h("div", { innerHTML: this.item.content }))));
  }
};
Article.style = articleCss;

exports.abg_article = Article;

//# sourceMappingURL=abg-article.cjs.entry.js.map