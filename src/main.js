import Vue from 'vue'
import App from './App.vue'
// 引入全局样式文件
import './styles/reset.less'
// 引入组件文件
import { Button, Tab, Tabs } from 'vant';
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'


Vue.config.productionTip = false

// 使用组件文件
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Button);
Vue.use(VueRouter)


new Vue({
  render: h => h(App),
  // 注入路由
  router:router
}).$mount('#app')
