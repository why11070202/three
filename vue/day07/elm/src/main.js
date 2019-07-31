import Vue from 'vue'
import App from './App.vue'
import vant from "../vant/index";
import axios from "axios";
vant()
Vue.config.productionTip = false

Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
}).$mount('#app')