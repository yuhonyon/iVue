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
    path: '/test',
    component: require('./../views/test/index.md')
  },
    {
     path: '/button',
     component: require('./../views/button/index.md')
    },{
     path: '/form',
     component: require('./../views/form/index.md')
    }, {
      path: '/page',
      component: require('./../views/page/index.md')
    }, {
      path: '/modal',
      component: require('./../views/modal/index.md')
    },  {
      path: '/icon',
      component: require('./../views/icon/index.md')
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
