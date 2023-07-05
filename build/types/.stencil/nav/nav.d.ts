import { EventEmitter } from '../../stencil-public-runtime';
import { NavItem } from './nav.interface';
export declare class Nav {
  routes: NavItem[];
  abgNav: EventEmitter<any>;
  active: boolean;
  componentWillLoad(): void;
  render(): any;
}
