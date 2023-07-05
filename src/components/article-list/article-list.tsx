import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

import { ArticleListItem } from './article-list.interface';

@Component({
  tag: 'abg-article-list',
  styleUrl: 'article-list.scss',
  shadow: true,
})
export class ArticleList {
  @Prop() showDescription: boolean = false;
  @Prop() items: ArticleListItem[] = [];

  @Event() abgArticleList: EventEmitter<any>;

  componentWillLoad() {
    this.abgArticleList.emit();
  }

  render() {
    return (
      <Host>
        <h1>Articles</h1>
        <ul>
          {this.items.map(article => (
            <li key={article.id}>
              <a href={`#article/${article.slug}`}>
                <h2>{article.title}</h2>
              </a>
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}
