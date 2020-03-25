<template>
  <div>
    这是首页
    <el-button @click="test">拿后端数据测试</el-button>
  </div>
</template>

<script>
  import ElButton from "element-ui/packages/button/src/button";
  export default {
    name: "Home",
    components: {ElButton},
    methods: {
      test(){
        this.$axios.get("/Main/test")
          .then(res=>{
            console.log(res)
          })
          .catch(err=>{
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>

</style>
