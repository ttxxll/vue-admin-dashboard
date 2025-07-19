<template>
    <el-header class="header-bar">
      <!-- 左侧按钮 -->
      <div class="header-left">
        <el-button icon="el-icon-menu" @click="toggleSidebar"></el-button>
        <el-button icon="el-icon-refresh"></el-button>
      </div>
      <!-- 右侧个人中心 -->
      <div class="header-right">
        <el-dropdown>
          <span class="el-dropdown-link">
            个人中心<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
  </template>
  
  <script>
  export default {
    name: 'HeaderBar',
    methods: {
      toggleSidebar() {
        // 可扩展侧边栏折叠逻辑，这里简单打印
        console.log('切换侧边栏');
      }
    }
  }
  </script>
  
  <style scoped>
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 20px;
  }
  .header-left .el-button,
  .header-right .el-dropdown {
    margin: 0 5px;
  }
  </style>