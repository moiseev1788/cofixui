<script setup>
    import FooterNav from './FooterNav.vue';
    import FooterHotButton from './FooterHotButton.vue';
    import FooterChoose from './FooterChoose.vue';
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-title-m">
                <div class="title">Больше, чем просто кофейная компания</div>
            </div>
            <div class="footer-container">
                <div class="footer-hot-button">
                    <FooterHotButton label="Хочешь посмотреть меню?">Переходи и любуйся тем, что мы для тебя приготовили</FooterHotButton>
                    <FooterHotButton label="Хочешь купить франшизу?">Посмотри самые выгодные условия для наших партнеров</FooterHotButton>
                    <FooterHotButton label="Умеешь петь красиво?">Участвуй в нашем специальном проекте и стань звездой!</FooterHotButton>
                </div>
                <div class="footer-nav">
                    <div class="footer-nav-title">
                        <div class="title">Больше, чем просто кофейная компания</div>
                    </div>
                    <FooterNav />
                </div>
                <FooterChoose />
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        @apply bg-secondary-500 pt-16 pb-16 flex flex-col;
        @media screen and (max-width: 991px) {
            @apply pt-8 pb-8;
        }
        @media screen and (max-width: 320px) {
            @apply pt-4 pb-4;
        }
        &-container {
            @apply flex flex-col gap-16;
            @media screen and (max-width: 414px) {
                @apply gap-8;
            }
        }
        &-hot-button {
            @apply flex gap-4;
            @media screen and (max-width: 991px) {
                @apply flex-col w-full;
            }
        }
        &-nav {
            @apply flex;
            &-title {
                @apply text-2xl text-neutral-50 font-stratos w-1/3;
                @media screen and (max-width: 1024px) {
                    @apply hidden;
                }
                .title {
                    @apply max-w-[332px];
                }
            }
        }
        &-title-m {
            @apply text-2xl text-neutral-50 font-stratos w-1/2 hidden mb-16 hidden;
            @media screen and (max-width: 1024px) {
                @apply flex;
            }
            @media screen and (max-width: 650px) {
                @apply w-full;
            }
            @media screen and (max-width: 414px) {
                @apply mb-8;
            }
            @media screen and (max-width: 320px) {
                @apply text-1xl;
            }
        }
    }
</style>