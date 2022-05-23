import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//全局样式
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'


import SvgIcon from '@/components/SvgIcon'

//注册全局组件
Vue.component('svg-icon', SvgIcon)


Vue.use(ElementUI)
Vue.config.productionTip = false


require('../mock/test')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
