window.addEventListener(
  'abgPosts',
  (event) => {
    const tags = fetch('./posts.json');
    tags
      .then((response) => response.json())
      .then((data) => {
        const posts = data.map((post) => {
          return {
            id: post.id,
            created: post.created,
            updated: post.updated,
            tags: post.tags,
            title: post.title,
            icon: post.icon,
            cover: post.cover,
            slug: post.slug,
          };
        });
        event.target.posts = posts;
      });
  },
  { once: true }
);
