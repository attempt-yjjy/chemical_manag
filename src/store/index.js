import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import loginInStore from './login-in/login-in-store.js'
import statusControl from './status-control/status-control.js'

export default new Vuex.Store({
  state: {
    currentSubPath:null
  },
  mutations: {
  
  },
  actions: {
  },
  modules: {
    loginInStore,
    statusControl
  }
})

