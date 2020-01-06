import Vue from 'vue'

import VueRouter from 'vue-router'

// 3. 路由配置

// import Home from '../pages/Home.vue'
// import Lists from '../components/Lists/Lists.vue'
// import Item from '../pages/Item.vue'
import Search from '../pages/Search.vue'
import Car from '../pages/Car.vue'
import My from '../pages/My.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'

// 2. 安装插件包到Vue上,
Vue.use(VueRouter)

let routes = [{
  // 首页
  name: 'home',
  path: '/home',
  component: () => import(/* webpackChunkName : "home" */ '../views/Home/Home.vue')
},
{
  // 列表
  name: "lists",
  path: "/list/:type",
  component: () => import(/* webpackChunkName : "lists" */ '../views/Home/Lists/Lists.vue')
},
{
  // 分类
  name: 'item',
  path: '/item',
  component: () => import(/* webpackChunkName : "item" */ '../views/Items/Item.vue')
},
// 搜索
{
  name: 'search',
  path: '/search',
  component: () => import(/* webpackChunkName : "search" */ '../views/Search/Search.vue')
},
// 购物车
{
  name: 'car',
  path: '/car',
  component: () => import(/* webpackChunkName : "search" */ '../views/Car/Car.vue')
},
// 我的
{
  name: 'my',
  path: '/my',
  component: () => import(/* webpackChunkName : "my" */ '../views/My/My.vue')
},
// 登陆
{
  name: 'login',
  path: '/login',
  component: () => import(/* webpackChunkName : "login" */ '../views/Login/Login.vue')
},
// 注册
// {
//   name: 'reg',
//   path: '/reg',
//   component: () => import(/* webpackChunkName : "reg" */ '../pages/Reg.vue')
// },
// 默认页面
{
  path: '/',
  redirect: '/home'
}
]

let router = new VueRouter({ // 插件路由对象
  routes,
  mode: 'history'
})

// 全局守卫
/* router.beforeEach((to,from,next)=>{
  //需要做判断
  //to 目标路由 ~~ $route
  //from 当前路由
  //next 函数

  console.log('全局守卫');

  if(to.path=='/login' || to.path=='/reg' || to.path=='/register'){
    //判断是不是登录了
    //axios请求 携带 token
    next()
  }else{
    next('/login');
  }

}) */

/* router.afterEach((to,from,next)=>{
  //全局后置守卫业务
}) */

export default router
