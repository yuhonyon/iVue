import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: require('./../App.vue'),
      children: [{
          path: "",
          component: require('./../views/home/index.vue'),
        },
        {
          path: "/component",
          component: require("./../views/Layout.vue"),
          children: [{
              path: '',
              component: require('./../views/test/index.md')
            },{
              path: '/component/test',
              component: require('./../views/test/index.md')
            },
            {
              path: '/component/button',
              component: require('./../views/button/index.md')
            },
            {
              path: '/component/form',
              component: require('./../views/form/index.md')
            },
            {
              path: '/component/page',
              component: require('./../views/page/index.md')
            },
            {
              path: '/component/modal',
              component: require('./../views/modal/index.md')
            },
            {
              path: '/component/icon',
              component: require('./../views/icon/index.md')
            }]
      },

    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
})
