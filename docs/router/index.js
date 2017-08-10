import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
     component: require('./../views/home/index.vue')
    },
    {
     path: '/button',
     component: require('./../views/button/index.vue')
    }, {
      path: '/page',
      component: require('./../views/page/index.vue')
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
