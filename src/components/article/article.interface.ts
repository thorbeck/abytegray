import { Cover } from './cover.interface';
import { Icon } from './icon.interface';

export interface ArticleItem {
  heading: string;
  content: string;
  created: string;
  updated: string;
  tags: string[];
  icon: Icon;
  cover: Cover;
  slug: string;
}
