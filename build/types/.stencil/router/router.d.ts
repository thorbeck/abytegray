import { EventEmitter } from '../../stencil-public-runtime';
import { RouterItem } from './router.interface';
export declare class Router {
  home: RouterItem;
  notFound: RouterItem;
  routes: RouterItem[];
  markup: string;
  abgRouter: EventEmitter;
  locationHandler: () => Promise<void>;
  routesHandler(): void;
  componentWillLoad(): void;
  render(): any;
}
