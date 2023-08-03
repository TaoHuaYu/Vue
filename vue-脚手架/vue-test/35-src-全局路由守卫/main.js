//引入vue
import Vue from 'vue'
// 引入app
import App from './App'
//引入vueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
// 关闭vue生产提示
Vue.config.productionTip=false
//应用VueRouter
Vue.use(VueRouter)
// 创建vm实例
new Vue({
    el:'#app',
    render: h=>h(App),
    router,
    beforeCreate(){
        Vue.prototype.$bus=this;
    }
})
