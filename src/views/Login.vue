<template>
  <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="login-container" @keyup.enter.native="login">
    <h3 class="login-title">系统登录</h3>
    <el-form-item label="用户名" label-width="80px" prop="username" class="username">
      <el-input type="input" v-model="form.username" autocomplete="off" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" label-width="80px" prop="password">
      <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item class="login-submit">
      <el-button type="primary" @click="login" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Message } from 'element-ui'
import { getMenu } from '@/api/data.js'
export default {
  name: 'login',
  data () {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            message: '用户名长度不能小于3位',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 3,
            message: '密码长度不能小于3位',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    async login () {
      const { data: res } = await getMenu(this.form)
      if (res.code === 20000) {
        this.$store.commit('clearMenu')
        this.$store.commit('setMenu', res.data.menu)
        this.$store.commit('setToken', res.data.token)
        this.$store.commit('addMenu', this.$router)
        this.$router.push('/')
      } else {
        Message.closeAll()
        Message.error(res.data.message)
      }
      // getMenu(this.form).then(({ data: res }) => {
      //   if (res.code === 20000) {
      //     this.$store.commit('clearMenu')
      // this.$store.commit('setMenu', res.data.menu)
      // this.$store.commit('setToken', res.data.token)
      // this.$store.commit('addMenu', this.$router)
      // this.$router.push('/')
      //   } else {
      //     Message.error(res.data.message)
      //   }
      // })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background-clip: padding-box;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 0 0 25px #cac6c6;
}
.login-title {
  margin: 0 auto 30px auto;
  text-align: center;
  color: #505458;
}
.login-submit {
  margin: 5px auto 0 auto;
}
</style>
