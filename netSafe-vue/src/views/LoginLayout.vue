<script setup>
import { ref } from 'vue'
import police from '@/assets/images/pleace-man.png'
import '@/assets/css/LoginLayout.css'
import usericon from '@/assets/images/user.png'
import passwordicon from '@/assets/images/password.png'
import closeeye from '@/assets/images/close-eye-icon.png'
import openeye from '@/assets/images/open-eye-icon.png'
const loginDate = ref({
  username: '',
  password: ''
})


const eyeInfo = ref(true)
import { useRouter } from 'vue-router'
const router = useRouter()
import { ElMessage } from 'element-plus'
import { useUserInfoStore } from '@/stores/user.js'
const userInfoStore = useUserInfoStore()
function validateLoginData() {
  const { username, password } = loginDate.value

  // 验证用户名和密码
  const isValid = () => {
    // 假设用户名长度至少为 3，密码长度至少为 6
    if (username.length < 3) {
      return false
    }
    if (password.length < 6) {
      return false
    }
    // 你可以在这里添加更多的验证逻辑，如正则表达式检查等
    return true
  }

  if (!isValid()) {
    // 验证失败的处理逻辑
    ElMessage.error('用户名或密码不合法')
    return false
  } else {
    return true
  }
}

import { onMounted } from 'vue'
onMounted(() => {
  if (userInfoStore.info.id != null) {
    //用户已登录
    router.push('/index');
  }
})
const login = () => {
  if (validateLoginData()) {
    userInfoStore.info.id = 1
    userInfoStore.info.username = loginDate.value.username
    ElMessage.success('登录成功')
    router.push('/index')
  }
}


</script>

<template>
  <div class="login-main">
    <div class="topbar">
      <div class="topbar-left">
        <span>你好,</span>
        <span>欢迎登录！</span>
        <span class="hint">使用手机号或者姓名登录</span>
      </div>
      <div class="topbar-right">
        <img :src="police" alt="警察标志" />
      </div>
    </div>
    <form class="login-form" action="/" method="post" :model="loginDate">
      <div class="login-form-content">
        <div class="item-input">
          <div class="input-top-box">
            <img :src="usericon" alt="" />
            <span>账号</span>
          </div>
          <div class="input-bottom-box">
            <input autocomplete="off" type="text" name="username" id="username" placeholder="请输入姓名或者手机号码登录"
              v-model="loginDate.username" />
          </div>
        </div>
        <div class="item-input">
          <div class="input-top-box">
            <img :src="passwordicon" alt="" />
            <span>密码</span>
          </div>
          <div class="input-bottom-box">
            <input autocomplete="off" :type="eyeInfo ? 'password' : 'text'" name="password" id="password"
              placeholder="请输入你的密码" v-model="loginDate.password" />
            <img @click="eyeInfo = !eyeInfo" :src="eyeInfo ? closeeye : openeye" alt="图标" />
          </div>
        </div>
      </div>
      <div class="login-forgot"><input type="checkbox" name="forget" /><span>记住密码</span></div>
      <div class="login-btn-box">
        <input type="button" class="login-btn" value="登录" @click="login" />
        <input type="button" class="register-btn" value="注册" @click="router.push('/register')" />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
