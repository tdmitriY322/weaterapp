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
            <div class="main__min">
              <img
                :src="'${sourse}'"
                alt=""
                class="main__img"
              />
              <div class="main__number">{{ parseFloat(dataOfCity.main.temp_max - 273.15).toFixed(0) }}°</div>
            </div>
            <div class="main__wet">
              <img
                src="@/assets/icons/weatherConditionIcon/wetPic.png"
                alt=""
                class="main__img"
              />
              <div class="main__number">{{ wetCondition }}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
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
      condition: "Облачно",
      degrees: "10" + "°",
      maxDegr: "-13" + "°",
      wetCondition: "80" + "%",
      iconTemp: "cloth" ,
      iconCodeWeather: "",
      iconSpecCode: '@2x.png',
      sourse: "",
    };
  },
  async created() {
    await this.searchStart();
    console.log("created log");
    // this.fetchWeather(this.city)
  },
  methods: {

    ...mapActions(["fetchWeather"]),

    async searchStart() {
      let response = await this.fetchWeather(this.city);
      this.$set(this, "dataOfCity", response);
      this.degrees = this.dataOfCity.main.temp;
      this.selectedCity = this.dataOfCity.sys.country
      this.condition = this.dataOfCity.weather[0].main
      this.maxDegr = this.dataOfCity.main.temp_max
      this.iconCodeWeather = this.dataOfCity.weather[0].icon
      this.sourse = "http://openweathermap.org/img/wn/" + this.iconCodeWeather + this.iconSpecCode
      console.log("res", response, this.sourse);
    },

    changeClass() {
      if (this.isActive == false) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
};
</script>

<style lang="sass">
@import '@/assets/sass/style'
</style>



