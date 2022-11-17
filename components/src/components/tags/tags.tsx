import { Component, h, Host, Prop } from '@stencil/core';

import { TagsItem } from './tags.interface';

@Component({
  tag: 'abg-tags',
  styleUrl: 'tags.scss',
  shadow: true,
})
export class Tags {
  @Prop() items: TagsItem[];

  componentWillLoad() {
    const tags = fetch('./posts.json');

    tags
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  render() {
    return <Host></Host>;
  }
}
