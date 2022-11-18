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

// EVENTS
import './events/posts';
import './events/router';
import './events/tags';
