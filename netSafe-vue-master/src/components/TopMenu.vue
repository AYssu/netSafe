<template>
    <el-container class="TopMenu">
        <el-header>
            <el-menu :ellipsis="false" background-color="#f9f9f986" :default-active="activeIndex" class="el-menu-demo"
                mode="horizontal" router>
                <el-menu-item v-for="(item) in menus" :key="item.id" :index="item.path">
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

                <el-avatar :src="icon" />

                <el-dropdown trigger="click">
                    <span class="el-dropdown-link" style="cursor: pointer;">欢迎你 {{ user.info.adminname }}
                        <el-icon class="el-icon--right"><arrow-down />
                        </el-icon>
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

import { ArrowDown, CirclePlusFilled, Plus } from '@element-plus/icons-vue/dist/index.js';

import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
const getImage = (name: any) => {
    return '../src/assets/images/' + name + '.png'
}
const activeIndex = ref<string>('depart')
const router = useRoute();
import { userInfoGetService } from '../api/user';
import { useUserInfoStore } from '../stores/user';
const user = useUserInfoStore();
const icon = ref<string>();

const getAdminInfo = async () => {
    const reslut = await userInfoGetService();
    user.setInfo(reslut.data);
    icon.value = user.info.userPic;
}


onMounted(() => {
    getAdminInfo();
    activeIndex.value = router.name as string;
})
const menus = reactive(
    [
        {
            id: 1,
            title: "指挥调度",
            path: "command",
            icon: getImage('command'),
        }, {
            id: 2,
            title: "组织架构",
            path: "depart",
            icon: getImage('depart'),
        }, {
            id: 3,
            title: "广播系统",
            path: "notice",
            icon: getImage('notice'),
        }, {
            id: 4,
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
        height: 59px;
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
        height: 59px;
        top: 0;
        right: 0;
        box-sizing: border-box;
        padding-right: 50px;
        background: linear-gradient(to right, #002daa00 0%, #002daa83 20%, #002daa 100%);

        padding-left: 10px;

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

    .el-dropdown {
        --el-dropdown-menuItem-hover-fill: none;
    }
}
</style>