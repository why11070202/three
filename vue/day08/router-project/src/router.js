import Vue from 'vue'
import Router from 'vue-router'

import Meishi from "./views/Meishi.vue"
import Home from "./views/Home.vue"
import Index from "./views/Home/Index"
import Fx from "./views/Home/Fx"
import Order from "./views/Home/Order.vue"
import Mine from "./views/Home/Mine.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
        name: 'meishi',
        path: '/meishi',
        component: Meishi,
    },{
        name: 'home',
        path: '/home',
        component: Home,
         children: [{
            name: 'index',
            // 第二层路由的path是没有/
            path: 'index',
            component: Index,
        },{
            name: 'fx',
            path: 'fx',
            component: Fx,
        }, {
            name: 'order',
            path: 'order',
            component: Order,
        }, {
            name: 'mine',
            path: 'mine',
            component: Mine,
        }],
    },{
        path: '/',
        // 别名
        alias: '/index.html',
        redirect: () => {
            // 我要跳进/123获取路由的一些详情信息
            // console.log(to)
            // 方法接收 目标路由 作为参数
            // return 重定向的 字符串路径/路径对象
            return '/home/index'
        }
    }
  ]
})
