import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'


export const useUserStore = defineStore('user', () => {

  const userInfo = ref({}) // 用户信息

  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
  }

  return {
    userInfo,
    getUserInfo
  }
}, {
  persist: true,
})