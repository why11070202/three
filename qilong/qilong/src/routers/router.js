import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue'),
      children: [{
          path: 'index',
          name: 'index',
          component: () => import('../components/Home.vue')
        }, {
          path: 'activity',
          name: 'activity',
          component: () => import('../views/Home/activity.vue')
        },
        {
          path: 'near',
          name: 'near',
          component: () => import('../views/Home/near.vue')
        },
        {
          path: 'my',
          name: 'my',
          component: () => import('../views/Home/my.vue')
        },
        // {
        //   path: 'activity',
        //   name: 'activity',
        //   component: () => import('../views/activity.vue')
        // }, 
      ]
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('../views/reg.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/icon1',
      name: 'icon1',
      component: () => import('../views/icon1.vue')
    },
    {
      path: '/icon2',
      name: 'icon2',
      component: () => import('../views/icon2.vue')
    },
    {
      path: '/icon3',
      name: 'icon3',
      component: () => import('../views/icon1.vue')
    },
    {
      path: '/icon4',
      name: 'icon4',
      component: () => import('../views/icon1.vue')
    }, {
      path: '/city',
      name: 'city',
      component: () => import('../views/city.vue')
    },
    {
      path: "/",
      redirect: () => {
        return '/home/index'
      }
    }

  ]
})