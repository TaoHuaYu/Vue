
//引入VueRouter
import VueRouter from "vue-router";
//引入路由组件
import About from '@/pages/About';
import Home from '@/pages/Home';
import Message from '@/pages/Message';
import New from '@/pages/New';
import Detail from '@/pages/Detail'
//创建router实例对象，去管理一组一组的路由规则
const vueRouter=new VueRouter({
    routes:[
        {
            path:'/about',
            name:"About",
            component:About,
            meta:{title:'关于'}
        },
        {
            path:'/home',
            name:'Home',
            component:Home,
            meta:{title:'首页'},
            children:[
                {
                    path:'message',
                    name:'Message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    //独享路由守卫
                    beforeEnter:(to,form,next)=>{
                        if(to.meta.isAuth){
                            if(localStorage.getItem("name")=='taohuayu'){
                                next();
                            }else{
                                alert("权限不足");
                            }

                        }else{
                            next();
                        }
                    },
                    children:[
                        {
                            path:'detail/:id/:title',
                            name:'Detail',
                            component:Detail,
                            props($route){
                                return {id:$route.params.id,title:$route.params.title}
                            },
                            meta:{isAuth:true,title:'详情'}
                        }
                    ]
                },
                {
                    path:'new',
                    name:'New',
                    component:New,
                    meta:{isAuth:true,title:'消息'}
                }

            ]
        }
    ]

})
//全局前置路由守卫 -->初始化的时候、每次路由切换之前会被调用
// vueRouter.beforeEach((to,from,next)=>{
//     if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
//         if(localStorage.getItem('name')=='taohuayu'){ //权限控制具体规则
//             next() //放行
//         }else{
//             alert("暂无权限")
//         }
//     }else{
//         next()
//     }

// });
//全局后置路由守卫 -->初始化的时候、每次路由切换之前会被调用
vueRouter.afterEach((to)=>{
    document.title=to.meta.title || "taohuayu" //修改页面的title

})

export default vueRouter;