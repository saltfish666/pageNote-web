import Vue from 'vue'
import App from './App.vue'

// import 'bootstrap/dist/css/bootstrap.min.css'
/*
无论是否在组件内引用，样式都不会对组件生效
*/

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = true

const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  render: (h) => h(App)
}).$mount(root)
