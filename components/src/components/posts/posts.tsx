import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

import { PostsItem } from './posts.interface';

@Component({
  tag: 'abg-posts',
  styleUrl: 'posts.scss',
  shadow: true,
})
export class Posts {
  @Prop() showDescription: boolean = false;
  @Prop() posts: PostsItem[] = [];

  @Event() abgPosts: EventEmitter<any>;

  componentWillLoad() {
    this.abgPosts.emit();
  }

  render() {
    return (
      <Host>
        <h1>Posts</h1>
        <ul>
          {this.posts.map(post => (
            <li key={post.id}>
              <a href={`#post/${post.slug}`}>
                <h2>{post.title}</h2>
              </a>
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}
