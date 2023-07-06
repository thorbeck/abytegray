import { NotFound } from "./notfound/notfound.js";
import { Home } from "./home/home.js";
import { Articles } from "./articles/articles.js";
import { Article } from "./article/article.js";
import { About } from "./about/about.js";

// routes
export function fetchRoutes() {
  const routes = {
    generic: [Articles(), Article(), About()],
    home: Home(),
    notFound: NotFound(),
  };
  return routes;
}
