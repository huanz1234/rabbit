import httpInstance from '@/utils/http'

// 导出一个函数，用于获取分类API
// 导出一个函数，用于获取分类API
export function getCategoryAPI() {
  // 使用httpInstance函数，传入url参数，获取分类API
  return httpInstance({
    url: 'home/category/head'
  })
}