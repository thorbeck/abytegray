import { r as registerInstance, c as createEvent, h, H as Host } from './index-b508fa74.js';

const articleListCss = ":host h2{font-size:1.5em;margin:0;padding:0}";

const ArticleList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.abgArticleList = createEvent(this, "abgArticleList", 7);
    this.showDescription = false;
    this.items = [];
  }
  componentWillLoad() {
    this.abgArticleList.emit();
  }
  render() {
    return (h(Host, null, h("h1", null, "Articles"), h("ul", null, this.items.map(article => (h("li", { key: article.id }, h("a", { href: `#article/${article.slug}` }, h("h2", null, article.title))))))));
  }
};
ArticleList.style = articleListCss;

export { ArticleList as abg_article_list };

//# sourceMappingURL=abg-article-list.entry.js.map