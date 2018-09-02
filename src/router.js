import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about/:name',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
    }
  ]
})
