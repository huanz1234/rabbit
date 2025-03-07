import httpInstance from '@/utils/http'

// 获取轮播图数据

function getBannerAPI() {
  return httpInstance.get('/home/banner')
}

export {
  getBannerAPI
}