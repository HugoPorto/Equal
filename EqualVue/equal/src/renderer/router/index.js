import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: 'clients',
      name: 'list-loki-js',
      component: require('@/components/clients/listLokiJS').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
