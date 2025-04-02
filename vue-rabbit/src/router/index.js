import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [{
        path: '',  // 默认子路由,这样当访问一级路由的时候，二级路由自动匹配这个
        component: Home
      },
      {
        path: '/category/:id',
        component: Category
      },
      {
        path: '/category/sub/:id',
        component: SubCategory
      }
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ]

})

export default router
