import Vue from 'vue'
import Router from 'vue-router'

import mainMenu from '../components/mainblocks/resistration/client/new/new_input.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainMenu',
      component: mainMenu
    }
  ]
})
