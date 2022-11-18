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

  render() {
    return (
      <ul>
        {this.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}
