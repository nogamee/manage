<template>
  <el-container style="heigth:100%">
    <el-aside width="auto">
      <!-- 驼峰命名下的组件需要改成小写并用 - 连接 -->
      <common-asise></common-asise>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
</el-container>
</template>

<script>
import CommonAsise from '@/components/CommonAsise.vue'
import CommonHeader from '@/components/CommonHeader.vue'
// import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    CommonAsise,
    CommonHeader
  },
  created () {
    // this.$store.dispatch('getList')
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>
