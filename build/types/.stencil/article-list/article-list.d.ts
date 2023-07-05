import { EventEmitter } from '../../stencil-public-runtime';
import { ArticleListItem } from './article-list.interface';
export declare class ArticleList {
  showDescription: boolean;
  items: ArticleListItem[];
  abgArticleList: EventEmitter<any>;
  componentWillLoad(): void;
  render(): any;
}
