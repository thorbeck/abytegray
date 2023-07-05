import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

import { NavItem } from './nav.interface';

@Component({
  tag: 'abg-nav',
  styleUrl: 'nav.scss',
  shadow: true,
})
export class Nav {
  @Prop() routes: NavItem[];
  @Event() abgNav: EventEmitter<any>;
  @State() active: boolean = false;

  componentWillLoad() {
    this.abgNav.emit();
  }

  render() {
    return (
      <nav>
        <ul>
          {this.routes.map(route => (
            <li key={route.slug}>
              <a href={`/#${route.slug}`} data-active={this.active}>
                {route.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
