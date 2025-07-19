<template>
    <el-header class="header-bar">
        <!-- 左侧按钮 -->
        <div class="header-left">
            <el-button icon="el-icon-menu" @click="toggleSidebar">
                <i class="el-icon-s-fold" v-if="sidebarCollapsed"></i>
                <i class="el-icon-s-unfold" v-else></i>
            </el-button>
            <el-button icon="el-icon-refresh"></el-button>
        </div>
        <!-- 右侧个人中心 -->
        <div class="header-right">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    个人中心<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="settings">设置</el-dropdown-item>
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-header>
</template>
  
<script>
export default {
    name: 'HeaderBar',
    data() {
    return {
      sidebarCollapsed: false // 侧边栏折叠状态
    };
  },
    methods: {
        toggleSidebar() {
            // 触发 TOGGLE_SIDEBAR 突变
            this.$store.commit('TOGGLE_SIDEBAR');
        }, 
        handleCommand(command) {
            if (command === 'logout') {
                this.logout();
            }
        },
        logout() {
            // 清除登录状态
            localStorage.removeItem('token');
            // 跳转到登录页
            this.$router.push('/login');
        }

    },

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