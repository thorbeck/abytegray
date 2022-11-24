import showdown from 'showdown';

// tags
export async function fetchTags() {
  const posts = await fetch('./posts.json');
  const data = await posts.json();
  return [...new Set(data.flatMap((post) => post.tags))].sort();
}

// article
export async function fetchPost(slug) {
  const posts = await fetch('./posts.json');
  const data = await posts.json();
  const post = data.find((post) => post.slug === slug);
  return {
    heading: post.title,
    created: post.created,
    updated: post.updated,
    tags: post.tags,
    icon: post.icon,
    cover: post.cover,
    slug: post.slug,
  };
}

// markdown
export async function fetchMarkdown(slug) {
  // load markdown and convert to html
  const markdown = await fetch(`./data/${slug}.md`);
  const data = await markdown.text();
  let converter = new showdown.Converter();
  return converter.makeHtml(data);
}

// article list
export async function fetchPosts() {
  const posts = await fetch('./posts.json');
  const data = await posts.json();
  return data.map((post) => {
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
}
