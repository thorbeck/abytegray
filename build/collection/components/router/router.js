import { h, Host } from "@stencil/core";
export class Router {
  constructor() {
    // Handles routing based on hashroutes
    this.locationHandler = async () => {
      // split has if child route
      let location = window.location.hash.replace('#', '').split('/');
      // find page routes
      let route = location[0] == '' ? this.home : this.routes.find(item => item.slug === location[0]) || this.notFound;
      // update based on route
      document.title = route.title;
      this.markup = route.markup;
    };
    this.home = undefined;
    this.notFound = undefined;
    this.routes = undefined;
    this.markup = undefined;
  }
  // watch for prop changes
  routesHandler() {
    this.locationHandler();
  }
  componentWillLoad() {
    // Send event
    this.abgRouter.emit();
    // listen for hashevents and output to console
    window.addEventListener('hashchange', () => {
      this.locationHandler();
    });
  }
  render() {
    return h(Host, { innerHTML: this.markup });
  }
  static get is() { return "abg-router"; }
  static get originalStyleUrls() {
    return {
      "$": ["router.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["router.css"]
    };
  }
  static get properties() {
    return {
      "home": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "RouterItem",
          "resolved": "RouterItem",
          "references": {
            "RouterItem": {
              "location": "import",
              "path": "./router.interface",
              "id": "src/components/router/router.interface.tsx::RouterItem"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      },
      "notFound": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "RouterItem",
          "resolved": "RouterItem",
          "references": {
            "RouterItem": {
              "location": "import",
              "path": "./router.interface",
              "id": "src/components/router/router.interface.tsx::RouterItem"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      },
      "routes": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "RouterItem[]",
          "resolved": "RouterItem[]",
          "references": {
            "RouterItem": {
              "location": "import",
              "path": "./router.interface",
              "id": "src/components/router/router.interface.tsx::RouterItem"
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
      "markup": {}
    };
  }
  static get events() {
    return [{
        "method": "abgRouter",
        "name": "abgRouter",
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
  static get watchers() {
    return [{
        "propName": "routes",
        "methodName": "routesHandler"
      }];
  }
}
//# sourceMappingURL=router.js.map
