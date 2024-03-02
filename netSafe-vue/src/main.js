import '@/assets/main.css'

import { createApp } from 'vue'
import elementPlus from 'element-plus'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'

import 'element-plus/dist/index.css'
import locale from 'element-plus/dist/locale/zh-cn.js'
import router from '@/router'

import App from './App.vue'

const pinia = createPinia()
const persist = createPersistedState()
//pinia使用持久化插件

const app = createApp(App)
app.use(router)
pinia.use(persist)
app.use(pinia)
app.use(elementPlus, { locale })
app.mount('#app')
