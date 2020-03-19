<template>
  <div class="header-div">
    <shrink/>
    <div class="right-container">
      <el-menu
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#3c8dbc"
              text-color="#fff"
              active-text-color="#f5f2f5">
        <el-menu-item index="1">
          <search/>
        </el-menu-item>
        <el-menu-item index="2" >
          <screenfull ref="full"/>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <span class="el-icon-s-platform"/>我的工作台
          </template>
          <workbench/>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
  import Shrink from 'components/container/header/shrink/Shrink'
  import Screenfull from 'components/container/header/screenfull/Screenfull'
  import Search from 'components/container/header/search/Search'
  import Workbench from 'components/container/header/workbench/Workbench'

  export default {
    name: "Header",
    components: {
      Shrink,
      Search,
      Screenfull,
      Workbench

    },
    methods: {
      handleSelect(key) {
        // console.log(key, keyPath);
        if(key == 1){
          console.log('搜索');
        }

        if(key == 2){
          this.$refs.full.full()
        }

        if(key == 3){
          console.log('我的工作台');
        }
      }
    }
  }
</script>

<style scoped>

  .right-container {
    float: right;
    height: 60px;
  }

  li {
    list-style: none;
    float: left;
    color: #fff;
  }

  .el-menu, .el-menu-item{
    font-weight: bolder;
  }


</style>
