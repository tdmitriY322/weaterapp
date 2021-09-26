export default { 
    actions: {
        async fetchWeather(context, city) {
            const res = await fetch ('api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=c48f8c1593eeb60c0a54b8e60f0a7172');
            const weather = await res.json();
            context.commit('updateWeather', weather);
            // как информаию передавать из app сюад?
        }
        
    },
    mutations: {
        updateWeather(state, weather) {
            state.weather = weather;
            console.log('123213', state.weather);
        }

    },
    state: {
        weather: [],
        cites: [
            {
                id: 1, 
                key: "London",
                title: "Лондон"
            }
        ]

    },
    getters: {
        STATE(state){
            return state;
        }
    },
}