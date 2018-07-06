// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import NProgress from 'nprogress'
import router from './router'
import 'nprogress/nprogress.css'
import Link from './components/Link'

Vue.config.productionTip = false
Vue.component('link-bar', Link)

NProgress.configure({showSpinner: false})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
