import httpInstance from "@/utils/http";

export default function getCategoryAPI(id) {

  return httpInstance.get("/category", {
    params: {
      id
    }
  })
}

/**
 * @description: 获取分类子类
 * @param {*} id
 * @return {*}
 */
export function getFilterCategoryAPI(id) {
  return httpInstance.get("/category/sub/filter", {
    params: { id }
  })
}


/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return httpInstance({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}