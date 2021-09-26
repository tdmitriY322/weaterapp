<template>
    <div class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__hamburger" v-bind:class="{_active : isActive}" @click="changeClass">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="header__city">
                    <div class="header_name">
                        {{ selectedCity }}
                    </div>
                    <div class="header__search">
                        <!-- поиск города -->
                    </div>
                </div>
                <div class="header__time">
                    <!-- тут часы  -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default ({
    data () {
        return {
            isActive: false,
        }
    },
    methods: {
        changeClass() {
            if (this.isActive == false) {
                this.isActive = true;
            }else{
                this.isActive = false;
            }

        }
    }
})
</script>

<style lang="sass">
@import '@/assets/sass/style.sass'


</style>



