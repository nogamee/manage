export default {
  state: {
    isCollapse: false,
    // 面包屑导航数据
    tabList: [
      {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],
    // 高亮
    currentMenu: ''
  },
  mutations: {
    collapseMenu (state) {
      state.isCollapse = !state.isCollapse
    },
    selectMenu (state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val
        // 判断点击的菜单是否存在
        const result = state.tabList.findIndex(item => item.name === val.name)
        if (result === -1) {
          state.tabList.push(val)
        }
      } else {
        state.currentMenu = null
      }
    }
  }
}
