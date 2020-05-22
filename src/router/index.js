import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import search from '@/components/search'
import info from '@/components/info'
import setting from '@/components/setting'
import acountInfo from '@/components/setting/acountInfo'
import payManager from '@/components/setting/payManager'
import notice from '@/components/setting/notice'
import security from '@/components/setting/security'
import applicationInfo from '@/components/setting/applicationInfo'

Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
      path: '/setting/acountInfo',
      name: 'acountInfo',
      component: acountInfo
    },
    {
      path: '/setting/payManager',
      name: 'payManager',
      component: payManager
    },
    {
      path: '/setting/notice',
      name: 'notice',
      component: notice
    },
    {
      path: '/setting/security',
      name: 'security',
      component: security
    },
    {
      path: '/setting/applicationInfo',
      name: 'applicationInfo',
      component: applicationInfo
    }
  ]
})
