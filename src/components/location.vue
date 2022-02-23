<template>
    <div>
        <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>
    </div>           
</template>


<script>
    export default {
        data() {
            return {
                map: null,
                myCoordinates: {
                    lat: 0,
                    lng: 0
                },
            }
        },
        created() {
            if(localStorage.center) {
                this.myCoordinates = JSON.parse(localStorage.center);
            } else {
                this.$getLocation({})
                    .then(coordinates => {
                        this.myCoordinates = coordinates;
                    })
                    .catch(error => alert(error));
            }
            if(localStorage.zoom) {
                this.zoom = parseInt(localStorage.zoom);
            }
        },
        mounted() {
            this.$refs.mapRef.$mapPromise.then(map => this.map = map);
        },
        methods: {
           
        },
        computed: {
            mapCoordinates() {
                if(!this.map) {
                    return {
                        lat: 0,
                        lng: 0
                    };
                }
                return {
                    lat: this.map.getCenter().lat().toFixed(4),
                    lng: this.map.getCenter().lng().toFixed(4)
                }
            }
        }
    }
</script>
