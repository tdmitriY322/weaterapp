export default { 
    actions: {
        async fetchWeather(context, data) {
            console.log('log data', data);
            try{
                const res = await fetch ('http://api.openweathermap.org/data/2.5/weather?q=' + data +'&lang=ru&appid=c48f8c1593eeb60c0a54b8e60f0a7172')
                const weather = res.json();
                context.commit('UPDATE_WEATHER', weather);
                return weather;
            } catch (error) {
                console.error(error);
            }
        },
        async fetchWeatherOnDay(context, coord) {
            console.log('log data', coord.lat, coord.lon );
            try{
                const responseOnday = await fetch ('https://api.openweathermap.org/data/2.5/onecall?lat=' + coord.lat + '&lon=' + coord.lon + '&appid=c48f8c1593eeb60c0a54b8e60f0a7172')
                const dailyWeather = responseOnday.json();
                context.commit('UPDATE_DAY_WEATHER', dailyWeather);
                return dailyWeather;

                
            } catch (error) {
                console.error(error);
            }
        },
        async sendDailyData(context, dailyData) {
            console.log('daily DATA', dailyData);
            try{
                const dailyArr = dailyData;
                context.commit('SEND_DAILY_FORECAST', dailyArr);
                return dailyArr;
            } catch (error) {
                console.error(error);
            }
        },
 
        
    },
    mutations: {
        UPDATE_WEATHER(state, weather) {
            state.weather = weather;
        },
        UPDATE_DAY_WEATHER(state, dailyWeather){
            state.dailyWeather = dailyWeather;
        },
        SEND_DAILY_FORECAST(state, dailyArr){
            console.log("SEND_DAILY_FORECAST", dailyArr);
            state.someOne = dailyArr;
        
        },



    },
    state: {
        weather: [],
        dailyWeather: [],
        someOne: [],
        cites: [
            {
                id: 1, 
                key: "London",
                title: "Лондон"
            }, 
        ],
        city: '',
        variable: [], 

    },
    getters: {   
        STATE(state){
            return state;
        }

    },

};  