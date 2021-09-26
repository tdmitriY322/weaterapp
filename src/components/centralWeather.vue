<template>
    <main class="main">
        <div class="main__wrapper">
            <div class="main__condition">
                {{ condition }} <!-- передается сосояние: облачно -->
            </div>
            <div class="main__degrees">
                {{ degrees }} <!-- градусы -->
            </div>
            <div class="main__options">
                <div class="main__min">
                    <img src="" alt="" class="main__img">
                    <div class="main__number"></div>
                </div>
                <div class="main__wet">
                    <img src="" alt="" class="main__img">
                    <div class="main__number"></div>
                </div>
            </div>
        </div>
    </main>
</template>