import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueResource from 'vue-resource'
import store from './store/store'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios  // 全局注册
axios.defaults.baseURL = '/api'  //关键代码
// axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(VueResource); //跨域资源访问

Vue.prototype.$axios = axios;

Vue.http.options.emulateJson = true //设置全局表单提交格式

axios.defaults.withCredentials = true; //允许携带cookie


Vue.use(ElementUI)


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
