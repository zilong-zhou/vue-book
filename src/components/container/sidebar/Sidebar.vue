<template>

  <el-aside :width="isCollapse ? '64px': '200px'">
    <!--顶部logo-->
    <top-logo/>
    <!--侧边栏菜单区域-->
    <sidebar-item/>
  </el-aside>
</template>

<script>
  // import sidebarItem from 'config/sidebarItem.config'
  import TopLogo from 'components/container/sidebar/topLogo/TopLogo'
  import SidebarItem from 'components/container/sidebar/sidebarItem/SidebarItem'

  export default {
    name: "Sidebar",
    components: {
      TopLogo,
      SidebarItem
    },
    computed: {
      isCollapse() {
          return this.$store.state.isCollapse;
      }
    }
  }
</script>

<style scoped>
</style>
