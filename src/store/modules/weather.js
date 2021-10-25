export default { 
    actions: {
        async fetchWeather(context, data) {
            console.log('log data', data);
            try{
                // const res = await fetch ('https://api.openweathermap.org/data/2.5/weather?q='+ data +'&appid=c48f8c1593eeb60c0a54b8e60f0a7172');
                const res = await fetch ('http://api.openweathermap.org/data/2.5/weather?q=' + data +'&lang=ru&appid=c48f8c1593eeb60c0a54b8e60f0a7172')
                const weather = res.json();
                
                context.commit('UPDATE_WEATHER', weather);
                return weather;

                
            } catch (error) {
                console.error(error);
            }
        },
 
        
    },
    mutations: {
        UPDATE_WEATHER(state, weather) {
            state.weather = weather;
        },


    },
    state: {
        weather: [],
        
        cites: [
            {
                id: 1, 
                key: "London",
                title: "Лондон"
            }, 
        ],
        city: '',

    },
    getters: {   
        STATE(state){
            return state;
        }

    },
    // created() {
    //     this.$eventBus.$on('showName', ({cityName}) =>{
    //         this.fetchWeather.city = cityName;
    //         console.log(cityName);
    //     });
        
    // }
  
    // created() {
    //     this.$eventBus.$on('searchStart', ({cityName}) => {
    //        this.city = cityName;
    //        console.log(this.city);
    //    });
    // },

};  