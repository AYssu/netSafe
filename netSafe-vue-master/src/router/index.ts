import { createRouter, createWebHistory } from 'vue-router'
import LoginLayoutView from '@/views/LoginLayout.vue'
import IndexLayoutView from '@/views/IndexLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginLayoutView
    },
    {
      name: "redirect",
      path: '/',
      redirect: { name: 'login' }
    },
    {
      path: '/index',
      name: 'index',
      component: IndexLayoutView,
      children: [
        {
          path: 'command',
          name: 'command',
          component: () => import('@/views/command/IndexLayout.vue')
        },
        {
          path: 'depart',
          name: 'depart',
          component: () => import('@/views/depart/IndexLayout.vue')
        },
        {
          path: 'notice',
          name: 'notice',
          component: () => import('@/views/notice/IndexLayout.vue')
        },
        {
          path: 'screen',
          name: 'screen',
          component: () => import('@/views/screen/IndexLayout.vue')
        },
        {
          name: "redirect2",
          path: '', // 空字符串代表父路由的根路径
          redirect: { name: 'command' }
        }
      ]
    }
  ]
})

export default router
