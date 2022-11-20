import showdown from 'showdown';

window.addEventListener('abgPost', (event) => {
  // get slug from url hash
  const slug = window.location.hash.split('/')[1];
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
