// 该文件是整个项目的入口文件
import Vue from 'vue'
//映入App组件，他是所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

//创建vue实例对象
new Vue({
  render: h => h(App),
}).$mount('#app')
