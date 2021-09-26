<template>
 <div>
   <headerWeather></headerWeather>
 </div>
</template>

<script>
import headerWeather from './components/headerWeather.vue'
// import { mutations } from './store/index'
 
export default {
  name: 'App',
  computed: {
  
  },
  components: { 
    headerWeather,

  }
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
