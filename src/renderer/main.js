import Vue from 'vue'
import Vuetify from '@/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import '../renderer/store'

import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetify: Vuetify,
  components: { App },
  template: '<App/>'
}).$mount('#app')