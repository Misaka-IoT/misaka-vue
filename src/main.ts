import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import '@/styles/main.scss';
const ccss = localStorage.getItem('css');
switch (
  ccss //css切换器
) {
  case null:
    document.documentElement.setAttribute('data-theme', 'main');
    break;
  case 'main':
    document.documentElement.setAttribute('data-theme', 'main');
    break;
  case 'black':
    document.documentElement.setAttribute('data-theme', 'black');
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
