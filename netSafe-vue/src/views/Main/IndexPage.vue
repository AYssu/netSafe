<script setup lang="ts">
import homePersion from '@/assets/images/home_person.png'
import tongz from '@/assets/images/tongz.png'
import back from '@/assets/images/back_icon.png'
</script>

<template>
  <div class="topbar">
    <img :src="homePersion" alt="">
    <span>欢迎您，阿夜</span>
  </div>
  <div class="msgBox">
    <div class="msg">
      <div class="leftBox">
        <img :src="tongz" alt="通知">
      </div>
      <div class="centerBox">
        <span class="msgTit">阿丽给你发送了一条消息</span>
        <span class="time">2019-01-01 12:00:00</span>
      </div>
      <div class="rightBox">
        <img :src="back" alt="">
      </div>
    </div>
  </div>
  <div class="funBox">
    <h3>常用功能</h3>
  </div>
</template>

<style scoped>
.topbar {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: #2291ff;
  height: 130px;
  width: 100vw;
}
.topbar>span {
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  height: 60px;
  padding-left: 8px;
  font-size: 23px;
  color: white;

}
.topbar>img {
  width: 60px;
  height: 60px;
}
.msgBox {
  box-sizing: border-box;
  width: 100vw;
  height: 70px;
  padding: 10px;
}
.msgBox>.msg{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  background-color: #f1f8ff;
  border-radius: 15px;
  place-items: center;
  border: #bdd8f3 1px solid;
}
.leftBox {
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
}
.leftBox>img{
  width: 30px;
  height: 30px;
  
} 
.centerBox {
  display:grid;
  grid-template-rows: auto auto;
  width: 100%;
}
.rightBox {
  box-sizing: border-box;
  padding-right: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.rightBox>img {
  width: 20px;
  height: 20px;
}
.time {
  color: gray;
  font-size: 14px;
}

.funBox {
  box-sizing: border-box;
  padding: 0 10px;
  width: 100%;
  overflow: hidden;
}
</style>
