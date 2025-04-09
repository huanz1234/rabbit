import httpInstance from "@/utils/http"

// 封装结算相关接口
export const getCheckoutAPI =  () => {
  return httpInstance({
    url: '/member/order/pre',
    method: 'get'
  })
}

export const createOrderAPI =  (data) => {
  return httpInstance({
    url: '/member/order',
    method: 'post',
    data
  })
}