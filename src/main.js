import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import baiduMap from "vue-baidu-map"
import ECharts from 'vue-echarts' //图表

Vue.component('chart', ECharts)//// 注册图表组件
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(baiduMap,{//配置百度Map
  ak:"M5vpLXIPED3hE7GmQx0eAwosxy4ca5LG"
});

Vue.prototype.bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
