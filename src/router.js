import { fetchRoutes } from './fetch.js';

window.addEventListener(
  'abgRouter',
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
