import httpInstance from '@/utils/http'

// 获取轮播图数据

function getBannerAPI() {
  return httpInstance.get('/home/banner')
}

export {
  getBannerAPI
}


/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}