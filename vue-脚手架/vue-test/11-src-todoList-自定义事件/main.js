//引入vue
import Vue from 'vue'
// 引入app
import App from './App'
import { mixin1 } from './mixin'
// 关闭vue生产提示
Vue.config.productionTip=false
Vue.mixin(mixin1)

// 创建vm实例
new Vue({
    el:'#app',
    render: h=>h(App)
})
