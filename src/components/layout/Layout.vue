<template>
    <div class="layout">
      <!-- 侧边栏组件 -->
      <sidebar />
      <div class="main-content">
        <!-- 顶部栏组件 -->
        <header-bar />
        <el-main style="padding: 20px;">
          <!-- 这里渲染匹配路由的组件，也就是具体页面内容，比如首页等 -->
          <router-view /> 
        </el-main>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/layout/Sidebar.vue'
  import HeaderBar from '@/components/layout/HeaderBar.vue'
  
  export default {
    components: {
      Sidebar,
      HeaderBar
    }
  }
  </script>
  
  <style>
  .layout {
    display: flex;
    height: 100vh;
  }
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  </style>