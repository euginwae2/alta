import Vue from 'vue'
import Router from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(Router)
Vue.use(VueMaterial)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/Tabs').default
    },
    {
      path: '/Tabs/Account',
      name: 'Account',
      component: require('@/components/Tabs').default
    },
    {
      path: '/Tabs/Pickup',
      name: 'pickup',
      component: require('@/components/Tabs').default
    },
    {
      path: '/Tabs/Delivery',
      name: 'Delivery',
      component: require('@/components/Tabs').default
    },
    {
      path: '/Tabs/Transactions',
      name: 'Transactions',
      component: require('@/components/Tabs').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
