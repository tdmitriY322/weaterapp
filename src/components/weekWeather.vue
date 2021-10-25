<template>
    <div class="week">
        <div class="container">
            <div class="week__wrapper">
                <div class="week__header">
                    <div class="week__text"></div>
                    <div class="week__more">
                        <div class="week__seeMore">9 дней</div>
                        <a href="" class="week__arrow"></a>
                    </div>
                </div>
                <div class="week__tabel">
                    <div class="week__items">
                        <div class="week__day">{{ weekDay }}</div>
                        <img src="@/assets/icons/weatherConditionIcon/clouds.png" alt="" class="week__img">
                        <div class="week__condition">{{ weekCondition }}</div>
                        <div class="week__degree">{{ weekDegree }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>