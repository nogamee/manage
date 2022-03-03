import Vue from 'vue'
import Vuex from 'vuex'
import { getListAPI } from '@/api/listAPI.js'
import tab from './tab'
import Cookie from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    userImg: require('@/assets/images/user-default.png'),
    token: '',
    menu: []
  },
  mutations: {
    initList (state, res) {
      state.list = res
    },
    setToken (state, value) {
      state.token = value
      Cookie.set('token', value, {
        expires: 7
      })
    },
    clearToken (state) {
      state.token = ''
      Cookie.remove('token')
    },
    getToken (state) {
      state.token = Cookie.get('token') || state.token
    },
    setMenu (state, val) {
      state.menu = val
      Cookie.set('menu', JSON.stringify(val), {
        expires: 7
      })
    },
    clearMenu (state) {
      state.menu = []
      Cookie.remove('menu')
    },
    addMenu (state, router) {
      if (!Cookie.get('menu')) {
        return
      }
      const menu = JSON.parse(Cookie.get('menu'))
      state.menu = menu
      const menuArray = []
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`../views/${item.url}`)
            return item
          })
          menuArray.push(...item.children)
        } else {
          item.component = () => import(`../views/${item.url}`)
          menuArray.push(item)
        }
      })
      // 路由的动态添加
      menuArray.forEach(item => {
        router.addRoute('Main', item)
      })
    }
  },
  actions: {
    async getList (context) {
      const { data: res } = await getListAPI()
      context.commit('initList', res)
    }
  },
  modules: {
    tab
  }
})
