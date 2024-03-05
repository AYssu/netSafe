//定制请求的实例

//导入axios  npm install axios
import axios from 'axios';
//定义一个变量,记录公共的前缀  ,  baseURL
// const baseURL = 'http://localhost:8080';
const baseURL = '/api';
const instance = axios.create({ baseURL })
import { ElMessage } from 'element-plus'


//添加请求拦截器
import { useTokenStores } from '@/stores/token.js'

instance.interceptors.request.use(

    (config) => {
        const tokenStore = useTokenStores()
        if (tokenStore.token) {
            config.headers.Authorization = tokenStore.token
        }
        return config;
    }, (err) => {

    }
)

import router from '@/router';
//添加响应拦截器
instance.interceptors.response.use(
    result => {
        if (result.data.code === 1) {
            return result.data;
        }
        ElMessage.error(result.data.message ? result.data.message : "服务异常");
        return Promise.reject(result.data);//异步的状态转化成失败的状态
    },
    err => {
        if (err.response.status == 401) {
            ElMessage.error("未登录");
            router.push('/');
        } else {
            ElMessage.error('服务异常');
        }
        return Promise.reject(err);//异步的状态转化成失败的状态
    }
)

export default instance;