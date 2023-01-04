import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const ccss = localStorage.getItem('css');
let css;
switch (
  ccss //css切换器
) {
  case null:
    css = import('@/styles/main.scss');
    break;
  case 'main':
    css = import('@/styles/main.scss');
    break;
  case 'black':
    css = import('@/styles/black.scss');
    break;
}

import './assets/main.scss';

import VueLazyLoad from 'vue3-lazyload';
const app = createApp(App);
app.use(VueLazyLoad, {
  // options...
});
app.use(createPinia());
app.use(router);

app.mount('#app');
