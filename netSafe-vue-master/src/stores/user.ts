import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserInfoStore = defineStore(
  'userInfo',
  () => {
    //1.定义用户信息
    const info = ref()
    const remenber = ref()
    //2.定义修改用户信息的方法
    const setInfo = (newInfo) => {
      info.value = newInfo
    }

    const setRemenber = (value) => {
      remenber.value = value
    }

    //3.定义清空用户信息的方法
    const removeInfo = () => {
      info.value = {}
    }

    const removeRemenber = () => {
      remenber.value = {}
    }

    return { remenber, info, setInfo, removeInfo, setRemenber, removeRemenber }
  },
  {
    persist: true
  }
)
