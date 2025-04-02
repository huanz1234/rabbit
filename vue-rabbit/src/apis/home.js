import httpInstance from '@/utils/http'

// 获取轮播图数据

function getBannerAPI(params = {}) {
  const { distributionSite = '1' } = params
  return httpInstance.get('/home/banner',{
    params: {distributionSite}
  })
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