import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/layout/Layout.vue' // 引入布局组件
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import MerchantManage from '@/views/MerchantManage.vue'
import MerchantBusiness from '@/views/MerchantBusiness.vue'
import RechargeRecord from '@/views/RechargeRecord.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout, // 使用布局组件
    children: [
      {
        path: '', // 根路径默认显示Home组件
        name: 'Home',
        component: Home,
        meta: { title: '首页' } 
      },
      {
        path: '/merchant-manage',
        name: 'MerchantManage',
        component: MerchantManage,
        meta: { title: '商户管理' }
      },
      {
        path: '/merchant-business',
        name: 'MerchantBusiness',
        component: MerchantBusiness,
        meta: { title: '商户业务' }
      },
      {
        path: '/recharge-record',
        name: 'RechargeRecord',
        component: RechargeRecord,
        meta: { title: '充值记录' }
      }
    ]
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 登录验证守卫
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token')
  if (to.path !== '/login' && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router