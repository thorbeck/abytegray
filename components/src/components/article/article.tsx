import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

import { ArticleItem } from './article.interface';

@Component({
  tag: 'abg-article',
  styleUrl: 'article.scss',
  shadow: true,
})
export class Article {
  @Prop() item: ArticleItem;

  @Event() abgArticle: EventEmitter<string>;

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
    return (
      <Host>
        <article>
          <header style={headerStyle}>
            {this.item.icon ? <span>{this.item.icon.emoji}</span> : null}
            <h1>{this.item.heading}</h1>
          </header>
          <div innerHTML={this.item.content}></div>
        </article>
      </Host>
    );
  }
}
