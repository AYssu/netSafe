<template>
    <div class="screen-main">
        <el-container>
            <el-header>
                <ScreenMenu></ScreenMenu>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script setup>
import ScreenMenu from '@/components/ScreenMenu.vue';
</script>