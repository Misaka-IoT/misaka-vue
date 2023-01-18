import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ImageBoardView from '@/views/ImageBoardView.vue';
import AboutView from '@/views/AboutView.vue';
import AboutRaligunView from '@/views/AboutRaligunView.vue';
import AwardsView from '@/views/AwardsView.vue';
import DiscussView from '@/views/DiscussView.vue';
import LinksView from '@/views/LinksView.vue';
import IsmlView from '@/views/IsmlView.vue';
import ResourceView from '@/views/ResourceView.vue';
const InterpersonalRelationship = () =>
  import('@/views/InterpersonalRelationship.vue');
import Character from '@/views/CharactersView.vue';
import NotFound from '@/views/404.vue';
//<InterpersonalRelationship跳转>
const l0 = () => import('@/views/InterpersonalRelationship/MisakaMikoto.vue');
const l1 = () => import('@/views/InterpersonalRelationship/MisakaSisters.vue');
const l2 = () => import('@/views/InterpersonalRelationship/ShiraiKuroko.vue');
const l3 = () => import('@/views/InterpersonalRelationship/ShokuhouMisaki.vue');
const l4 = () => import('@/views/InterpersonalRelationship/Uiharukazari.vue');
const l5 = () => import('@/views/InterpersonalRelationship/SatenRuiko.vue');
const l6 = () => import('@/views/InterpersonalRelationship/MisakaMisuzu.vue');
const l7 = () => import('@/views/InterpersonalRelationship/KamijouTouma.vue');
const l8 = () => import('@/views/InterpersonalRelationship/FrendaSeivelun.vue');
//</InterpersonalRelationship跳转>

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
      path: '/awards',
      name: 'awards',
      component: AwardsView,
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
    {
      path: '/resource',
      name: 'resource',
      component: ResourceView,
    },

    {
      path: '/InterpersonalRelationship',
      name: 'InterpersonalRelationship',
      component: InterpersonalRelationship,
    },
    {
      path: '/Character',
      name: 'Character',
      component: Character,
    },
    //<InterpersonalRelationship跳转>
    {
      path: '/l0',
      name: 'l0',
      component: l0,
    },
    {
      path: '/l1',
      name: 'l1',
      component: l1,
    },
    {
      path: '/l2',
      name: 'l2',
      component: l2,
    },
    {
      path: '/l3',
      name: 'l3',
      component: l3,
    },
    {
      path: '/l4',
      name: 'l4',
      component: l4,
    },
    {
      path: '/l5',
      name: 'l5',
      component: l5,
    },
    {
      path: '/l6',
      name: 'l6',
      component: l6,
    },
    {
      path: '/l7',
      name: 'l7',
      component: l7,
    },
    {
      path: '/l8',
      name: 'l8',
      component: l8,
    },
    //</InterpersonalRelationship跳转>
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: NotFound,
    },
  ],
});

export default router;
