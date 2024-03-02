<script setup >
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

import { useUserInfoStore } from '@/stores/user.js'
const userInfoStore = useUserInfoStore();

 
const activeBar = ref({
  home: homeIcon,
  group: grgroupIcon,
  announcement: announcementIcon,
  my: myIcon,
});

const activeIconMap = ref({
  home: homeIcon_active,
  group: groupIcon_active,
  announcement: announcementIcon_active,
  my: myIcon_active,
})
import { onMounted } from 'vue'
onMounted(() => {
    activeBar.value.home = activeIconMap.value.home;
    
})

const changeIcon = (iconType) => {  
  activeBar.value.home = homeIcon;
  activeBar.value.group = grgroupIcon;
  activeBar.value.announcement = announcementIcon;
  activeBar.value.my = myIcon;

  if (activeIconMap.value.hasOwnProperty(iconType)) {  
    activeBar.value[iconType] = activeIconMap.value[iconType];  
  } else {  
    console.warn(`No icon found for type: ${iconType}`);  
  }  
};
</script>

<template>
  <div id="app">
    <header></header>
    <main>
      <RouterView></RouterView> 
    </main>
    <footer v-if="userInfoStore.info.id!=null">
      <router-link class="footer-item" to="/index" active-class="active" @click="changeIcon('home')">
        <img :src="activeBar.home" alt="主页">
        <span>首页</span>
      </router-link>
      <router-link class="footer-item" to="/group" active-class="active" @click="changeIcon('group')" >
        <img :src="activeBar.group" alt="群组">
        <span>群组</span>
      </router-link>
      <router-link class="footer-item" to="/personal" active-class="active" @click="changeIcon('announcement')">
        <img :src="activeBar.announcement" alt="公告">
        <span>公告</span>

      </router-link>
      <router-link class="footer-item" to="/portal" active-class="active" @click="changeIcon('my')">
        <img :src="activeBar.my" alt="我的">
        <span>我的</span>
      </router-link>
    </footer>
  </div>
</template>  
  
<style scoped>  /* 定义底部导航栏的样式 */
  a {
    text-decoration: none;
    color: #3a3737;
    font-size: 15px;
  }

  footer {

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 创建四列，每列宽度相等 */
    /* grid-gap: 10px; */
    /* 格子之间的间距 */
    background-color: #fff;
    /* 背景颜色 */
    color: #fff;
    /* 文本颜色 */
    padding: 15px 0px;
    /* 内边距 */
    text-align: center;
    /* 文本居中 */
    position: fixed;
    /* 固定位置 */
    bottom: 0;
    /* 固定在底部 */
    width: 100%;
    /* 宽度占满整个容器 */
    box-shadow: -2px -2px 5px #e7e7e7;

  }

  .footer-item {
    display: grid;
    place-items: center;

  }

  .footer-item > span {
    margin-top: 5px;
  }

  .footer-item>a {
    margin-top: 5px;
  }

  footer>.footer-item>img {
    width: 30px;
    height: 30px;
  }

  .active {
    color: #1385ff;
  }
</style>