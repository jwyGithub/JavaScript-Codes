//配置 store

import Vue from 'vue';
import Vuex from 'vuex';//对象   {... Store类...}
// console.log('vuex',Vuex);
Vue.use(Vuex);

// let store = new Vuex.Store(配置);

import state from '../store/state.js'
import actions from '../store/actions.js'
import mutations from '../store/mutations.js'
import getters from '../store/getters.js'



let store = new Vuex.Store({
  state,mutations,
  getters,actions
});

export default store;