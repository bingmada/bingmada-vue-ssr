/*
 * @Author: liyingda
 * @Date: 2021-12-16 13:58:36
 * @LastEditors: liyingda
 * @LastEditTime: 2021-12-16 16:03:12
 */
import Vue from 'vue'
import Router from 'vue-router';
import Home from '@/views/home';

Vue.use(Router);

export const createRouter = () => {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about')
      },
      {
        path: '/posts',
        name: 'Posts',
        component: () => import('@/views/posts')
      },
      {
          path: '*',
          name: 'error',
          component: () => import('@/views/404')
      }
    ]
  })
  return router;
}