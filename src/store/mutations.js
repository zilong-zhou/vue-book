import router from '../router/router'

export default {

  editableTabs: (state, obj) => {
    // 浅拷贝 state.tabsPage
    console.log(state, obj);
    let arr = Array.from(state.tabsPage);
    // 判断数组内是否为空
    if (arr.length !== 0) {
      // 使用 Array.some 去判断是否存在对象信息
      var even = function(obj) {
        return arr.some(item => {
          return item.name === obj.path;
        });
      };
      // even方法 如果对象存在返回true,不存在则返回flase
      // 加！触发 true 代码块
      if (!even(obj)/* 如果不存在将对象push进数组内bing */) {
        // 将tabs所需参数push进arr数组
        arr.push({ title: obj.name, name: obj.path });
        // 赋值给tabsPage参数
        state.tabsPage = arr;
        window.sessionStorage.setItem("tabsPage", JSON.stringify(arr));
        window.sessionStorage.setItem("TabsValue", obj.path)
        // 赋值给TabsValue参数
        state.TabsValue = obj.path;
        // 跳转
        router.push({ name: obj.path });
      } else {
        // 如果存在 只做跳转选中
        // 赋值给TabsValue参数
        state.TabsValue = obj.path;
        window.sessionStorage.setItem("TabsValue", obj.path);
        // 跳转
        router.push({ name: obj.path });
      }
    } else {
      // 如果为0
      // 将tabs所需参数push进arr数组
      arr.push({
        title: obj.name,
        name: obj.path
      });
      // 赋值给tabsPage参数
      state.tabsPage = arr;
      // 赋值给TabsValue参数
      state.TabsValue = obj.path;
      // 跳转
      router.push({ name: obj.path });

    }
  }
}
