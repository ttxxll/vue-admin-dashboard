<template>
    <div class="login-container">
      <el-form :model="form" class="login-form" @submit.native.prevent="onSubmit">
        <h3>登录</h3>
        <el-form-item>
          <el-input v-model="form.username" placeholder="用户名" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="密码" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" style="width: 100%">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        if (this.form.username && this.form.password) {
          // 模拟登录成功，保存token
          localStorage.setItem('token', 'fake-token')
          this.$router.push('/')
        } else {
          this.$message.error('请输入用户名和密码')
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    width: 350px;
    margin: 150px auto;
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,.1);
  }
  .login-form h3 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  