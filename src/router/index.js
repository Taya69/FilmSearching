import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage'

import NotFound from '../pages/404'


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },   
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
  ]
})