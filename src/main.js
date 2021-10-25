import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/index'


Vue.config.productionTip = false
Vue.use(Vuex)
export const eventBus = new Vue()


new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
