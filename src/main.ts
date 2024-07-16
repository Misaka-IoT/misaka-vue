import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import '@/styles/main.scss';
import Chat from 'vue3-beautiful-chat';
let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)? '_p' :'_w'
const getAndSetDefaultTheme = () => {
  const value = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  localStorage.setItem('settings.theme', value);
  return value;
};
const settings = {
  theme: localStorage.getItem('settings.theme') || getAndSetDefaultTheme(),
};
document.documentElement.setAttribute('data-theme', settings.theme+flag);

import VueLazyLoad from 'vue3-lazyload';
const app = createApp(App);

app.use(ElementPlus);

app.use(VueLazyLoad, {
  // options...
});
app.use(createPinia());
app.use(router);
app.use(Chat);
app.mount('#app');
