// 封装购物车相关接口
import httpInstance from '@/utils/http'


// 加入购物车
export const insertCartAPI = ({skuId,count}) => {
  return httpInstance({
    url: '/member/cart',
    method: 'post',
    data: {
      skuId,
      count
    }
  })
}

// 获取最新的购物车列表
export const getCartListAPI = () => {
  return httpInstance({
    url: '/member/cart',
    method: 'get'
  })
}

// 删除购物车商品
export const deleteCartAPI = (ids) => {
  return httpInstance({
    url: '/member/cart/',
    method: 'delete',
    data:{
      ids
    }
  })
}