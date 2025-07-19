<template>
    <el-aside width="200px" class="sidebar">
      <!-- 顶部标识 -->
      <div class="sidebar-header">
        <div class="logo">1</div>
      </div>
      <!-- 菜单 -->
      <el-menu
        default-active="1"  
        class="el-menu-vertical-demo"
        background-color="#2f4050"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        :unique-opened="true"
      >
        <!-- 首页菜单 -->
        <el-menu-item 
          index="/" 
        >
          <i class="el-icon-s-home"></i>  <!-- 图标 -->
          <span slot="title">首页</span>
        </el-menu-item>
  
        <!-- 业务管理子菜单 -->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>业务管理</span>
          </template>
          <!-- 商户业务（对应 MerchantBusiness 组件） -->
          <el-menu-item 
            index="/merchant-business"
          >
            <i class="el-icon-s-shop"></i>
            <span slot="title">商户业务</span>
          </el-menu-item>
          <!-- 商户管理（对应 MerchantManage 组件） -->
          <el-menu-item 
            index="/merchant-manage"
          >
            <i class="el-icon-user"></i>
            <span slot="title">商户管理</span>
          </el-menu-item>
          <!-- 充值记录（对应 RechargeRecord 组件） -->
          <el-menu-item 
            index="/recharge-record"
          >
            <i class="el-icon-money"></i>
            <span slot="title">充值记录</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    computed: {
      // 动态计算当前激活的菜单（根据当前路由路径）
      activeMenu() {
        return this.$route.path || '/';  // 默认为首页
      }
    },
    mounted() {
      // 初始化时设置默认激活的菜单
      this.$nextTick(() => {
        this.$refs.menu.activeIndex = this.activeMenu;
      });
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #2f4050;
    color: #fff;
  }
  .sidebar-header {
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid #3a4b5c;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
  }
  /* 修复图标和文字对齐问题 */
  .el-menu-item i, .el-submenu__title i {
    margin-right: 8px;
  }
  </style>