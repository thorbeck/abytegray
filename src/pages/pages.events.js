import { fetchRoutes } from "./pages.fetch.js";

// router events
window.addEventListener(
  "abgRouter",
  (event) => {
    // set routes
    const routes = fetchRoutes();
    // set props
    event.target.home = routes.home;
    event.target.notFound = routes.notFound;
    event.target.routes = routes.generic;
  },
  { once: true }
);

// nav events
window.addEventListener("abgNav", (event) => {
  event.target.routes = fetchRoutes().generic.filter((route) => route.nav === true);
});
