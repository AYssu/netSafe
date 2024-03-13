<template>
<el-container>
    <el-header>
        <TopMenu/>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
</el-container>
</template>

<script setup>
import { ref } from 'vue'
import TopMenu from '@/components/TopMenu.vue'
</script>