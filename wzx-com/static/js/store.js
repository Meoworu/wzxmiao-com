import Vue from 'vue';
import Vuex from 'vuex';
import state from './store/state.js';
import mutations from './store/mutation.js';
import actions from './store/action';
import getters from './store/getter.js';

Vue.use(Vuex);
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{}
})

export default store;