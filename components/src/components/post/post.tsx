import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

import { Icon } from './icon.interface';
import { Cover } from './cover.interface';

@Component({
  tag: 'abg-post',
  styleUrl: 'post.scss',
  shadow: true,
})
export class Post {
  @Prop() heading: string;
  @Prop() content: string;

  @Prop() created: string;
  @Prop() updated: string;
  @Prop() tags: string[] = [];
  @Prop() icon?: Icon;
  @Prop() cover?: Cover;
  @Prop() slug: string;

  @Event() abgPost: EventEmitter<string>;

  componentWillLoad() {
    this.abgPost.emit();
  }

  render() {
    const headerStyle = this.cover
      ? {
          backgroundImage: `url(${this.cover?.url})`,
          paddingTop: '200px',
        }
      : null;
    return (
      <Host>
        <article>
          <header style={headerStyle}>
            {this.icon ? <span>{this.icon.emoji}</span> : null}
            <h1>{this.heading}</h1>
          </header>
          <div innerHTML={this.content}></div>
        </article>
      </Host>
    );
  }
}
