import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/index'
import * as VueGoogleMaps from "vue2-google-maps";


Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "places", // necessary for places input
    region: "uk,en"
  }
});

Vue.use(require('vue-moment'));


Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
