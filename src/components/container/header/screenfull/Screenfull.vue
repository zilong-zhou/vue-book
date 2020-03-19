<template>
  <div>
    <span class="el-icon-full-screen"/>全屏显示
  </div>
</template>

<script>
  import screenfull from 'screenfull'

  export default {
    name: "Screenfull",
    data() {
      return {
        isFullscreen: false // 默认不全屏
      }
    },
    methods: {
      full() {
        if(!screenfull.isEnabled){
          this.$message({
            message: '浏览器不支持全屏',
            type: 'warning'
          })
          return false
        }
        screenfull.toggle()
      }
    }
  }
</script>

<style scoped>

</style>
