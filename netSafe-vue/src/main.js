import '@/assets/main.css'

import { createApp } from 'vue'
import elementPlus from 'element-plus'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'

import 'element-plus/dist/index.css'
import locale from 'element-plus/dist/locale/zh-cn.js'
import router from '@/router'

import App from './App.vue'

import { createStore } from 'vuex'
import vuexPersistedState from 'vuex-persistedstate'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      page: 1,
      history: 1
    }
  },
  mutations: {
    set(state, page) {
      state.page = page
    }
  },
  plugins: [
    vuexPersistedState({
      storage: window.sessionStorage // 使用 sessionStorage 而不是 localStorage
    })
  ]
})

const pinia = createPinia()
const persist = createPersistedState()
//pinia使用持久化插件

const app = createApp(App)
app.use(store)
app.use(router)
pinia.use(persist)
app.use(pinia)
app.use(elementPlus, { locale })
app.mount('#app')
