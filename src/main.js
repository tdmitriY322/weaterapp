import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/index'
import * as VueGoogleMaps from "vue2-google-maps";
import VueRouter from 'vue-router'
import router from '../src/router/index'
import Vuetify from 'vuetify'
// import '@mdi/font/css/materialdesignicons.css';
import VueGeolocation from 'vue-browser-geolocation';

Vue.use(VueGeolocation);

Vue.use(VueRouter);

Vue.use(Vuetify);
//   , {
//   iconfont: 'mdi'
// });

// Vue.prototype.$eventBus = new Vue();


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBnUijX3bTEXVGDIAZAD2DvFgXgu6LDxN8",
    libraries: "places", // necessary for places input
    region: "uk,en"
  }
});

Vue.use(require('vue-moment'));

Vue.config.productionTip = false

Vue.use(Vuex)

export const eventBus = new Vue();

new Vue({
  Vuetify,
  store: store,
  render: h => h(App) ,
  router
}).$mount('#app')
