<template>
  <div class="shrink-container" @click="toggleCollapse">
    <i v-if="!isCollapse" class="el-icon-s-fold"/>
    <i v-else class="el-icon-s-unfold" />
  </div>
</template>

<script>
  export default {
    name: "Shrink",
    methods: {
      // 点击按钮折叠和展开
      toggleCollapse(){
        this.$store.state.isCollapse = !this.$store.state.isCollapse;
      },
    },
    computed: {
      isCollapse() {
        return this.$store.state.isCollapse;
      }
    },
  }
</script>

<style scoped>
  .shrink-container {
    color: #fff;
    line-height: 60px;
    float: left;
    cursor: pointer;
  }
</style>
