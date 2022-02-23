import VueRouter from "vue-router"

// import map from '../components/map.vue';
import settings from '../components/settings.vue';
import mainPage from '../components/headerWeather.vue';
import dailyForecast from '../components/dailyForecast.vue';
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/map',
            name: 'googleMaps',
            // component: map
            component: () => import('../components/map.vue')
        },
        {
            path: '/settings',
            name: 'userSettings',
            component: settings
        },
        {
            path: '/',
            name: 'main',
            component: mainPage
        },
        {
            path: '/daily',
            name: 'dailyForecast',
            component: dailyForecast
        },
        {
            path: '/location',
            name: 'loaction',
            component: location
        }
    ]
});