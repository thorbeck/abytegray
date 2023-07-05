import { h, Host } from "@stencil/core";
export class ArticleList {
  constructor() {
    this.showDescription = false;
    this.items = [];
  }
  componentWillLoad() {
    this.abgArticleList.emit();
  }
  render() {
    return (h(Host, null, h("h1", null, "Articles"), h("ul", null, this.items.map(article => (h("li", { key: article.id }, h("a", { href: `#article/${article.slug}` }, h("h2", null, article.title))))))));
  }
  static get is() { return "abg-article-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["article-list.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["article-list.css"]
    };
  }
  static get properties() {
    return {
      "showDescription": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "show-description",
        "reflect": false,
        "defaultValue": "false"
      },
      "items": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "ArticleListItem[]",
          "resolved": "ArticleListItem[]",
          "references": {
            "ArticleListItem": {
              "location": "import",
              "path": "./article-list.interface",
              "id": "src/components/article-list/article-list.interface.tsx::ArticleListItem"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "defaultValue": "[]"
      }
    };
  }
  static get events() {
    return [{
        "method": "abgArticleList",
        "name": "abgArticleList",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=article-list.js.map
