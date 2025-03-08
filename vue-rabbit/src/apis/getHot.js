import httpInstance from "@/utils/http";

// 导出一个函数，用于获取分类API
export function getHotAPI() {
  // 使用httpInstance方法，发送GET请求，请求地址为/home/category/head
  return httpInstance({
    method: "GET",
    url: "/home/hot"
  })
}