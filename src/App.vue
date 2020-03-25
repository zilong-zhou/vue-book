<template>
  <div id="app">
    <container ref="child"></container>
  </div>
</template>

<script>
import Container from 'components/container/Container'

export default {
  name: 'App',
  components: {
    Container
  },
  data() {
    return {
      screenWidth: document.body.clientWidth,
    }
  },
  mounted() {
      const that = this;
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
  },
  methods: {
    changeChild() {
      this.$refs.child.isCollapse = true;
    }
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val
        this.timer = true
        setTimeout( ()=> {
          // 打印screenWidth变化的值
          // console.log(this.screenWidth)
          if(this.screenWidth <= 800){
            // this.$refs.child.isCollapse = true;
            this.$store.state.isCollapse = true
          }
          this.timer = false
        }, 400)
      }
    },
  }
}
</script>

<style>
  @import "assets/css/app.css";
</style>
