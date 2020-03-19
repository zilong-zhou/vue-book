<template>
  <div class="top-container">
    <a href="#">
      <img src="~assets/logo.png" class="aside-logo">
      <h1 class="aside-title">图书管理系统</h1>
    </a>
  </div>
</template>

<script>
  export default {
    name: "TopLogo"
  }
</script>

<style scoped>
  .top-container {
    position: relative;
    background-color: #367fa9;
    height: 60px;
    line-height: 50px;
    text-align: center;
    /*background: #2b2f3a;*/
    overflow: hidden;
    cursor: pointer;
  }
  .aside-logo {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    vertical-align: middle;
    margin-right: 0px;
    line-height: 60px;

  }
  .aside-title {
    display: inline-block;
    margin: 0;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 60px;
    vertical-align: middle;
    letter-spacing: 5px;
    margin-left: 12px;

  }
</style>
