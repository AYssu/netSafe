<template>
  <el-container class="TopMenu">
    <el-header>
      <el-menu
        :ellipsis="false"
        background-color="#f9f9f986"
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router
      >
        <el-menu-item v-for="item in menus" :key="item.id" :index="item.path">
          <div class="items">
            <img class="icon" :src="item.icon" alt="tup" />
            <span>{{ item.title }}</span>
          </div>
        </el-menu-item>
      </el-menu>
      <div class="topLogo">
        <img class="logo" src="@/assets/images/home_person.png" alt="" />
        <img class="whiteLogo" src="@/assets/images/white-log.png" alt="" />
      </div>
      <div class="rightItems">
        <el-button color="#002daa" round>大屏</el-button>

        <el-avatar :src="icon" />

        <el-dropdown trigger="click">
          <span class="el-dropdown-link" style="cursor: pointer"
            >欢迎你 {{ user.info ? user.info.adminname : '加载中...' }}
            <el-icon class="el-icon--right"><arrow-down /> </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="Plus" @click="visibleDrawer = true"
                >修改资料</el-dropdown-item
              >
              <el-dropdown-item @click="exitLogin" :icon="CirclePlusFilled"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
  </el-container>

  <el-drawer v-model="visibleDrawer" title="修改个人资料" direction="rtl" size="60%">
    <el-form :model="adminInfo" label-width="100px">
      <el-form-item label="管理员昵称">
        <el-input v-model="adminInfo.adminname" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="邮箱地址">
        <el-input v-model="adminInfo.email" placeholder="管理员邮箱"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :auto-upload="true"
          action="/api/file/upload"
          name="file"
          :headers="{ Authorization: tokenStore.token }"
          :on-success="uploadSuccess"
        >
          <img v-if="adminInfo.userPic" :src="adminInfo.userPic" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="个性签名">
        <div class="editor">
          <quill-editor theme="snow" v-model:content="adminInfo.content" contentType="html">
          </quill-editor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="updateAdmin">修改个人资料</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ArrowDown, CirclePlusFilled, Plus } from '@element-plus/icons-vue/dist/index.js'

import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import admimRouter from '@/router/index.ts'

//控制抽屉是否显示
const visibleDrawer = ref<boolean>(false)
//添加表单数据模型
const adminInfo = ref<any>({
  adminname: '',
  email: '',
  userPic: '',
  content: '',
  password: ''
})

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

import { adminUpdateService } from '@/api/user.ts'

const updateAdmin = async () => {
  const result = await adminUpdateService(adminInfo.value)
  ElMessage.success(result.data ? result.data : '修改成功')
  visibleDrawer.value = false
  getAdminInfo()
}
const activeIndex = ref<string>('depart')
const router = useRoute()
import { userInfoGetService } from '@/api/user.ts'
import { useUserInfoStore } from '@/stores/user.ts'
const user = useUserInfoStore()
const icon = ref<string>()

const getAdminInfo = async () => {
  const reslut = await userInfoGetService()
  user.setInfo(reslut.data)
  icon.value = user.info.userPic
  adminInfo.value.userPic = icon.value
  adminInfo.value.adminname = user.info.adminname
  adminInfo.value.email = user.info.email
  adminInfo.value.content = user.info.content
}

onMounted(() => {
  getAdminInfo()
  activeIndex.value = '/index/' + router.matched[1].name?.toString
  console.log()
})

const uploadSuccess = (img: any) => {
  console.log(img)
  //img就是后台响应的数据，格式为：{code:状态码，message：提示信息，data: 图片的存储地址}
  adminInfo.value.userPic = img.data
}
// @ts-ignore
import commandIcon from '@/assets/images/command.png'
// @ts-ignore
import departIcon from '@/assets/images/depart.png'
// @ts-ignore
import noticeIcon from '@/assets/images/notice.png'
// @ts-ignore
import screenIcon from '@/assets/images/screen.png'

const menus = reactive([
  {
    id: 1,
    title: '指挥调度',
    path: '/index/command',
    icon: commandIcon
  },
  {
    id: 2,
    title: '组织架构',
    path: '/index/depart',
    icon: departIcon
  },
  {
    id: 3,
    title: '广播系统',
    path: '/index/notice',
    icon: noticeIcon
  },
  {
    id: 4,
    title: '大屏数据',
    path: '/index/screen',
    icon: screenIcon
  }
])

import { ElMessage } from 'element-plus'
//添加请求拦截器
import { useTokenStores } from '@/stores/token.js'
const tokenStore = useTokenStores()
const exitLogin = () => {
  user.removeInfo()
  tokenStore.removeToken()
  ElMessage.success('退出成功')
  admimRouter.push('/login')
}
</script>

<style scoped lang="less">
.avatar-uploader {
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }

  .el-upload:hover {
    border-color: var(--el-color-primary);
  }

  .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }
}

.editor {
  width: 100%;

  :deep(.ql-editor) {
    min-height: 200px;
  }
}

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

  .el-menu--horizontal > .el-menu-item.is-active {
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
