<script setup>
import '@/assets/css/GroupList.css'
import searchIcon from '@/assets/images/serach.png'
import { ref } from 'vue';

const groupList = ref([
  {
    title:"阿夜和阿丽的小分队",
    user:"阿丽",
    message:"你好啊",
    time:"上午 8:12",
    actice:false,
    num:1
  },{
    title:"韩非队",
    user:"张山",
    message:"你好啊",
    time:"上午 8:12",
    actice:true,
    num:81
  },{
    title:"塞亚对",
    user:"塞罗",
    message:"你好啊",
    time:"上午 8:12",
    actice:false,
    num:9
  },{
    title:"喜羊羊对",
    user:"沸羊羊",
    message:"嗡嗡嗡",
    time:"昨天",
    actice:true,
    num:12
  }
])
</script>

<template>
  <div class="group-main">
    <div class="topbar">
      <div class="searchBox">
        <img :src="searchIcon" alt="搜索">
        <input type="text" placeholder="搜索">
      </div>
    </div>

    <div class="list">
      <div v-for="item in groupList" :key="item" class="item">
        <div class="item-icon" >
          <span>{{item.title.charAt(0)}}</span>
        </div>
        <div class="item-content">
          <div class="item-content-title">{{ item.title }}</div>
          <div class="item-content-subtitle">{{item.user}}: {{item.message}}</div>
        </div>
        <div class="item-footer">
          <span>{{ item.time }}</span>
          <div v-if="item.actice" class="item-footer-icon">
            <div class="msg-icon">
              <span>{{ item.num }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
