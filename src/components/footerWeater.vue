<template>
    <footer class="footer">
        <div class="footer__wrapper">
            <div class="footer__items">
                <div class="footer__item">
                    <img src="../assets/icons/weatherConditional/nprmal_clouds" alt="Cloud" class="footer__img">
                    <div class="footer__text">Погода</div>
                </div>
                <slot>
                    <!-- слоты для других компонентов -->
                </slot>
            </div>
        </div>
    </footer>
</template>

<style lang="sass">

</style>