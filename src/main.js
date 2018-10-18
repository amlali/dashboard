import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.use(VueResource);
Vue.prototype.$Url="https://eservecab-staging.herokuapp.com/";
new Vue({
  el: '#app',
  render: h => h(App)
})
