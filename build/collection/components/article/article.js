import { h, Host } from "@stencil/core";
export class Article {
  constructor() {
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
    return (h(Host, null, h("article", null, h("header", { style: headerStyle }, this.item.icon ? h("span", null, this.item.icon.emoji) : null, h("h1", null, this.item.heading)), h("div", { innerHTML: this.item.content }))));
  }
  static get is() { return "abg-article"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["article.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["article.css"]
    };
  }
  static get properties() {
    return {
      "item": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "ArticleItem",
          "resolved": "ArticleItem",
          "references": {
            "ArticleItem": {
              "location": "import",
              "path": "./article.interface",
              "id": "src/components/article/article.interface.ts::ArticleItem"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      }
    };
  }
  static get events() {
    return [{
        "method": "abgArticle",
        "name": "abgArticle",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=article.js.map
