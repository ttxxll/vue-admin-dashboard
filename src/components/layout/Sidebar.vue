<template>
  <!-- 根据 sidebarCollapsed 的值，动态添加或移除 collapsed 类 -->
  <el-aside :class="{ 'collapsed': sidebarCollapsed }" class="sidebar">
    <!-- 顶部标识 -->
    <div class="sidebar-header">
      <div class="logo">1</div>
    </div>
    <!-- 菜单 -->
    <el-menu ref="menu" default-active="1" class="el-menu-vertical-demo" background-color="#2f4050" text-color="#fff"
      active-text-color="#ffd04b" router :unique-opened="true">
      <!-- 首页菜单 -->
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i> <!-- 图标 -->
        <span slot="title">首页</span>
      </el-menu-item>

      <!-- 业务管理子菜单 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>业务管理</span>
        </template>
        <!-- 商户管理 -->
        <el-menu-item index="/merchant-manage" v-if="!sidebarCollapsed">
          <i class="el-icon-user"></i>
          <span slot="title">商户管理</span>
        </el-menu-item>
        <!-- 商户业务 -->
        <el-menu-item index="/merchant-business" v-if="!sidebarCollapsed">
          <i class="el-icon-s-shop"></i>
          <span slot="title">商户业务</span>
        </el-menu-item>
        <!-- 充值记录 -->
        <el-menu-item index="/recharge-record" v-if="!sidebarCollapsed">
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
  // computed 是 Vue.js 中用于定义计算属性的选项，它允许你声明性地创建依赖于其他状态的派生状态。
  // 计算属性的核心优势是自动追踪依赖、缓存结果、提升性能，是 Vue 响应式系统的重要组成部分
  computed: {
    // 动态计算当前激活的菜单（根据当前路由路径）
    activeMenu() {
      return this.$route.path || '/';  // 默认为首页
    },
    // computed 会动态追踪依赖（这里依赖 $store.state），当依赖变化时，计算属性会自动重新计算
    // Vue 中模板与计算属性的关联完全依赖名称匹配
    sidebarCollapsed() {
      return this.$store.state.sidebarCollapsed;
    }
  },
  watch: {
    // 监听路由变化
    '$route'(to, from) {
      console.log('路由变化:', from.path, '→', to.path);
      console.log(this.activeMenu);
      this.$nextTick(() => {
        this.$refs.menu.activeIndex = this.activeMenu;
      });
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
/* 基础样式 */
.sidebar {
  width: 200px;
  min-width: 200px;
  /* 防止被其他样式覆盖 */
  max-width: 200px;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  z-index: 1;
  height: 100%;
  min-height: 100vh;
  background-color: #2f4050;
}

/* 折叠状态 */
.sidebar.collapsed {
  width: 64px !important;
  /* 强制覆盖 */
  min-width: 64px;
  max-width: 64px;
}

.sidebar-header {
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-bottom: 1px solid #3a4b5c;
  transition: opacity 0.3s ease;
}

/* 确保菜单宽度跟随侧边栏 */
.el-menu-vertical-demo {
  width: 100% !important;
}


/* 折叠时隐藏文字 */
.sidebar.collapsed .el-menu-item span,
.sidebar.collapsed .el-submenu__title span {
  display: none;
}

/* 折叠时图标居中 */
.sidebar.collapsed .el-menu-item i,
.sidebar.collapsed .el-submenu__title i {
  margin: 0 auto;
}

/* 折叠时缩小log */
.sidebar.collapsed .sidebar-header {
  opacity: 0.8;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #ffd04b;
  /* 使用对比色确保可见 */
}

.el-menu-item,
.el-submenu__title {
  height: 48px !important;
  line-height: 48px !important;
}

/* 图标剧中 */
.el-menu-item i,
.el-submenu__title i {
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  margin-right: 16px;
  font-size: 18px;
  transition: all 0.3s ease;
}

/* 子菜单展开样式 */
.sidebar.collapsed .el-submenu .el-menu {
  position: absolute;
  left: 64px;
  top: 0;
  width: 160px;
  z-index: 100;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
}
</style>