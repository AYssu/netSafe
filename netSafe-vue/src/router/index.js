import { createRouter, createWebHistory } from 'vue-router'
import IndexPageVue from '@/views/Main/IndexPage.vue'
import GroupListVue from '@/views/Main/GroupList.vue'
import PersonalCenterVue from '@/views/Main/PersonalCenter.vue'
import MainPortalVue from '@/views/Main/MainPortal.vue'

import LoginLayoutVue from '@/views/LoginLayout.vue'
import RegisterLayoutVue from '@/views/RegisterLayout.vue'
const routes = [
  { path: '/', name: 'Login', component: LoginLayoutVue },
  { path: '/register', name: 'Register', component: RegisterLayoutVue },
  { path: '/index', name: 'IndexPage', component: IndexPageVue },
  { path: '/group', name: 'GroupList', component: GroupListVue },
  { path: '/personal', name: 'PersonalCenter', component: PersonalCenterVue },
  { path: '/portal', name: 'MainPortal', component: MainPortalVue }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes // 简写，相当于 routes: routes
})

export default router
