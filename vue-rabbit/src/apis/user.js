import httpInstance from "@/utils/http";

export const loginAPI = ({ account, password }) => {
  return httpInstance({
    url: "/login",
    method: "post",
    data: {
      account,
      password,
    },
  });
}

// 猜你稀罕接口
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}