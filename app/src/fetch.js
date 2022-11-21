// tags
export async function fetchTags() {
  const posts = await fetch('./posts.json');
  const data = await posts.json();
  return [...new Set(data.flatMap((post) => post.tags))].sort();
}

// post
export async function fetchPost(slug) {
  const posts = await fetch('./posts.json');
  const data = await posts.json();
	const post = data.find((post) => post.slug === slug);
}
