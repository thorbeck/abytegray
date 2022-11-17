// CSS
import './css/reference.scss';
import './css/core.scss';
import './css/normalize.scss';

// CUSTOM ELEMENTS
import './elements/logo/logo';

// COMPONENTS
import { defineCustomElements } from '@abytegray/components/loader/index';
defineCustomElements();

// ASSETS
import './resources/android-chrome-192x192.png';
import './resources/android-chrome-512x512.png';
import './resources/browserconfig.xml';
import './resources/apple-touch-icon.png';
import './resources/favicon-32x32.png';
import './resources/favicon-16x16.png';
import './resources/favicon.ico';
import './resources/logo.svg';
import './resources/mstile-70x70.png';
import './resources/mstile-144x144.png';
import './resources/mstile-150x150.png';
import './resources/mstile-310x150.png';
import './resources/mstile-310x310.png';

// ROUTES
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
      markup: '<h1>Home</h1>',
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
