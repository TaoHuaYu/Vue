//引入vue
import Vue from 'vue'
// 引入app
import App from './App'
//引入store
import store from './store'
// 关闭vue生产提示
Vue.config.productionTip=false
// 创建vm实例
new Vue({
    el:'#app',
    render: h=>h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus=this;
    }
})
