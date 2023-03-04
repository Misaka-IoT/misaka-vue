import { createRouter, createWebHistory } from 'vue-router';
//<InterpersonalRelationship跳转>
const l0 = () => import('@/views/InterpersonalRelationship/MisakaMikoto.vue');
const l1 = () => import('@/views/InterpersonalRelationship/MisakaSisters.vue');
const l2 = () => import('@/views/InterpersonalRelationship/ShiraiKuroko.vue');
const l3 = () => import('@/views/InterpersonalRelationship/ShokuhouMisaki.vue');
const l4 = () => import('@/views/InterpersonalRelationship/UiharuKazari.vue');
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
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/imgboard',
      name: 'imgboard',
      component: () => import('@/views/ImageBoardView.vue'),
    },
    {
      path: '/about',
      name: 'AboutView',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/aboutraligun',
      name: 'aboutraligun',
      component: () => import('@/views/AboutRaligunView.vue'),
    },
    {
      path: '/awards',
      name: 'awards',
      component: () => import('@/views/AwardsView.vue'),
    },
    {
      path: '/discuss',
      name: 'discuss',
      component: () => import('@/views/DiscussView.vue'),
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('@/views/LinksView.vue'),
    },
    {
      path: '/resource',
      name: 'resource',
      component: () => import('@/views/ResourceView.vue'),
    },

    {
      path: '/InterpersonalRelationship',
      name: 'InterpersonalRelationship',
      component: () => import('@/views/InterpersonalRelationship.vue'),
    },
    {
      path: '/relationship',
      component: () => import('@/views/RelationshipView.vue'),
    },
    {
      path: '/donate',
      component: () => import('@/views/DonateView.vue')
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
      component: () => import('@/views/404View.vue'),
    },
  ],
});

export default router;
