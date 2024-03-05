<script setup>
import { ref } from 'vue'
import police from '@/assets/images/pleace-man.png'
import '@/assets/css/MainProtal.css'
import toright from '@/assets/images/youjiantou.png'
import createIcon from '@/assets/images/create.png'
import c2 from '@/assets/images/mygroup.png'
import mine2 from '@/assets/images/mine2.png'

import mine1 from '@/assets/images/mine1.png'
import backicon from '@/assets/images/back_icon.png'
import { useUserInfoStore } from '@/stores/user.js'
const userInfoStore = useUserInfoStore()
const firstName = ref('')
firstName.value = userInfoStore.info.username.charAt(0).toUpperCase();

import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
import {useTokenStores} from '@/stores/token.js'
const TokenStores = useTokenStores();
import { useStore } from 'vuex'
const store = useStore()
const exitLogin = () => {
  ElMessage.success('退出成功')
  userInfoStore.removeInfo()
  TokenStores.removeToken();
  store.commit('set', 1)
  router.push('/')
}
</script>

<template>

  <div class="main-main">
    <div class="topbar">
      <div class="topbar-left">
       <div class="topbar-right-img">
        <span>{{firstName}}</span>
       </div>
       <div class="topbar-content-item">
        <span class="username">{{userInfoStore.info.username }}</span>
        <span class="phone">电话:{{userInfoStore.info.phone}}</span>
       </div>
      </div>
      <div class="topbar-right">
        <img :src="police" alt="警察标志" />
      </div>
    </div>
    <div class="content">
      <div class="catagory-title">
          <span>群管理</span>
      </div>
      <div class="catagory-content">
        <div class="content-left">
          <span>建群</span>
          <img class="right-img" :src="toright" alt="右箭头">
          <img class="icon" :src="createIcon" alt="创建">

        </div>
        <div class="content-right">
          <span>我的群</span>
          <img class="right-img" :src="toright" alt="右箭头">
          <img class="icon" :src="c2" alt="我的群">

        </div>
      </div>
    </div>

    <div class="item-funtion">
      <div class="item">
        <img :src="mine2" alt="我的线索">
        <span >我的好友</span>
        <img  :src="backicon" alt="">
      </div>
      <div class="item">
        <img :src="mine1" alt="更新">
        <span >检查更新</span>
        <img  :src="backicon" alt="">
      </div>
    </div>

    <div class="footer">
      <input type="button" value="退出登录" @click="exitLogin()">
    </div>
   
  </div>


</template>

<style scoped></style>
