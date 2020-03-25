<template>
  <div>
    <el-tabs  v-model="editableTabsValue"
              type="card"
              closable
              @tab-remove="removeTab"
              @tab-click="tabClick($event)">
      <el-tab-pane
              :key="item.id"
              v-for="item in editableTabs"
              :label="item.title"
              :name="item.name">
      </el-tab-pane>
    </el-tabs>
    <router-view/>
  </div>
</template>

<script>
  import ElTabPane from "element-ui/packages/tabs/src/tab-pane";
  export default {
    name: "Tabs",
    components: {ElTabPane},
    computed: {
      // 监听vuex保存的数据
      editableTabs:{
        get(){
          return this.$store.state.tabsPage;
        },
        set(val){
          this.$store.state.tabsPage = val;
        }
      },
      editableTabsValue:{
        get(){
          return this.$store.state.TabsValue;
        },
        set(val){
          this.$store.state.TabsValue = val;
        }
      }
    },
    methods: {
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (targetName == "/home") {
          return false;
        }
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              console.log(nextTab);
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        // 删除时跳转不在停留被删除页
        this.$router.push({name: activeName});
      },
      tabClick(event) {
        //写一个点击tabs跳转
        this.$router.push({name: event.name});
      },
    },
    mounted() {
      console.log(sessionStorage.getItem("tabsPage"));
      if (sessionStorage.getItem("tabsPage")) {
        this.$store.state.tabsPage = JSON.parse(
          sessionStorage.getItem("tabsPage")
        );
        var TabsValue = sessionStorage.getItem("TabsValue");
        this.$store.state.TabsValue = TabsValue;
        this.$router.push({ name: TabsValue });
      }
    }
  }
</script>

<style scoped>

</style>
