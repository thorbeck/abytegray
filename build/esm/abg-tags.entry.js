import { r as registerInstance, c as createEvent, h } from './index-b508fa74.js';

const tagsCss = ":host ul{display:flex;list-style:none;margin:0;padding:0}:host a{color:var(--color-orange-mike)}";

const Tags = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.abgTags = createEvent(this, "abgTags", 7);
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
};
Tags.style = tagsCss;

export { Tags as abg_tags };

//# sourceMappingURL=abg-tags.entry.js.map