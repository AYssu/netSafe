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

const activeBar = ref({
  home: homeIcon,
  group: grgroupIcon,
  announcement: announcementIcon,
  my: myIcon
})

const activeIconMap = ref({
  home: homeIcon_active,
  group: groupIcon_active,
  announcement: announcementIcon_active,
  my: myIcon_active
})
import { onMounted } from 'vue'
onMounted(() => {
  activeBar.value.home = activeIconMap.value.home
})

const changeIcon = (iconType) => {
  activeBar.value.home = homeIcon
  activeBar.value.group = grgroupIcon
  activeBar.value.announcement = announcementIcon
  activeBar.value.my = myIcon

  if (activeIconMap.value.hasOwnProperty(iconType)) {
    activeBar.value[iconType] = activeIconMap.value[iconType]
  } else {
    console.warn(`No icon found for type: ${iconType}`)
  }
}
</script>

<template>
  <div id="app">
    <header></header>
    <main>
      <RouterView></RouterView>
    </main>
    <footer v-if="userInfoStore.info.id != null">
      <router-link
        class="footer-item"
        to="/index"
        active-class="active"
        @click="changeIcon('home')"
      >
        <img :src="activeBar.home" alt="主页" />
        <span>首页</span>
      </router-link>
      <router-link
        class="footer-item"
        to="/group"
        active-class="active"
        @click="changeIcon('group')"
      >
        <img :src="activeBar.group" alt="群组" />
        <span>群组</span>
      </router-link>
      <router-link
        class="footer-item"
        to="/personal"
        active-class="active"
        @click="changeIcon('announcement')"
      >
        <img :src="activeBar.announcement" alt="公告" />
        <span>公告</span>
      </router-link>
      <router-link class="footer-item" to="/portal" active-class="active" @click="changeIcon('my')">
        <img :src="activeBar.my" alt="我的" />
        <span>我的</span>
      </router-link>
    </footer>
  </div>
</template>
