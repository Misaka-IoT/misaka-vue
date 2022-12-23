import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/material-you/main.scss';

import VueLazyLoad from 'vue3-lazyload';
const app = createApp(App);
app.use(VueLazyLoad, {
  // options...
});
app.use(createPinia());
app.use(router);

app.mount('#app');
