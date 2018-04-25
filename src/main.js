// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import routes from './router'
import VueRouter from 'vue-router'
import routes from './router'
import $ from 'jquery'

Vue.component('qrcode', Qrcode)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
  //render: h => h(App)
}).$mount('#app')
