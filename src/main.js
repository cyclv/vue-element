// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'  //引入store

import echarts from 'echarts'


Vue.prototype.$echarts = echarts

import BaiduMap from 'vue-baidu-map'

Vue.use(ElementUI,BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'RiyTMxuMEPkKAoMHW47HD3XmG0pEhXNr'
})
Vue.config.productionTip = false
// Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
