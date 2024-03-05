<script setup>
import '@/assets/css/PersonCenter.css'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserInfoStore } from '@/stores/user.js'
const userInfoStore = useUserInfoStore()
import { useRouter } from 'vue-router'
const router = useRouter()
import { useTokenStores } from '@/stores/token.js'
const TokenStores = useTokenStores();
import { useStore } from 'vuex'
import totop from '@/assets/images/totop.png'
import tobottom from '@/assets/images/tobottom.png'

import backicon from '@/assets/images/back_icon.png'

const noteList = ref([{
  active: true,
  title: "指挥系统上线了...",
  time: "2023-2-1"
}, {
  active: false,
  title: "hhhhhhh",
  time: "2013-2-2"
}, {
  active: true,
  title: "我wdead想飞...",
  time: "2023-2-1"
}, {
  active: true,
  title: "你好wjajjd...",
  time: "2023-2-1"
}, {
  active: true,
  title: "我会好好...",
  time: "2022-2-1"
}, {
  active: false,
  title: "好的...",
  time: "212-2-1"
}])

const groupList = ref([{
  isopen: false,
  title: "阿丽小分队",
  list: [
    {
      active: true,
      title: "指挥系统上线了...",
      time: "2023-2-1"
    }, {
      active: false,
      title: "hhhhhhh",
      time: "2013-2-2"
    }, {
      active: true,
      title: "我wdead想飞...",
      time: "2023-2-1"
    }, {
      active: true,
      title: "你好wjajjd...",
      time: "2023-2-1"
    }, {
      active: true,
      title: "我会好好...",
      time: "2022-2-1"
    }, {
      active: false,
      title: "好的...",
      time: "212-2-1"
    }
  ]
}, {
  isopen: false,
  title: "阿夜小分队",
  list: [
    {
      active: true,
      title: "指挥系统上线了...",
      time: "2023-2-1"
    }, {
      active: false,
      title: "hhhhhhh",
      time: "2013-2-2"
    }, {
      active: true,
      title: "我wdead想飞...",
      time: "2023-2-1"
    }, {
      active: true,
      title: "你好wjajjd...",
      time: "2023-2-1"
    }, {
      active: true,
      title: "我会好好...",
      time: "2022-2-1"
    }, {
      active: false,
      title: "好的...",
      time: "212-2-1"
    }
  ]
}])
</script>

<template>
  <div class="person-main">
    <div class="person-top">
      <div>
        <div class="topbar-box">
          <div class="topbar-left">
            <div class="left-icon"></div>
            <span>系统公告</span>
            <div class="item-footer-icon">
              <div class="msg-icon">
                <span>5</span>
              </div>
            </div>
          </div>

          <div class="rrght">
            <span>查看更多</span>
            <img :src="backicon" alt="">
          </div>
        </div>
      </div>

      <div class="items">
        <div v-for="item in noteList" key="items" class="item">
          <div class="left-box">
            <div class="dian">
              <div class="dd" v-if="item.active"></div>
            </div>
            <span class="tips">{{ item.title }}</span>
          </div>
          <div class="right-box">
            <span>{{ item.time }}</span>
          </div>
        </div>

      </div>
    </div>



    <div class="person-message">
      <div>
        <div class="topbar-box">
          <div class="topbar-left">
            <div class="left-icon"></div>
            <span>群公告</span>
            <div class="item-footer-icon">
              <div class="msg-icon">
                <span>1</span>
              </div>
            </div>
          </div>

          <div class="rrght">
            <span>查看更多</span>
            <img :src="backicon" alt="">
          </div>
        </div>
      </div>
      <div v-for="item in groupList" class="aaaa">
        <div class="category-box" @click="item.isopen = !item.isopen">
          <span>{{ item.title }}</span>
          <img :src="item.isopen ? totop : tobottom" alt="上箭头">
        </div>
        <transition name="fade">
          <div  v-if="item.isopen">
            <div v-for="i in item.list" class="items">
            <div key="items" class="item">
              <div class="left-box">
                <div class="dian">
                  <div class="dd" v-if="i.active"></div>
                </div>
                <span class="tips">{{ i.title }}</span>
              </div>
              <div class="right-box">
                <span>{{ i.time }}</span>
              </div>
            </div>
          </div>
          </div>
        </transition>
      </div>

    </div>
  </div>




</template>
