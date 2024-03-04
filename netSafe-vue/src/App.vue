<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'

import homeIcon from '@/assets/images/home_ina.png'
import grgroupIcon from '@/assets/images/ina_qun.png'
import announcementIcon from '@/assets/images/mes_ina.png'
import myIcon from '@/assets/images/my_ina.png'

import homeIcon_active from '@/assets/images/home_act.png'
import groupIcon_active from '@/assets/images/ac_qun.png'
import announcementIcon_active from '@/assets/images/mes_act.png'
import myIcon_active from '@/assets/images/my_act.png'

import '@/assets/css/App.css'
import { useUserInfoStore } from '@/stores/user.js'
const userInfoStore = useUserInfoStore()
import { useStore } from 'vuex'
const store = useStore()


const changeIcon = (page) => {
  store.commit('set', page)
}
</script>

<template>
  <div id="app">
    <header></header>
    <main>
      <RouterView></RouterView>
    </main>
    <footer v-if="userInfoStore.info.id != null">
      <router-link class="footer-item" to="/index" active-class="active" @click="changeIcon('1')">
        <img :src="store.state.page == 1 ? homeIcon_active : homeIcon" alt="主页" />
        <span>首页</span>
      </router-link>
      <router-link class="footer-item" to="/group" active-class="active" @click="changeIcon('2')">
        <img :src="store.state.page == 2 ? groupIcon_active : grgroupIcon" alt="群组" />
        <span>群组</span>
      </router-link>
      <router-link
        class="footer-item"
        to="/personal"
        active-class="active"
        @click="changeIcon('3')"
      >
        <img :src="store.state.page == 3 ? announcementIcon_active : announcementIcon" alt="公告" />
        <span>公告</span>
      </router-link>
      <router-link class="footer-item" to="/portal" active-class="active" @click="changeIcon('4')">
        <img :src="store.state.page == 4 ? myIcon_active : myIcon" alt="我的" />
        <span>我的</span>
      </router-link>
    </footer>
  </div>
</template>
