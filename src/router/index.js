import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//Layout组件
import Layout from '@/layout'
const routes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    // redirect: '',
    component: Layout,
  },
  {
    name: 'Page404',
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
