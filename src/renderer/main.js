import Vue from 'vue'
import Vuetify from '@/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import '../renderer/store'

import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
axios.defaults.baseURL = "http://127.0.0.1:8000/client/";
axios.defaults.withCredentials = true;
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