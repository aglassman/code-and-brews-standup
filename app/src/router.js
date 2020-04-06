import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Code + Brews - Login',
        metaTags: [
          {
            name: 'description',
            content: 'Login page for Code + Brews'
          },
          {
            property: 'og:description',
            content: 'Login page for Code + Brews'
          }
        ]
      }
    },
    {
      path: '/events/:eventId/standup',
      props: true,
      name: 'standup',
      component: () => import(/* webpackChunkName: "standup" */ './views/Standup.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import(/* webpackChunkName: "events" */ './views/Events.vue')
    },

    // {
    //   path: '/events/:eventId/standup',
    //   props: true,
    //   name: 'standup',
    //   component: () => import(/* webpackChunkName: "templates" */ './views/Standup.vue')
    // },
    {
      path: '/*',
      redirect: '/events',
      name: 'home'
    }
  ]
})
