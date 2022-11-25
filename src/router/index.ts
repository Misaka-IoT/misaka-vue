import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ImageBoardView from '@/views/ImageBoardView.vue';
import AboutView from '@/views/AboutView.vue';
import AboutRaligunView from '@/views/AboutRaligunView.vue';
import DiscussView from '@/views/DiscussView.vue';
import LinksView from '@/views/LinksView.vue';
import IsmlView from '@/views/IsmlView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/imgboard',
      name: 'imgboard',
      component: ImageBoardView,
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView,
    },
    {
      path: '/aboutraligun',
      name: 'aboutraligun',
      component: AboutRaligunView,
    },
    {
      path: '/isml',
      name: 'isml',
      component: IsmlView,
    },
    {
      path: '/discuss',
      name: 'discuss',
      component: DiscussView,
    },
    {
      path: '/links',
      name: 'links',
      component: LinksView,
    },
  ],
});

export default router;
