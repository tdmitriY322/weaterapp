<template>
    <div class="forecast">
        <div class="forecast__wrapper">
            <button class="button_map button" @click="$router.push('/')">Назад</button>
            <div class="forecast__card">
                <h3 class="forecast__title">Прогноз на неделю</h3>
                <div class="forecast__items" v-for="(item, i) in STATE.someOne" :key="i">
                        <div class="forecast__item">
                            <div class="forecast__day">
                                {{ weekDay(item.dt) }}
                            </div>
                            <div class="forecast__max">
                                <img src="@/assets/icons/weatherConditionIcon/arrow_up.png" alt="" class="forecast__img">
                                {{ parseFloat(item.temp.max - 273.15).toFixed(0) }}°
                            </div>
                            <div class="forecast__min">
                                <img src="@/assets/icons/weatherConditionIcon/arrow_down.png" alt="" class="forecast__img">
                                {{ parseFloat(item.temp.min - 273.15).toFixed(0) }}°
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default({
    data() {
        return {
            day: "",
            maxDegree: '30',
            minDegree: '29',
            daily: [],
            lon: "",
            lat: "",
            a: [],

            
        }
    },
    async created() {
        console.log( "!2!2!2!" ,this.STATE.someOne);
    },
    computed: {
        ...mapGetters(["STATE"]),
    },
    methods: {
        ...mapMutations(["SEND_DAILY_FORECAST"]),
        weekDay(dataTime){
            const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
            return days [this.$moment.unix(dataTime).day()]
            
        },
    },
 
      


    
})
</script>
