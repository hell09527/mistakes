import Vue from 'vue'
import Router from 'vue-router'
import common from '@/components/common'
import login from '@/spread/login/login.vue'
import prime from '@/spread/prime/prime.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component:login
    },
    {
      path: '/common',
      name: 'common',
      component: common
    },
    {
      path: '/prime',
      name: 'prime',
      component: prime
    }
  ]
})
