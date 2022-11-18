window.addEventListener(
  'abgTags',
  (event) => {
    const tags = fetch('./posts.json');
    tags
      .then((response) => response.json())
      .then((data) => {
        // Create a new sorted and unique array of tags
        const tags = [...new Set(data.flatMap((post) => post.tags))].sort();
        event.target.tags = tags;
      });
  },
  { once: true }
);
