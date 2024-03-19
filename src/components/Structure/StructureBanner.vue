<script setup>
    import Button from '../Button/Button.vue'
</script>

<template>
        <div class="invest-banner">
            <div class="invest-banner-title">Инвестиции в открытие кофейни <span class="line">«под ключ»</span></div>
            <div class="invest-banner-bottom">
                <div class="invest-banner-box-price">
                    <div class="invest-banner-price">от <span class="number">5 000 000₽</span></div>
                    <div class="invest-banner-price">от <span class="number">15 000 000₽</span></div>
                </div>
                <p class="invest-banner-description">в зависимости от формата, площади помещения и состояния ремонта</p>
                <Button color="primary" label="открыть кофейню"/>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .invest-banner {
        @apply bg-secondary-500 rounded-2xl p-4 flex flex-col justify-between text-neutral-50 h-[580px];
        @media screen and (max-width: 1024px) {
            @apply h-auto gap-4;
        }
        @media screen and (max-width: 320px) {
            @apply rounded-xl;
        }
        &-title {
            @apply text-2xl font-stratos;
            @media screen and (max-width: 320px) {
                    @apply text-xxl;
                }
            .line {
                @apply relative inline-block;
                &::before {
                    @apply content-[''] absolute bg-line bg-contain bg-no-repeat bottom-0 w-full h-[8px] bg-center;
                }
            }
        }
        &-bottom {
            @apply flex flex-col gap-4;
        }
        &-price {
            @apply text-1xl font-stratos;
            @media screen and (max-width: 320px) {
                @apply text-sm;
            }
            .number {
                @apply text-3xl text-primary-500;
                @media screen and (max-width: 380px) {
                    @apply text-2xl;
                }
                @media screen and (max-width: 320px) {
                    @apply text-1xl;
                }
            }
        }
        &-description {
            @apply text-xl text-neutral-50;
            @media screen and (max-width: 320px) {
                @apply text-sm;
            }
        }
        .button-large {
            @media screen and (max-width: 320px) {
                @apply pt-[8px] pb-[10px] pl-3 pr-3  w-auto min-h-12 text-base cursor-pointer;
            }
        }
    }
</style>