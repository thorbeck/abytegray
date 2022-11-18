window.addEventListener(
  'abgRouter',
  (event) => {
    // set routes
    const routes = [
      {
        slug: 'post',
        title: 'post',
        markup: '<h1>Post</h1>',
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
      markup: '<abg-posts></abg-posts>',
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
