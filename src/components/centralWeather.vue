<template>
    <main class="main">
        <div class="container">
            <div class="main__wrapper">
                <div class="main__condition">
                    {{ condition }} <!-- передается сосояние: облачно -->
                </div>
                <div class="main__degrees">
                    {{ degrees }} <!-- градусы -->
                </div>
                <div class="main__options">
                    <div class="main__min">
                        <img src="@/assets/icons/weatherConditionIcon/cloth.png" alt="" class="main__img">
                        <div class="main__number">{{ minMaxDegr }}</div>
                    </div>
                    <div class="main__wet">
                        <img src="@/assets/icons/weatherConditionIcon/wetPic.png" alt="" class="main__img">
                        <div class="main__number">{{ wetCondition }}</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>


export default ({
    data() {
        return {
            condition: "Облачно",
            degrees: "10" + "°",
            minMaxDegr: "-13" + "°",
            wetCondition: "80" + "%"
        }
        
    },
})
</script>

