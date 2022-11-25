window.addEventListener(
  'abgRouter',
  (event) => {
    // set routes
    const routes = [
      {
        slug: 'article',
        title: 'article',
        markup: '<abg-article></abg-article>',
      },
      {
        slug: 'about',
        title: 'About',
        markup: '<h1>About</h1>',
      },
    ];
    // set props
    event.target.home = {
      slug: '/',
      title: 'Home',
      markup: '<abg-article-list></abg-article-list>',
    };
    event.target.notFound = {
      slug: '404',
      title: 'Page Not Found',
      markup: '<h1>404</h1>',
    };
    event.target.routes = routes;
  },
  { once: true }
);
