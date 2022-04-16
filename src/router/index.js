import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Work from '@/pages/work'
import About from '@/pages/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: { title: 'PORTFOLIO', requiresAuth: false }
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
      meta: { title: 'WORK｜PORTFOLIO', requiresAuth: false }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { title: 'ABOUT｜PORTFOLIO', requiresAuth: false }
    }
  ]
})
