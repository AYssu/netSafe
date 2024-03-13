<template>
    <el-container class="TopMenu">
        <el-header>
            <el-menu :ellipsis="false" background-color="#f9f9f986" default-active="/index/command" class="el-menu-demo"
                mode="horizontal">
                <el-menu-item v-for="(item, index) in menus" :key="index" index="/index/notice">
                    <div class="items">
                        <img class="icon" :src="item.icon" alt="tup">
                        <span>{{ item.title }}</span>
                    </div>
                </el-menu-item>
            </el-menu>
            <div class="topLogo">
                <img class="logo" src="@/assets/images/home_person.png" alt="">
                <img class="whiteLogo" src="@/assets/images/white-log.png" alt="">
            </div>
            <div class="rightItems">
                <el-button color="#002daa" round>大屏</el-button>

                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />

                <el-dropdown>
                    <span class="el-dropdown-link">欢迎你 stu001<el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item :icon="Plus">修改密码</el-dropdown-item>
                            <el-dropdown-item :icon="CirclePlusFilled">退出登录</el-dropdown-item>

                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-header>
    </el-container>
</template>
<script lang="ts" setup>

import {
    ArrowDown,
    CirclePlusFilled,
    Plus,
} from '@element-plus/icons-vue'

import { reactive, ref } from 'vue';

const getImage = (name) => {
    return '../src/assets/images/' + name + '.png'
}

const menus = reactive(
    [
        {
            title: "指挥调度",
            path: "/index/command",
            icon: getImage('command'),
        }, {
            title: "组织架构",
            path: "depart",
            icon: getImage('depart'),
        }, {
            title: "广播系统",
            path: "notice",
            icon: getImage('notice'),
        }, {
            title: "大屏数据",
            path: "screen",
            icon: getImage('screen'),
        },
    ]
)
</script>


<style scoped lang="less">
.TopMenu {
    .topLogo {
        width: 280px;
        height: 60px;
        display: flex;
        align-items: center;
        background-repeat: no-repeat;
        position: absolute;
        top: 0px;
        background-size: cover;
        background-image: url('@/assets/images/top-left.png');

        .logo {
            width: 25px;
            height: 25px;
            margin-left: 20px;
        }

        .whiteLogo {
            height: 22px;
            width: 120px;
            margin-left: 20px;
        }

    }


    .items {
        opacity: 0.5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon {
            margin-top: 5px;
            width: 15px;
            height: 15px;
        }

        span {
            height: 20px;
            font-size: 11px;
            text-align: center;
            margin-top: 5px;
            color: white;
        }

    }

    .rightItems {
        display: flex;
        align-items: center;
        position: absolute;
        height: 60px;
        top: 0;
        right: 0;
        box-sizing: border-box;
        padding-right: 50px;


        .el-dropdown-link {
            font-size: 14px;
            color: white;
        }

        .el-avatar {
            margin-right: 10px;
            width: 28px;
            height: 28px;
        }

        .el-button.is-round {
            border: 1px solid white;
            margin-right: 10px;
        }
    }

    .el-menu-item {
        line-height: normal;
        border-bottom: none;


    }

    .el-menu-demo {
        background-color: #002daa;
        padding-left: 300px;
        box-sizing: border-box;

    }

    .el-header {
        --el-header-padding: 0;
    }

    .el-menu--horizontal>.el-menu-item.is-active {
        border-bottom: none;
        color: var(--el-menu-active-color) !important;

        .items {
            opacity: 1;
        }
    }
}
</style>