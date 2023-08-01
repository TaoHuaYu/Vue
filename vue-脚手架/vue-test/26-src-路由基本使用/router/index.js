
//引入VueRouter
import VueRouter from "vue-router";
//引入路由组件
import About from '@/components/About';
import Home from '@/components/Home';
//创建router实例对象，去管理一组一组的路由规则
export default new VueRouter({
    routes:[
        {
            path:'/about',
            name:"About",
            component:About
        },
        {
            path:'/home',
            name:'Home',
            component:Home
        }
    ]

})