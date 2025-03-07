import httpInstance from "@/utils/http";

// 导出一个函数，用于获取分类API
export function getCategoryAPI() {
  // 使用httpInstance方法，发送GET请求，请求地址为/home/category/head
  return httpInstance({
    method: "GET",
    url: "/home/category/head"
  })
}