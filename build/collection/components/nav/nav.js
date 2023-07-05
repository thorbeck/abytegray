import { h } from "@stencil/core";
export class Nav {
  constructor() {
    this.routes = undefined;
    this.active = false;
  }
  componentWillLoad() {
    this.abgNav.emit();
  }
  render() {
    return (h("nav", null, h("ul", null, this.routes.map(route => (h("li", { key: route.slug }, h("a", { href: `/#${route.slug}`, "data-active": this.active }, route.title)))))));
  }
  static get is() { return "abg-nav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["nav.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["nav.css"]
    };
  }
  static get properties() {
    return {
      "routes": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "NavItem[]",
          "resolved": "NavItem[]",
          "references": {
            "NavItem": {
              "location": "import",
              "path": "./nav.interface",
              "id": "src/components/nav/nav.interface.ts::NavItem"
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
  static get states() {
    return {
      "active": {}
    };
  }
  static get events() {
    return [{
        "method": "abgNav",
        "name": "abgNav",
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
//# sourceMappingURL=nav.js.map
