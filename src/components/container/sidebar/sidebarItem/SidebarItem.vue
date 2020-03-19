<template>
  <el-menu
          background-color="#293846"
          text-color="#fff"
          active-text-color="#018cb6"
          :collapse="isCollapse"
          :collapse-transition="false"
          unique-opened
          router
          :default-active="this.$router.name"
          >
    <!--一级菜单-->
    <el-submenu :index="item.path+''" v-for="item in menu" :key="item.id">
      <!--一级菜单的模板区域-->
      <template slot="title" >
        <!--图标-->
        <i :class="item.icon"></i>
        <!--文本-->
        <span><b>{{item.name}}</b></span>
      </template>
      <!--二级菜单-->
      <el-menu-item  :index="sub.path+''" v-for="sub in item.submenu" :key="sub.id" @click="handleOpen2(sub)">
        <template slot="title">
          <!--图标-->
          <i :class="sub.icon"></i>
          <!--文本-->
          <span>{{sub.name}}</span>
        </template>
      </el-menu-item>
    </el-submenu>

  </el-menu>
</template>

<script>
  import menu from 'config/menu.config.js'
  import {mapActions} from 'vuex'
  export default {
    name: "SidebarItem",
    data() {
      return {
        menu: menu
      }
    },
    computed: {
      isCollapse() {
        return this.$store.state.isCollapse;
      },
      isActive() {
        // return this.$route.path
        return this.$router.name
      }
    },
    methods: {
      // 调用 注册vuex内注册的editableTabs方法
      ...mapActions({
        handleOpen2:'editableTabs'
      })
    }

  }
</script>

<style scoped>
  .el-menu {
    border-right: none;
  }
</style>
