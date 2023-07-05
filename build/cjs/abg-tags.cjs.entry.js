'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eadb5464.js');

const tagsCss = ":host ul{display:flex;list-style:none;margin:0;padding:0}:host a{color:var(--color-orange-mike)}";

const Tags = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.abgTags = index.createEvent(this, "abgTags", 7);
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
    return (index.h("ul", null, this.tags.map(tag => (index.h("li", { key: tag }, index.h("a", { href: "", onClick: e => this.handleUrlClick(e, tag) }, tag))))));
  }
};
Tags.style = tagsCss;

exports.abg_tags = Tags;

//# sourceMappingURL=abg-tags.cjs.entry.js.map