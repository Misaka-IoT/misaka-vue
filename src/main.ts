import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import '@/styles/main.scss';

const getAndSetDefaultTheme = () => {
  const value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  localStorage.setItem('settings.theme', value);
  return value;
}
const settings = {
  theme:
    localStorage.getItem('settings.theme') || getAndSetDefaultTheme(),
};
document.documentElement.setAttribute('data-theme', settings.theme);

import VueLazyLoad from 'vue3-lazyload';
const app = createApp(App);
app.use(VueLazyLoad, {
  // options...
});
app.use(createPinia());
app.use(router);

app.mount('#app');
