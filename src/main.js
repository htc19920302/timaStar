import Vue from 'vue'
import App from './App'
import router from "./router/router"

new Vue({
  el: '#app',

  template: '<App/>',
  router,
  components: { App }
})
