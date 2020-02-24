import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import './store';
import { MdTabs } from 'vue-material/dist/components'
//const Tabs = require('./Tabs')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
