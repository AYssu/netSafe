<script setup>
import '@/assets/view/LoginLayout.less'
import yzm from '@/assets/code.png'
import axios from 'axios'
import router from '@/router';
const login = () => {
    // const result = axios.post('/api/file/fileupload', { mail: "2997036064" });
    // console.log(result);
    router.push('/register')
}
</script>
<template>
    <div class="login-layout">
        <div class="center-card">

            <div class="center-card-left"></div>
            <div class="center-card-right">
                <div class="center-card-right-top">
                </div>
                <div class="center-card-right-input">
                    <div class="item">
                        <input type="text" placeholder="请输入账号">
                    </div>
                    <div class="item">
                        <input type="text" placeholder="请输入密码">
                    </div>
                    <div class="item">
                        <input type="text" placeholder="请输入验证码">
                        <img :src="yzm" alt="验证码">
                    </div>
                    
                </div>

                <div class="center-card-bottom">
                    <div class="remermber">
                        <input type="checkbox" id="remember" name="remember" value="remember-me">
                        <label for="remember">记住密码</label>
                    </div>
                    <input type="button" class="login" value="登录" @click="login">
                    <input type="button" class="register" value="注册" @click="login">
                </div>
            </div>
        </div>
    </div>
</template>