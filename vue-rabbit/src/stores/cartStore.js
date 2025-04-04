import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useCartStore = defineStore('cart', () => {
  // 1. 定义state - cartList
  const cartList = ref([])
  // 2. 定义action - addCart
  const addCart = (goods) => {
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      // 找到了
      item.count++
    } else {
      // 没找到
      cartList.value.push(goods)
    }
  }

  // 删除购物车商品
  const delCart = (skuId) => {
    const index = cartList.value.findIndex((item) => item.skuId === skuId)
    if (index !== -1) {
      cartList.value.splice(index, 1)
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

 

  return {
    cartList,
    addCart,
    delCart,
    singleCheck,
    allCheck,
    totalCount,
    totalPrice,
    isAll,
  }
}, {
  persist: true,
})