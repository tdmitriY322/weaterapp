<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__wrapper">
          <div
            class="header__hamburger"
            v-bind:class="{ active: isActive }"
            @click="changeClass()"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="header__city">
            <!-- <div class="header__name"> -->
              <!-- {{ selectedCity }} -->
            <!-- </div> -->
            <div class="header__search">
              <div class="header__form">
                <input
                  type="text"
                  class="header__input"
                  v-model="city"
                  v-bind:class="{ focus: focusInput }"
                />
              </div>
            </div>
            <button class="button button_header" @click="searchStart()">
              Найти
            </button>
          </div>
        </div>
      </div>
    </header>


      <main class="main">
        <div class="container">
          <div class="main__wrapper">
            <div class="main__condition">
              {{ condition }}
              <!-- передается сосояние: облачно -->
            </div>
            <div class="main__degrees">
              {{ parseFloat(degrees - 273.15).toFixed(0) }}°
              <!-- градусы -->
            </div>
            <div class="main__options">
              <div class="main__max">
                <img
                  src="@/assets/icons/weatherConditionIcon/arrow_up.png"
                  alt=""
                  class="main__img"
                />
                <div class="main__number">{{ parseFloat(dataOfCity.main.temp_max - 273.15).toFixed(0) }}°</div>
              </div>
              <div class="main__min">
                <img
                  src="@/assets/icons/weatherConditionIcon/arrow_down.png"
                  alt=""
                  class="main__img"
                />
                <div class="main__number">{{parseFloat(dataOfCity.main.temp_min - 273.15).toFixed(0) }}°</div>
              </div>
            </div>
          </div>
        </div>
      </main>


        <div class="day">
        <div class="container">
            <div class="day__wrapper">
              <div class="day__date">{{todaysDate()}}</div>
              <div class="day__predict">
                  прогноз на 12 часов
              </div>
              <div class="day__table" >
                <div  v-for="(hour, i) in hourly" :key="i"  >
                  <div class="day__items">
                      <div class="day__condition">
                          <div class="day__time">{{ $moment.unix(hour.dt).format('HH:mm')  }}</div>
                          <!-- <div>{{ hour.dt }}</div> -->
                          <img :src="getIconLink(hour.weather[0].icon)" :alt="altImg" class="day__icon">
                      </div>
                  </div>
                  <div class="day__items">
                      <div class="day__graph">
                          <div class="day__degree">{{ parseFloat(hour.temp - 273.15).toFixed(0) }}°</div>
                          <div class="day__point"></div>
                      </div>
                  </div>
              </div>
              </div>
            </div>
        </div>
    </div>

    <div class="additionally">
      <div class="container">
             
      <div class="additionally__wrapper">
        <div class="additionally__items">
          <div class="additionally__item">
            <div class="additionally__header">
              <img class="additionally__img" src="@/assets/icons/weatherConditionIcon/wet.png" alt="">
              <div class="additionally__name">ВЛАЖНОСТЬ</div>
            </div>
            <div class="additionally__value">{{ additionally.humidity }}%</div>
            <!-- <div class="additionally__description">{{ humidityText }}</div> -->
          </div>
        
          <div class="additionally__item">
            <div class="additionally__header">
              <img class="additionally__img" src="@/assets/icons/weatherConditionIcon/humdity.png" alt="">
              <div class="additionally__name">ВИДИМОСТЬ</div>
            </div>
            <div class="additionally__value">{{ (additionally.visibility)/ 1000}} КМ </div>
            <div class="additionally__description"></div>
          </div>
     
        
          <div class="additionally__item">
            <div class="additionally__header">
              <img class="additionally__img" src="@/assets/icons/weatherConditionIcon/feels.png" alt="">
              <div class="additionally__name ">ОЩУЩАЕТСЯ КАК</div>
            </div>
            <div class="additionally__value feelslike">{{ fellsLike }}°</div>
            <div class="additionally__description"></div>
          </div>

          <div class="additionally__item">
            <div class="additionally__header">
              <img class="additionally__img" src="@/assets/icons/weatherConditionIcon/sunrise.png" alt="">
              <div class="additionally__name">ВОСХОД СОЛНЦА</div>
            </div>
            <div class="additionally__value sunrise">{{ $moment.unix(additionally.sunrise).format('HH:mm')  }}</div>
            <div class="additionally__value sunset">Закат: {{ $moment.unix(additionally.sunset).format('HH:mm')  }}</div>
          </div>
        
        </div>
      </div>
      </div>
    </div>
    

    <div class="menu"
    v-bind:class="{ visible: isVisible }"
    >
      <div class="menu__wrapper">
       
        <ul class="menu__items">
          <li class="menu__item" ><a href="map">Карта</a> </li>
          <li class="menu__item" @click="$router.push('/daily')">Погода на неделю</li>
          <li class="menu__item"><a href="location">Обновить погоду</a> </li>
          <li class="menu__item"><a href="#">Пейзаж</a> </li>
          <li class="menu__item"><a href="settings">Настройки</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from "vuex";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isActive: false,
      isVisible: false,
      focusInput: false,
      selectedCity: "",
      city: "seoul",
      dataOfCity: {},
      condition: "",
      degrees: "",
      iconCodeWeather: "",
      iconSpecCode: '@2x.png',
      sourse: "",
      lon: "",
      lat: "",
      timeNow: "22:00",
      timeDegree: "-7°",
      altImg: "",
      fellsLike: "", 
      hourly: [],
      iconLink: "http://openweathermap.org/img/wn/",
      minDegreeForecast: "",
      maxDegreeForecast: "",
      daily: [],
      additionally: {
         humidity: "", 
         visibility: "",
         fellsLike: "",
         sunrise: "",
         sunset: "", 
      },
      // myCoordinates: {
      //   lat: 0,
      //   lng: 0
      // },
     

    };  
  },
  async created() {
    await this.searchStart();
  },

  watch: {
    // city(value) {
    //   console.log(value);
    // },
    'additionally.fellsLike': function(value) {
      this.fellsLike = parseFloat(value - 273.15).toFixed(0)
      console.log("watcher" ,value);
    },
  },
  computed: {
    ...mapGetters(["STATE"]),

  },
  methods: {
    ...mapActions(["fetchWeather", "fetchWeatherOnDay", "sendDailyData"]),
    ...mapMutations(["SEND_DAILY_FORECAST"]),
    getIconLink(iconeCode) {
      return this.iconLink + iconeCode + this.iconSpecCode
    },
    async searchStart() {
      let response = await this.fetchWeather(this.city);
      this.$set(this, "dataOfCity", response);
      this.degrees = this.dataOfCity.main.temp;
      // this.selectedCity = this.dataOfCity.name
      // this.selectedCity = this.dataOfCity.
      this.condition = this.dataOfCity.weather[0].main

      this.additionally.humidity = this.dataOfCity.main.humidity
      this.additionally.visibility = this.dataOfCity.visibility
      this.additionally.fellsLike = this.dataOfCity.main.feels_like
      this.additionally.sunset = this.dataOfCity.sys.sunset
      this.additionally.sunrise = this.dataOfCity.sys.sunrise

      this.lon = this.dataOfCity.coord.lon
      this.lat = this.dataOfCity.coord.lat
      
      console.log("res!!!", response, "lon", this.lon, this.lat);



      await this.callWeatherOnDay({
        lon: this.lon,
        lat: this.lat 
      })
      // await this.getLoaction()
      
    },
    async callWeatherOnDay(coord) {
      let responseOnDay = await this.fetchWeatherOnDay(coord)
      this.$set(this, "dataOnDay", responseOnDay);
      this.$set(this, 'hourly', responseOnDay.hourly.slice(0, 12))
      // this.additionally.visibility = this.dataOnDay.current.visibility
      // this.iconCodeWeather = this.responseOnDay.hourly.hour.weather[0].icon
      // this.altImg = this.responseOnDay.weather[0].description
      // this.daily = responseOnDay.daily.slice(0, 6)
      this.$set(this, 'daily', responseOnDay.daily.slice(0, 6)) 
      console.log("!!!!!!!ALERT", this.hourly);
      console.log('!!!!!!!',this.daily); // Здесь получил погоду на неделю, как ее передать?
      
      // let sendDaily = await this.sendDailyData(this.daily)
      // this.$set(this, 'dailydata', sendDaily)

      this.SEND_DAILY_FORECAST(this.daily);

      console.log("DAILY DATA", this.STATE.someOne); 
      console.log( "[rwerwer", this.$store.state.someOne);

      
    },
    // async getLoaction() {
    //   const coords = this.$geolocation.coords
    //   return coords
    //  },
    changeClass() {
      if (this.isActive == false) {
        this.isActive = true;
        this.isVisible = true;
      } else {
        this.isActive = false;
        this.isVisible = false;
      }
    },
    todaysDate() {
      const months = [
      "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov",
      "Dec",];
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let dateNow = new Date();
      let month = months[dateNow.getMonth()];
      let day = days[dateNow.getDay()];
      let date = dateNow.getDate();
      let year = dateNow.getFullYear();
      this.timeNow = dateNow.getHours()

      return `${month} ${date} ${day} ${year}`;
    },

  },



};

</script>

<style lang="sass">
@import '@/assets/sass/style'
</style>



