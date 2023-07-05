import { EventEmitter } from '../../stencil-public-runtime';
import { ArticleItem } from './article.interface';
export declare class Article {
  item: ArticleItem;
  abgArticle: EventEmitter<string>;
  componentWillLoad(): void;
  render(): any;
}
