<template>
  <div class="screen-main">
    <el-container>
      <el-header>
        <ScreenMenu></ScreenMenu>
      </el-header>
      <el-main>
        <router-view :key="key"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const constomRouter = useRoute()
import ScreenMenu from '@/components/ScreenMenu.vue'
let key = constomRouter.path + Math.random()
</script>
