import { useState } from './state.js';
import { fetchPost, fetchTags } from './fetch.js';
import showdown from 'showdown';

// tags component
window.addEventListener(
  'abgTags',
  async (event) => {
		// set up state
    const { get, set } = useState('tags');

    // Do we have tags?
    const tags = get();
    if (!tags) {
      tags = await fetchTags();
      set(tags);
    }
    event.target.tags = get();
  },
  { once: true }
);

// post component
window.addEventListener('abgPost', async (event) => {
  // get slug from url hash
  const slug = window.location.hash.split('/')[1];
  // set up state
  const { get, set } = useState(slug);

	const post = get();
  if (!post) {
		post = await fetchPost(slug);
		set(post);
  }

  // get post from json
  const posts = fetch('./posts.json');
  posts
    .then((response) => response.json())
    .then((data) => {
      const post = data.find((post) => post.slug === slug);
      // fetch markdown file
      const markdown = fetch(`./data/${post.slug}.md`);
      markdown
        .then((response) => response.text())
        .then((data) => {
          let converter = new showdown.Converter();
          event.target.heading = post.title;
          event.target.content = converter.makeHtml(data);
          event.target.created = post.created;
          event.target.updated = post.updated;
          event.target.tags = post.tags;
          event.target.icon = {
            type: post.icon.type,
            emoji: post.icon.emoji,
          };
          event.target.cover = {
            type: post.cover.type,
            url: post.cover.external.url,
          };
          event.target.slug = post.slug;
        });
    });
});
