import Vue from 'vue'



const Meishi = () => import('./views/Meishi.vue')
const Home = () => import('./views/Home.vue')
const Index = () => import('./views/Home/Index')
const Fx = () => import('./views/Home/Fx')
const Order = () => import('./views/Home/Order.vue')
const Mine = () => import('./views/Home/Mine.vue')
const Sign = () => import('./views/Sign')


import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({

    base: process.env.BASE_URL,
    routes: [{
            name: 'meishi',
            path: '/meishi',
            component: Meishi,
        }, {
            name: 'home',
            path: '/home',
            component: Home,
            children: [{
                name: 'index',
                // 第二层路由的path是没有/
                path: 'index',
                component: Index,
            }, {
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
        }, {
            name: 'sign',
            path: '/sign',
            component: Sign,
        },
        {
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
router.beforeEach((to, from, next) => {
    let islogin = false
    if (islogin || to.path === '/sign' || to.path === '/home/index' || to.name === "meishi" || to.name === "fx") {
        //登陆了
        next()
    } else {
        router.push({
            name: 'sign'
        })
    }
})

export default router