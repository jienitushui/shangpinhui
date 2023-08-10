import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入路由
import router from '@/router/router'

new Vue({
  render: h => h(App),
  // 注册路由: 底下k v一致省略
  router
}).$mount('#app')
