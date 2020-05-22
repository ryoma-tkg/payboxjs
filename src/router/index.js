import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import setting from '@/components/setting'
import map from '@/components/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/map',
      name: 'map',
      component: map
    }
  ]
})
