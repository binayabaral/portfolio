// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import './scss/styles.scss';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faAdjust, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faGithub, faTwitter, faInstagram, faFacebook, faAdjust, faSignOutAlt);

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Nunito+Sans:wght@400;600&display=swap'
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);
}
