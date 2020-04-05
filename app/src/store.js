import Vue from 'vue'
import Vuex from 'vuex'
import StandupStore from './store-modules/standup-module.js'

Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    environments: StandupStore
  }
})

export default store
