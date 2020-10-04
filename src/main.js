import Vue from 'vue'
import App from './App.vue'

// 引入less
import less from 'less'
Vue.use(less)
// 导入路由
import router from './router/index.js'

Vue.config.productionTip = false;
import { Button } from 'vant';
Vue.use(Button)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
