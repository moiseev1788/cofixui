<script setup>
    import Button from '../Button/Button.vue'
</script>

<template>
    <section class="banner">
        <div class="container">
            <a href="" class="banner-box">
                <div class="banner-icon">
                    <img src="../../assets/img/icon/brand.svg" alt="">
                </div>
                <div class="banner-title">Скидка 20% на мастер-франшизу до 13.04.2024</div>
                <Button color="secondary" size="small" rounded="rounded-full" label="оставить заявку" />
            </a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .banner {
        @apply mt-[32px];
        @media screen and (max-width: 1024px) {
            @apply mt-4;
        }
        &-icon {
            @apply min-w-[32px] w-[32px] h-[32px];
            img {
                @apply w-full h-full object-contain;
            }
        }
        &-box {
            @apply h-[56px] flex items-center p-4 gap-4 rounded-[32px] bg-accent-500;
            @media screen and (max-width: 320px) {
                @apply gap-2 p-3;
            }
        }
        &-title {
            @apply text-base font-stratos text-neutral-50;
            @media screen and (max-width: 320px) {
                @apply text-sm;
            }
        }
        .button {
            @apply ml-auto min-w-[162px];
            @media screen and (max-width: 568px) {
                @apply hidden;
            }
        }
    }
</style>