import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Container, Main, Header, Aside, Menu, Submenu, MenuItem, MenuItemGroup, Button, Dropdown, DropdownMenu, DropdownItem, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem, Form, FormItem, Input, Select, Switch, DatePicker, Option, Dialog, Pagination } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// 一共有三个 less 文件，所以我们可以再新建一个 index.less 文件，在里面引入这三个 less 文件
import '@/assets/less/index.less'
import '@/api/mock.js'

Vue.config.productionTip = false
// 按需引入
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    store.commit('addMenu', router)
  }
}).$mount('#app')
