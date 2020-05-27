import Vue from 'vue'
import Router from 'vue-router'
import managePay from '@/components/manage_pay/manage_pay'
import home from '@/components/home'
import search from '@/components/search'
import info from '@/components/info'
import campaign from '@/components/info/campaign'
import maintenance from '@/components/info/maintenance'
import newsystem from '@/components/info/newsystem'
import recommend from '@/components/info/recommend'
import setting from '@/components/setting'
import acountInfo from '@/components/setting/acountInfo'
import payManager from '@/components/setting/payManager'
import notice from '@/components/setting/notice'
import security from '@/components/setting/security'
import applicationInfo from '@/components/setting/applicationInfo'
import help from '@/components/setting/help'
import promoFriends from '@/components/setting/promoFriends'
import question from '@/components/setting/question'
import logOut from '@/components/setting/logOut'
import campaign20200527 from '@/components/info/campaign/campaign20200527'
import maintenance20200527 from '@/components/info/maintenance/maintenance20200527'
import newsystem20200527 from '@/components/info/newsystem/newsystem20200527'
import recommend20200527 from '@/components/info/recommend/recommend20200527'

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
      path: '/info/campaign',
      name: 'campaign',
      component: campaign
    },
    {
      path: '/info/maintenance',
      name: 'maintenance',
      component: maintenance
    },
    {
      path: '/info/newsystem',
      name: 'newsystem',
      component: newsystem
    },
    {
      path: '/info/recommend',
      name: 'recommend',
      component: recommend
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
    },
    {
      path: '/setting/help',
      name: 'help',
      component: help
    },
    {
      path: '/setting/promoFriends',
      name: 'promoFriends',
      component: promoFriends
    },
    {
      path: '/setting/question',
      name: 'question',
      component: question
    },
    {
      path: '/setting/logOut',
      name: 'logOut',
      component: logOut
    },
    {
      path: '/info/campaign/campaign20200527',
      name: 'campaign20200527',
      component: campaign20200527
    },
    {
      path: '/info/maintenance/maintenance20200527',
      name: 'maintenance20200527',
      component: maintenance20200527
    },
    {
      path: '/info/newsystem/newsystem20200527',
      name: 'newsystem20200527',
      component: newsystem20200527
    },
    {
      path: '/info/recommend/recommend20200527',
      name: 'recommend20200527',
      component: recommend20200527
    }
  ]
})
