import { Component, Event, EventEmitter, h, Host, Prop, State, Watch } from '@stencil/core';

import { RouterItem } from './router.interface';

@Component({
  tag: 'abg-router',
  styleUrl: 'router.scss',
  shadow: false,
})
export class Router {
  @Prop() home: RouterItem;
  @Prop() notFound: RouterItem;
  @Prop() routes: RouterItem[];
  @State() markup: string;

  @Event() abgRouter: EventEmitter;

  // Handles routing based on hashroutes
  locationHandler = async () => {
    let location = window.location.hash.replace('#', '');

    // find page routes
    let route = location.length == 0 ? this.home : this.routes.find(item => item.slug === location) || this.notFound;

    // update based on route
    document.title = route.title;
    this.markup = route.markup;
  };

  // watch for prop changes
  @Watch('routes')
  routesHandler() {
    this.locationHandler();
  }

  componentWillLoad() {
    // Send event
    this.abgRouter.emit();
    // listen for hashevents and output to console
    window.addEventListener('hashchange', () => {
      this.locationHandler();
    });
  }

  render() {
    return <Host innerHTML={this.markup}></Host>;
  }
}
