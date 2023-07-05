'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eadb5464.js');

const navCss = ":host{all:unset;display:revert;box-sizing:border-box}:host ul{display:flex;margin:0;padding:var(--size-oscar) var(--size-mike);gap:var(--size-mike);list-style:none;border-radius:var(--size-oscar);background:var(--color-mono-yankee)}@media (prefers-color-scheme: light){:host ul{background:var(--color-mono-delta)}}:host a{color:var(--color-orange-alfa);text-decoration:none;text-transform:lowercase}:host a:hover{color:var(--color-orange-mike)}@media (prefers-color-scheme: light){:host a{color:var(--color-mono-zulu)}}";

const Nav = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.abgNav = index.createEvent(this, "abgNav", 7);
    this.routes = undefined;
    this.active = false;
  }
  componentWillLoad() {
    this.abgNav.emit();
  }
  render() {
    return (index.h("nav", null, index.h("ul", null, this.routes.map(route => (index.h("li", { key: route.slug }, index.h("a", { href: `/#${route.slug}`, "data-active": this.active }, route.title)))))));
  }
};
Nav.style = navCss;

const routerCss = "abg-router{display:block}";

const Router = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.abgRouter = index.createEvent(this, "abgRouter", 7);
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
    return index.h(index.Host, { innerHTML: this.markup });
  }
  static get watchers() { return {
    "routes": ["routesHandler"]
  }; }
};
Router.style = routerCss;

exports.abg_nav = Nav;
exports.abg_router = Router;

//# sourceMappingURL=abg-nav_2.cjs.entry.js.map