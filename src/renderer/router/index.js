import Vue from 'vue'
import Router from 'vue-router'
import init from '@/page/init'
import home from '@/page/home'
import err from '@/page/err'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'init',
      component: init
    }, {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/err',
      name: 'err',
      component: err
    }
  ]
})
