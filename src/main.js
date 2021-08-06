import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ImagePlugin } from 'bootstrap-vue'
import VueSwal from 'vue-swal'
Vue.use(ImagePlugin)
// Vue.use(Axios,VueAxios)
Vue.use(VueAxios, Axios)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSwal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
