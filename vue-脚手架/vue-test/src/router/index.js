
//引入VueRouter
import VueRouter from "vue-router";
//引入路由组件
import About from '@/pages/About';
import Home from '@/pages/Home';
import Message from '@/pages/Message';
import New from '@/pages/New';
import Detail from '@/pages/Detail'
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
            component:Home,
            children:[
                {
                    path:'message',
                    name:'Message',
                    component:Message,
                    children:[
                        {
                            path:'detail/:id/:title',
                            name:'Detail',
                            component:Detail,
                            props($route){
                                return {id:$route.params.id,title:$route.params.title}
                            }
                        }
                    ]
                },
                {
                    path:'new',
                    name:'New',
                    component:New
                }

            ]
        }
    ]

})