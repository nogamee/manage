<template>
  <el-form ref="form" :model="form" label-width="100px" class="login-container" status-icon :rules="rules">
    <h3 class="login-title">登录页面</h3>
    <el-form-item label="用户名" prop="username" label-width="80px">
      <el-input v-model="form.username" placeholder="请输入用户名" type="input" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password" label-width="80px">
      <el-input v-model="form.password" placeholder="请输入密码" type="password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'login1',
  data () {
    return {
      form: {
        // username: '',
        // password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'bulr' },
          { min: 3, message: '用户名长度不能小于3位', trigger: 'bulr' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'bulr' },
          { min: 4, message: '密码长度不能小于4位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {

    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 350px;
  border: 1px solid #eee;
  border-radius: 15px;
  background-color: #fff;
  padding: 35px 35px 15px 35px;
  box-shadow: 0 0 15px #cac6c6;
  .login-title {
    text-align: center;
    margin-bottom: 30px;
    color: #505458;
  }
}
</style>
