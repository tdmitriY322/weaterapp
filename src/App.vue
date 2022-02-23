<template>
 <div>
    <background></background>
    <!-- <centralWeather></centralWeather> -->
    <!-- <dayWeather></dayWeather> -->
    <!-- <footerWeater></footerWeater> -->
    <!-- <location/> -->
    <div>
        <router-view>
          <headerWeather></headerWeather>
        </router-view>
    </div>
   
 </div>
</template>

<script>
import headerWeather from './components/headerWeather.vue'
// import centralWeather from './components/centralWeather.vue'
import background from './components/background.vue'
// import location from './components/location.vue'
// import dayWeather from './components/dayWeather.vue'
// import footerWeater from './components/footerWeater.vue'
// import { mapActions, mapGetters } from './store/index'
 
export default {
  name: 'App',
  computed: {

  },
  components: { 
    headerWeather,
    // location,
    // centralWeather,
    background,
    // dayWeather,
    // footerWeater,

  },
  methods: {
   
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
