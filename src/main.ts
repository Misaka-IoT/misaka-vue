import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

var ccss=getCookie("css");
var css;
switch(ccss)//css切换器
{
  case "null":
    css=import('@/styles/main.scss');
    break;
  case "main":
    css=import('@/styles/main.scss');
    break;
  case "black":
    css=import('@/styles/black.scss');
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

function SetCookie(name: String, value: string) {//设置Cookie
  document.cookie = name + '=' + value;
}
function getCookie(name: string) {//读取Cookie
  var arr = document.cookie.match(
    new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  );
  if (arr != null) {
    return arr[2];
  } else {
    return 'null';
  }
}