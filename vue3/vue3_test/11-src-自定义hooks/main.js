//引入的不再是vue构造函数，引入的是一个createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象——app（类似于之前vue2中的vm，但app比vm“轻”
const app=createApp(App)
//挂载
app.mount('#app')


// const vm=new Vue({
//     render:(h)=>{return h(App)}
// })
// vm.$mount('#app')