<template>
  <el-container>
    <!--侧边栏容器-->
    <sidebar/>
    <!--外层容器-->
    <el-container>
      <!--顶栏容器-->
      <el-header>
        <header-container/>
      </el-header>
      <!--主要区域容器-->
      <el-main>
       <!--<router-view/>-->
        <!--tabs-->
        <tabs/>
      </el-main>
      <!--底部容器-->
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import HeaderContainer from 'components/container/header/Header'
  import Sidebar from 'components/container/sidebar/Sidebar'
  import Tabs from 'components/container/tabs/Tabs'

  export default {
    name: "Container",
    components: {
      HeaderContainer,
      Sidebar,
      Tabs
    },
  }
</script>

<style scoped>
  .el-header {
    background-color: #3c8dbc;
  }

  .el-aside {
    background-color: #2f424e;
  }

  .el-main {
    background-color: #f5f2f5;
  }


</style>
