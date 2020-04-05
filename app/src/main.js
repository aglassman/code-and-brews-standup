import Vue from 'vue'
import VueResource from 'vue-resource'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMoment from 'vue-moment'
import FirebaseApp from './firebase-config'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueMoment)
Vue.use(FirebaseApp, {
  store: store
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Code + Brews'
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
