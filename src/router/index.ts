import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ImageBoardView from '@/views/ImageBoardView.vue';
import AboutView from '@/views/AboutView.vue';
import AboutRaligunView from '@/views/AboutRaligunView.vue';
import DiscussView from '@/views/DiscussView.vue';
import LinksView from '@/views/LinksView.vue';
import IsmlView from '@/views/IsmlView.vue';
import ResourceView from '@/views/ResourceView.vue';
import InterpersonalRelationship from '@/views/InterpersonalRelationship.vue';
import Character from '@/views/CharactersView.vue';
//<InterpersonalRelationship跳转>
  import l0 from "@/views/InterpersonalRelationship/0.vue"
  import l1 from "@/views/InterpersonalRelationship/1.vue"
  import l2 from "@/views/InterpersonalRelationship/2.vue"
  import l3 from "@/views/InterpersonalRelationship/3.vue"
  import l4 from "@/views/InterpersonalRelationship/4.vue"
  import l5 from "@/views/InterpersonalRelationship/5.vue"
  import l6 from "@/views/InterpersonalRelationship/6.vue"
  import l7 from "@/views/InterpersonalRelationship/7.vue"
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
    //</InterpersonalRelationship跳转>
  ],
});

export default router;
