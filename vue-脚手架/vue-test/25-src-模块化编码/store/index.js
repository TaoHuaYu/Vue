//该文件用于创建vuex中最为核心的store

//引入vuex
import Vuex from 'vuex';
//引入vue
import Vue from 'vue';

import personAbout from './Person';
import countAbout from './Count';
//应用vuex
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
  modules:{
    countAbout,
    personAbout
  }
})