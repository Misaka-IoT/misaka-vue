import { createRouter, createWebHistory } from 'vue-router';

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
      path: '/aboutrailgun',
      name: 'aboutrailgun',
      component: () => import('@/views/AboutRailgunView.vue'),
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
      component: () => import('@/views/DonateView.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import('@/views/404View.vue'),
    },
    {
      path: '/PutDanmu',
      name: 'PutDanmu',
      component: () => import('@/views/PutDanmu.vue'),
    },
    {
      path: '/MisakaWrite',
      name: 'MisakaWrite',
      component: () => import('@/views/MisakaWrite.vue'),
    },
  ],
});

export default router;
