<script setup>
import { ref } from 'vue'
import '@/assets/css/RegisterLayout.css'
import usericon from '@/assets/images/user.png'
import passwordicon from '@/assets/images/password.png'
import group from '@/assets/images/group.png'
import phone from '@/assets/images/phone.png'
import checkNumber from '@/assets/images/check-number.png'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const registerDate = ref({
  username: '',
  password: '',
  phone: '',
  group: '',
  checkNumber: ''
})

const sendMessage = ref({
  send: false,
  text: '再次发送(60s)',
  time: 60
})

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
const sendMessageClick = () => {
  // ...
  //前面为发送验证码逻辑

  if (!sendMessage.value.send) {
    ElMessage.success('发送成功')
    sendMessage.value.send = true
    sendMessage.value.time = 60
    const timer = setInterval(() => {
      sendMessage.value.text = '再次发送(' + sendMessage.value.time + 's)'
      sendMessage.value.time -= 1
      if (sendMessage.value.time == 0) {
        sendMessage.value.send = false
        sendMessage.value.text = '再次发送'
        sendMessage.value.time = 60
        clearInterval(timer)
      }
    }, 1000)
  } else {
    ElMessage.error('等待' + sendMessage.value.time + 's后重试!')
  }
}
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
          <input autocomplete="off" type="text" name="username" id="username" placeholder="请输入姓名"
            v-model="registerDate.username" />
        </div>
      </div>
      <div class="item-input">
        <div class="input-top-box">
          <img :src="group" alt="" />
          <span>组织</span>
        </div>
        <div class="input-bottom-box">
          <!-- <input autocomplete="off" type="text" name="password" id="password" placeholder="请输入你的密码"
            v-model="registerDate.group" /> -->
          <el-select v-model="value" placeholder="请选择你的公司" style="width: 100%; border: none; box-shadow: none">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>
      <div class="item-input">
        <div class="input-top-box">
          <img :src="phone" alt="" />
          <span>手机号</span>
        </div>
        <div class="input-bottom-box">
          <input autocomplete="off" type="text" name="password" id="password" placeholder="请输入你的手机号"
            v-model="registerDate.phone" />
        </div>
      </div>
      <div class="item-input">
        <div class="input-top-box">
          <img :src="checkNumber" alt="" />
          <span>短信验证码</span>
        </div>
        <div class="input-bottom-box">
          <input autocomplete="off" type="text" name="password" id="password" placeholder="请输入验证码"
            v-model="registerDate.password" />
          <span @click="sendMessageClick()" :style="!sendMessage.send ? 'color: #0685ff;' : 'color:grey'">{{
            sendMessage.send ? sendMessage.text : '发送验证码' }}</span>
        </div>
      </div>
      <div class="item-input">
        <div class="input-top-box">
          <img :src="passwordicon" alt="" />
          <span>密码</span>
        </div>
        <div class="input-bottom-box">
          <input autocomplete="off" type="text" name="password" id="password" placeholder="请输入你的密码"
            v-model="registerDate.password" />
        </div>
      </div>
    </div>
    <div class="login-btn-box">
      <input type="button" class="register-btn" value="注册" @click="login" />
      <input type="button" class="login-btn" value="账号登陆" @click="router.push('/')" />
    </div>
    <div class="footer">
      <input type="checkbox" name="forget" />
      <span>我已阅读并同意</span>
      <a href="#" @click="noti">《指挥指挥APP用户注册协议》</a>
    </div>
  </div>
</template>
