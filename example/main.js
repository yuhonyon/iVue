// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import $ from "n-zepto";
window.$=$;
sync(store, router)
Vue.config.productionTip = false

import "./assets/css/doc.scss"
import "./assets/js/doc.js"
import "#/styles/ivue.scss"
import Ivue from "#/index.js"


Ivue.install(Vue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
