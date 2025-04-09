import { createRouter, createWebHistory } from 'vue-router'

// 使用懒加载，动态导入组件
const Layout = () => import('@/views/Layout/index.vue')
const Home = () => import('@/views/Home/index.vue')
const Login = () => import('@/views/Login/index.vue')
const Category = () => import('@/views/Category/index.vue')
const SubCategory = () => import('@/views/SubCategory/index.vue')
const Detail = () => import('@/views/Detail/index.vue')
const CartList = () => import('@/views/CartList/index.vue')
const Checkout = () => import('@/views/Checkout/index.vue')
const Pay = () => import('@/views/Pay/index.vue')
const PayBack = () => import('@/views/Pay/PayBack.vue')
const Member = () => import('@/views/Member/index.vue')
const UserInfo = () => import('@/views/Member/components/UserInfo.vue')
const Order = () => import('@/views/Member/components/UserOrder.vue')

// // 静态
// import Layout from '@/views/Layout/index.vue';
// import Home from '@/views/Home/index.vue';
// import Login from '@/views/Login/index.vue';
// import Category from '@/views/Category/index.vue';
// import SubCategory from '@/views/SubCategory/index.vue';
// import Detail from '@/views/Detail/index.vue';
// import CartList from '@/views/CartList/index.vue';
// import Checkout from '@/views/Checkout/index.vue';
// import Pay from '@/views/Pay/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',  // 默认子路由,这样当访问一级路由的时候，二级路由自动匹配这个
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id', // 动态路由传参,用于匹配商品详情页,id为商品id
          component: Detail
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'paycallback', // 注意路径，必须是paycallback
          component: PayBack
        },
        {
          path: 'member',
          component: Member,
          children:[
            {
              path: '',
              component: UserInfo
            },
            {
              path: 'order',
              component: Order
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    }
  }
})

export default router
