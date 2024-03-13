<script lang="ts" setup>
import '@/assets/view/LoginLayout.less'
import axios from 'axios'
import router from '@/router';

const yzm = ref<string>()
import { onMounted, reactive, ref, watch } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const rememberMe = ref<boolean>(true)

const validateUser = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入账号'))
    } else {
        if (ruleForm.user !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('user', () => null)
        }
        callback()
    }
}

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        if (ruleForm.pass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('pass', () => null)
        }
        callback()
    }
}


const checkCode = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入验证码'))
    } else {
        if (ruleForm.code !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('code', () => null)
        }
        callback()
    }
}
const ruleForm = reactive({
    user: '',
    pass: '',
    code: '',
})

const disable = ref(true)


const getCodeImage = async () => {
    try {
        // 使用axios发送GET请求，并指定响应类型为blob  
        const response = await axios.get('/api/Verify/getVerify', {
            responseType: 'blob'
        });

        // 创建一个Blob URL来显示图片  
        const url = URL.createObjectURL(new Blob([response.data]));

        // 将图片URL赋值给响应式引用  
        yzm.value = url;
    } catch (err) {
        // 捕获错误并打印到控制台  
        console.error(err);
    }
}


onMounted(() => {
    getCodeImage()
    watch(ruleForm, async (newData, oldData) => {
        if (newData.user !== '' && newData.pass !== '' && newData.code !== '') {
            disable.value = false;
        } else {
            disable.value = true;
        }
    })
})

const rules = reactive<FormRules<typeof ruleForm>>({
    user: [{ validator: validateUser, trigger: 'blur' }],
    pass: [{ validator: validatePass, trigger: 'blur' }],
    code: [{ validator: checkCode, trigger: 'blur' }],
})

const login = () => {
    router.push("/index")
}

</script>

<template>
    <div class="login-layout">
        <div class="center-card">

            <div class="center-card-left"></div>
            <div class="center-card-right">
                <div class="center-card-right-top">
                    <img src="@/assets/logoname.png" alt="" srcset="">
                </div>
                <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules"
                    label-width="auto" class="demo-ruleForm">
                    <el-form-item label="" prop="user" class="inputLabel">
                        <el-input v-model="ruleForm.user" type="text" autocomplete="off" placeholder="请输入你的账号"
                            clearable />
                        <template #label>
                            <el-icon color="#1e5feb" :size="20">
                                <UserFilled />
                            </el-icon>
                        </template>
                    </el-form-item>
                    <el-form-item label="" prop="pass" class="inputLabel">
                        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="请输入你的密码" />
                        <template #label>
                            <el-icon color="#1e5feb" :size="20">
                                <Briefcase />
                            </el-icon>
                        </template>
                    </el-form-item>
                    <el-form-item label="" prop="code" class="codeLable">
                        <el-input v-model="ruleForm.code" placeholder="你的验证码" />
                        <template #label>
                            <el-icon color="#1e5feb" :size="20">
                                <img :src="yzm" alt="" @click="getCodeImage">
                            </el-icon>
                        </template>
                    </el-form-item>
                    <el-form-item>
                        <el-icon color="#1e5feb">
                            <CircleCheck v-if="!rememberMe" @click="rememberMe = !rememberMe" />
                            <CircleCheckFilled v-if="rememberMe" @click="rememberMe = !rememberMe" />
                        </el-icon>
                        <span class="remember">记住密码</span>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="loginBtn" type="primary" round :disabled="disable" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>