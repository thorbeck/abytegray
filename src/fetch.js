import showdown from "showdown";

// tags
export async function fetchTags() {
  const posts = await fetch("./content/index.json");
  const data = await posts.json();
  return [...new Set(data.flatMap((post) => post.tags))].sort();
}

// article
export async function fetchPost(slug) {
  const posts = await fetch("./content/index.json");
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
  const markdown = await fetch(`./content/${slug}.md`);
  const data = await markdown.text();
  let converter = new showdown.Converter();
  return converter.makeHtml(data);
}

// article list
export async function fetchPosts() {
  const posts = await fetch("./content/index.json");
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

// routes
export function fetchRoutes() {
  const routes = {
    generic: [
      {
        slug: "articles",
        title: "articles",
        nav: true,
        markup:
          "<abg-layout-list><h1>Articles</h1><abg-tags></abg-tags><abg-article-list></abg-article-list></abg-layout-list>",
      },
      {
        slug: "article",
        title: "article",
        nav: false,
        markup: "<abg-layout-page><abg-article></abg-article></abg-layout-page>",
      },
      {
        slug: "about",
        title: "About",
        nav: true,
        markup: "<abg-layout-page><h1>About</h1></abg-layout-page>",
      },
    ],
    home: {
      slug: "/",
      title: "Home",
      markup: "<abg-layout-page><h1>Home</h1></abg-layout-page>",
    },
    notFound: {
      slug: "404",
      title: "Page Not Found",
      markup: "<h1>404</h1>",
    },
  };
  return routes;
}
