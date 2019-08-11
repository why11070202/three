import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const router = new Router({
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
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../views/list.vue')
        },
      ]
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('../views/reg.vue')
    }, {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/detail.vue')
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
    },
    {
      path: '/icon5',
      name: 'icon5',
      component: () => import('../views/list.vue')
    }, {
      path: '/city',
      name: 'city',
      component: () => import('../views/city.vue')
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('../views/car.vue'),
    }, {
      path: '/set',
      name: 'set',
      component: () => import('../views/set.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue'),
    },
    {
      path: "/",
      redirect: () => {
        return '/home/index'
      }
    }

  ]
})
router.beforeEach((to, from, next) => {
  // let islogin = false
  let islogin = (function () {
    let cookie = document.cookie;
    var arr = cookie.split("; ");
    for (let i = 0; i < arr.length; i++) {
      let arr2 = arr[i].split("=");
      if ('islogin' == arr2[0]) {
        return arr2[1];
      }
    }
  })()

  // console.log(tel);
  const nextRoute = ['car', 'my'];
  if (nextRoute.indexOf(to.name) >= 0) {
    if (!islogin) {
      router.push({
        name: 'login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router