<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserInfoStore } from '@/stores/user.js'
const userInfoStore = useUserInfoStore()
import { useRouter } from 'vue-router'
const router = useRouter()

import { useStore } from 'vuex'
const store = useStore()
const exitLogin = () => {
  ElMessage.success('退出成功')
  ElMessage.error('请重新登录!')
  userInfoStore.removeInfo()
  store.commit('set', 1)
  router.push('/')
}

const demo = () => {
  console.log(store.state.page)
}
</script>

<template>
  <el-button @click="exitLogin()" type="danger">Danger</el-button>
  <el-button @click="demo()" type="primary">aaa </el-button>
</template>
