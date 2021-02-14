import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '@/pages/Layout/Layout.vue';

import Home from '@/pages/Home.vue';
import SearchAddress from '@/plugins/SearchAddress.vue';

// import store from '@/store';

Vue.use(VueRouter);

// const requireAuth = () => (from, to, next) => {
//     if (store.getters['user/getLogin']) return next();
//     return next(`/login?returnPath=${from.path}`);
// };

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
