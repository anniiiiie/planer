import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import axios from 'axios'

// задаем основу ссылки 
axios.defaults.baseURL = 'http://127.0.0.1:3000'

Vue.config.productionTip = false

// подключаем глобальный axios во всем приложении
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
