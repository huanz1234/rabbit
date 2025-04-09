import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from './user'
import { insertCartAPI, getCartListAPI, deleteCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
  // 1. 获取用户信息
  const userStore = useUserStore()
  // 2. 获取用户信息中的token
  const isLogin = computed(() => userStore.userInfo.token)
  // 1. 定义state - cartList
  const cartList = ref([])

  //更新购物车列表
  const updateCartListAPI = async () => {
    // 调用接口获取最新的购物车列表
    const res = await getCartListAPI()
    // console.log(res)
    cartList.value = res.result
  }

  // 2. 定义action - addCart
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (isLogin.value) {
      // 如果登录了，调用接口添加购物车
      await insertCartAPI({ skuId, count })
      updateCartListAPI()
    } else {
      // 添加购物车操作
      // 已添加过 - count + 1
      // 没有添加过 - 直接push
      // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
      const item = cartList.value.find((item) => skuId === item.skuId)
      if (item) {
        // 找到了
        item.count += count
      } else {
        // 没找到
        cartList.value.push(goods)
      }
    }
  }

  // 删除购物车商品
  const delCart = async (skuId) => {
    if (isLogin.value) {
      // 如果登录了，调用接口删除购物车
      await deleteCartAPI([skuId])
      updateCartListAPI()
    } else {
      // 如果没有登录，直接本地购物车删除
      const index = cartList.value.findIndex((item) => item.skuId === skuId)
      if (index !== -1) {
        cartList.value.splice(index, 1)
      }
    }
  }

  // 单选
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    if (item) {
      item.selected = selected
    }
  }

  // 全选
  const allCheck = (selected) => {
    // 把cartList中的每一个商品的selected属性都设置为全选框当前的状态 
    cartList.value.forEach(item => {
      item.selected = selected
    })
  }

  const removeGood = (skuId) => {
    const index = cartList.value.findIndex(item => item.skuId === skuId)
    if (index !== -1) {
      cartList.value.splice(index, 1)
    }
  }

  // 清空购物车
  const clearCart = () => {
    cartList.value = []
  }

  // 计算属性 总数 总价
  const totalCount = computed(() => {
    // 遍历的写法 
    let count = 0
    cartList.value.forEach(item => {
      count += item.count
    })
    return count
  })

  const totalPrice = computed(() => {
    return cartList.value.reduce((total, item) => {
      return total + item.count * item.price
    }, 0)
  })

  // 全选的计算属性
  const isAll = computed(() => {
    return cartList.value.every(item => item.selected === true)
  })

  // 已选择商品的数量
  const selectedCount = computed(() => {
    return cartList.value.filter(item => item.selected).reduce((total, item) => total + item.count, 0)
  })
  // 已选择商品的总价
  const selectedPrice = computed(() => {
    return cartList.value.filter(item => item.selected).reduce((total, item) => total + item.count * item.price, 0)
  })

  return {
    updateCartListAPI,
    cartList,
    addCart,
    delCart,
    singleCheck,
    allCheck,
    removeGood,
    clearCart,
    totalCount,
    totalPrice,
    isAll,
    selectedCount,
    selectedPrice
  }
}, {
  persist: true,
})