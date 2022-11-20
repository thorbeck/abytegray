import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'abg-tags',
  styleUrl: 'tags.scss',
  shadow: true,
})
export class Tags {
  @Prop() tags?: string[] = [];

  @Event() abgTags: EventEmitter;

  componentWillLoad() {
    this.abgTags.emit();
  }

  private handleUrlClick(e: Event, tag: string) {
    e.preventDefault();
    console.log(tag);
  }

  render() {
    return (
      <ul>
        {this.tags.map(tag => (
          <li key={tag}>
            <a href="" onClick={e => this.handleUrlClick(e, tag)}>
              {tag}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
