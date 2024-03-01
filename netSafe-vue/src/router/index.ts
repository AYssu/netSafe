import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GroupListVue from '@/views/GroupList.vue'
import IndexPageVue from '@/views/IndexPage.vue'
import MainPortalVue from '@/views/MainPortal.vue'
import PersonalCenterVue from '@/views/PersonalCenter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[
        {
          path: '/IndexPage',
          name: 'IndexPage',
          component: IndexPageVue
        },
        {
          path: '/GroupList',
          name: 'GroupList',
          component: GroupListVue
        },
        {
          path: '/PersonalCenter',
          name: 'PersonalCenter',
          component: PersonalCenterVue
        },
        {
          path: '/MainPortal',
          name: 'MainPortal',
          component: MainPortalVue
        }
      ]
    },
  ]
})

export default router
