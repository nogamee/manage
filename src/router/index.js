import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'login',
  //   component: () => import('@/views/Login.vue')
  // },
  {
    path: '/',
    name: 'Main',
    redirect: '/home',
    component: () => import('../views/Main.vue'),
    children: [
      // {
      //   path: 'home',
      //   name: 'home',
      //   component: () => import('../views/Home/Home.vue')
      // },
      // {
      //   path: 'mall',
      //   name: 'mall',
      //   component: () => import('../views/Mall/Mall.vue')
      // },
      // {
      //   path: 'user',
      //   name: 'user',
      //   component: () => import('../views/User/User.vue')
      // },
      // {
      //   path: 'page1',
      //   name: 'page1',
      //   component: () => import('../views/Other/Page1.vue')
      // },
      // {
      //   path: 'page2',
      //   name: 'page2',
      //   component: () => import('../views/Other/Page2.vue')
      // }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/login1',
    name: 'login1',
    component: () => import('../views/Login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // 防止页面在刷新时 vuex 丢失 token 信息
  store.commit('getToken')
  const token = store.state.token
  if (!token && to.name !== 'login') {
    next('/login')
  } else {
    if (token && to.name === 'login') {
      next('/')
    } else {
      next()
    }
  }
})

export default router
