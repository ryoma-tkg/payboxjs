import Vue from 'vue'
import Router from 'vue-router'
import managePay from '@/components/manage_pay/manage_pay'
import home from '@/components/home'
import search from '@/components/search'
import info from '@/components/info'
import setting from '@/components/setting'
// import acount_info from '@/components/setting_vue/acount_info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/manage_pay',
      name: 'managePay',
      component: managePay
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    }
  ]
})
