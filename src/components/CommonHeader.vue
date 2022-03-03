<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
      <!-- <h3 style="color: #fff">{{ tags.label }}</h3> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="hover" size="medium"  placement="bottom-start">
        <span>
          <img :src="$store.state.userImg" class="user">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="exit">我要退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonHeader',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    })
  },
  methods: {
    handleMenu () {
      this.$store.commit('collapseMenu')
    },
    exit () {
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
  header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    .l-content {
      display: flex;
      align-items: center;
      .el-button {
        margin-right: 20px;
      }
    }
    .r-content {
      margin-right: 20px;
      .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
</style>
