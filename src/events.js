import { useState } from "./state.js";
import { fetchPost, fetchTags, fetchPosts, fetchMarkdown, fetchRoutes } from "./fetch.js";

// tags component
window.addEventListener(
  "abgTags",
  async (event) => {
    // set up state
    const { get, set } = useState("tags");

    // Do we have tags?
    const tags = get() || (await fetchTags());
    set(tags);
    event.target.tags = get();
  },
  { once: true }
);

// article component
window.addEventListener("abgArticle", async (event) => {
  // get slug from url hash
  const slug = window.location.hash.split("/")[1];
  // set up state
  const { get, set } = useState(slug);

  const post = get() || (await fetchPost(slug));
  post.content = await fetchMarkdown(slug);
  set(post);
  event.target.item = get();
});

// article list component
window.addEventListener("abgArticleList", async (event) => {
  console.log("abgArticleList event");
  // state
  const { get, set } = useState("posts");
  const posts = get() || (await fetchPosts());
  set(posts);
  event.target.items = get();
});

// nav component
window.addEventListener("abgNav", (event) => {
  event.target.routes = fetchRoutes().generic.filter((route) => route.nav === true);
});
