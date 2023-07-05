import { h } from "@stencil/core";
export class Tags {
  constructor() {
    this.tags = [];
  }
  componentWillLoad() {
    this.abgTags.emit();
  }
  handleUrlClick(e, tag) {
    e.preventDefault();
    console.log(tag);
  }
  render() {
    return (h("ul", null, this.tags.map(tag => (h("li", { key: tag }, h("a", { href: "", onClick: e => this.handleUrlClick(e, tag) }, tag))))));
  }
  static get is() { return "abg-tags"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["tags.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tags.css"]
    };
  }
  static get properties() {
    return {
      "tags": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "string[]",
          "resolved": "string[]",
          "references": {}
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
        "method": "abgTags",
        "name": "abgTags",
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
//# sourceMappingURL=tags.js.map
