<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <div class="h3">
      <h3>{{ isCollapse ? '后台' : '后台管理系统' }}</h3>
    </div>
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu :index="item.path+''" v-for="item in hasChildren" :key="item.path">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item :index="subItem.path"  @click="clickMenu(subItem)">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    clickMenu (item) {
      if (this.$route.path !== item.path) {
        this.$router.push({
          name: item.name
        })
        this.$store.commit('selectMenu', item)
      }
    }
  },
  computed: {
    // 给侧边栏 list 分类，分为有子菜单和无子菜单
    noChildren () {
      return this.asyncMenu.filter(item => !item.children)
    },
    hasChildren () {
      return this.asyncMenu.filter(item => item.children)
    },
    isCollapse () {
      return this.$store.state.tab.isCollapse
    },
    asyncMenu () {
      return this.$store.state.menu
    }
  }
}
</script>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    height: 100%;
    border: none;
    .h3 {
      height: 48px;
      h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        margin: 20px 0;
      }
    }
  }
</style>
