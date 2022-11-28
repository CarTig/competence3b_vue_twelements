import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import Accueil from '../views/Accueil.vue';
import Programmes from '../views/Programmes.vue';
import Apropos from '../views/Apropos.vue';

const routes = [
  
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Programmes',
    name: 'Programmes',
    component: Programmes,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Programmes.vue')
  },

  {
    path: '/Apropos',
    name: 'Apropos',
    component: Apropos,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Apropos.vue')
  },
  
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
