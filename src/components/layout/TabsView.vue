<template>
  <el-tabs v-model="activeTab" type="card" @tab-remove="handleTabRemove" @tab-click="handleTabClick">
    <el-tab-pane v-for="(tab, index) in tabs" :key="tab.path" :label="tab.title" :name="tab.path"
      :closable="tab.closable">
    </el-tab-pane>
  </el-tabs>
</template>
  
<script>
import router from '@/router'

export default {
  name: 'TabsView',
  data() {
    return {
      tabs: [{ path: '/', name: 'Home', title: '首页', closable: false }],
      //组件路由值，默认激活首页tab
      activeTab: '/',
      // 缓存路由映射配置表
      routeMenuMap: new Map()
    }
  },
  watch: {
    // 监听路由变化，更新标签页
    '$route.path': {
      immediate: true,
      handler(newPath) {
        this.addTab(newPath)
      }
    }
  },
  created() {
    // 组件创建时初始化映射表
    this.initRouteMenuMap(router.options.routes);
  },
  mounted() {
    // 初始化时添加当前路由对应的标签
    this.addTab(this.$route.path);
  },
  methods: {
    initRouteMenuMap(routeList) {
      // 递归遍历路由配置，初始化路由映射表
      routeList.forEach(route => {
        this.routeMenuMap.set(route.path, { path: route.path, name: route.name, title: route.meta?.title || route.name });
        if (route.children && route.children.length) {
          this.initRouteMenuMap(route.children)
        }
      })
    },

    // 添加新标签页
    addTab(path) {
      if (path === '/') {
        return;
      }
      const menuInfo = this.getMenuInfoByPath(path)
      if (menuInfo && !this.tabs.some(tab => tab.path === path)) {
        this.tabs.push({
          path: menuInfo.path,
          name: menuInfo.name,
          title: menuInfo.title,
          closable: true
        })
      }
      this.activeTab = path;
    },

    // 根据路由获取菜单项信息
    getMenuInfoByPath(path) {
      return this.routeMenuMap.get(path) || null;
    },
    handleTabRemove(tabPath) {
      this.tabs = this.tabs.filter(tab => tab.path !== tabPath);
      // 如果关闭的是当前标签，路由才会切换，否则保持当前路由界面
      if (tabPath === this.$route.path && this.tabs.length > 0) {
        this.activeTab = this.tabs[this.tabs.length - 1].path;
        this.$router.push(this.activeTab);
      } else if (this.tabs.length === 0) {
        // 兜底：全部关闭时回到首页（可根据需求调整）
        this.$router.push('/');
        this.tabs.push({ path: '/', name: 'Home', title: '首页', closable: false });
        this.activeTab = '/';
      } else if (tabPath !== this.$route.path) {
        // 非当前标签 仅更新tabs
      }

    },
    handleTabClick(clickTab) {
      let tab = this.tabs.find(tab => tab.path === clickTab.name);
      if (this.$route.path === tab.path) {
        return;
      }
      this.$router.replace(tab.path);
    }
  }
}
</script>