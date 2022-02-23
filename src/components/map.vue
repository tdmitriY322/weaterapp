<template>
  <div class="map">

    <button class="button_map button" @click="$router.push('/')">Назад</button>
    <div class="map__map">
      <gmap-map
        v-bind="options"
        id="map"
      >
      </gmap-map>
    </div>

  </div>
</template>


<script>
import { gmapApi } from 'vue2-google-maps';


export default {
  name: "GoogleMap",
  data() {
    return {
      options: {
        zoom: 10,
        center: {
          lat: 39.9995601,
          lng: -75.1395161
        },
        mapTypeId: 'roadmap'
      }
    };
  },
  computed: {
    google: gmapApi
  },
  methods: {
    myclick() {
      console.log(1111111111111111)
    }
  }
};

</script>

<style>
#map {
  height: 100vh;    
  width: 100%;
  margin: 0 auto;
}
.map_container {
    height: 100%;
    width: 100%;   
    background-color: black;     
}
</style>
