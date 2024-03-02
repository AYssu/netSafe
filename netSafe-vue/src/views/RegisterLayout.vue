<script setup>
import { ref } from 'vue'
import '@/assets/css/RegisterLayout.css'
import usericon from '@/assets/images/user.png'
import passwordicon from '@/assets/images/password.png'
import closeeye from '@/assets/images/close-eye-icon.png'
import openeye from '@/assets/images/open-eye-icon.png'
const loginDate = ref({
  username: '',
  password: ''
})
</script>

<template>
  <div class="register-main">
    <div class="topbar">
      <span>用户注册</span>
    </div>

    <div class="form-content">
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
          <input autocomplete="off" type="text" name="password" id="password" placeholder="请输入你的密码"
            v-model="loginDate.password" />
        </div>
      </div>
      <div class="item-input">
        <div class="input-top-box">
          <img :src="passwordicon" alt="" />
          <span>密码</span>
        </div>
        <div class="input-bottom-box">
          <input autocomplete="off" type="text" name="password" id="password" placeholder="请输入你的密码"
            v-model="loginDate.password" />
        </div>
      </div>
      <div class="item-input">
        <div class="input-top-box">
          <img :src="passwordicon" alt="" />
          <span>密码</span>
        </div>
        <div class="input-bottom-box">
          <input autocomplete="off" type="text" name="password" id="password" placeholder="请输入你的密码"
            v-model="loginDate.password" />
        </div>
      </div>
      <div class="item-input">
        <div class="input-top-box">
          <img :src="passwordicon" alt="" />
          <span>密码</span>
        </div>
        <div class="input-bottom-box">
          <input autocomplete="off" type="text" name="password" id="password" placeholder="请输入你的密码"
            v-model="loginDate.password" />
        </div>
      </div>
    </div>
    <div class="login-btn-box">
      <input type="button" class="register-btn" value="注册" @click="login" />
      <input type="button" class="login-btn" value="账号登陆" @click="router.push('/register')" />
    </div>
  </div>
</template>
