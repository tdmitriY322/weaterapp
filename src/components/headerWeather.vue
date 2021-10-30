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
            <div class="header__name">
              {{ selectedCity }}
            </div>
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
                          <img :src="sourse" :alt="altImg" class="day__icon">
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
  </div>
</template>

<script>
// :src="'@/assets/icons/weatherConditionIcon/'+ iconTemp +'.png'"
// import { eventBus } from './main'
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isActive: false,
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
      hourly: [],
    };
  },
  async created() {
    await this.searchStart();
    console.log("created log");
  },
  computed: {

  },

  methods: {

    ...mapActions(["fetchWeather", "fetchWeatherOnDay"]),

    async searchStart() {
      let response = await this.fetchWeather(this.city);
      this.$set(this, "dataOfCity", response);
      this.degrees = this.dataOfCity.main.temp;
      this.selectedCity = this.dataOfCity.sys.country
      this.condition = this.dataOfCity.weather[0].main
      this.iconCodeWeather = this.dataOfCity.weather[0].icon
      this.altImg = this.dataOfCity.weather[0].description

      this.lon = this.dataOfCity.coord.lon
      this.lat = this.dataOfCity.coord.lat
      this.sourse = "http://openweathermap.org/img/wn/" + this.iconCodeWeather + this.iconSpecCode;
      console.log("res!!!", response, "lon", this.lon, this.lat);

      await this.callWeatherOnDay({
        lon: this.lon,
        lat: this.lat

      })
    },
    async callWeatherOnDay(coord) {
      let responseOnDay = await this.fetchWeatherOnDay(coord)
      this.hourly = responseOnDay.hourly.slice(0, 12)

      this.$set(this, "dataOnDay", responseOnDay);
      console.log("!!!!!!!ALERT", responseOnDay, this.hourly);

    },
    changeClass() {
      if (this.isActive == false) {
        this.isActive = true;
      } else {
        this.isActive = false;
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



