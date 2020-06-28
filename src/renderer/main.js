import Vue from 'vue'
import Vuetify from '@/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

import axios from 'axios'
import App from './App'
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.withCredentials = true;
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  vuetify: Vuetify,
  components: { App },
  template: '<App/>'
}).$mount('#app')