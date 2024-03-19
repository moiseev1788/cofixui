<script setup>

import {defineProps} from "vue";

const props = defineProps({
    title: {
        type: String,
        default: 'Страна'
    },
    number: {
        type: String,
        default: '0'
    },
    img: {
        type: String,
        default: 'img'
    },
})

function CountryUrl() {
  return new URL(`../../assets/img/country/${props.img}`, import.meta.url)
}
</script>

<template>
    <div class="map-card">
        <div class="map-card-images">
            <img :src="CountryUrl()" alt="">
        </div>
        <div class="map-card-content">
            <div class="map-card-title">{{ title }}</div>
            <div class="map-card-bottom">
                <div class="map-card-caption">количество<br>кофеен</div>
                <div class="map-card-number">{{ number }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .map-card {
        @apply w-[calc(33.3%-11px)] h-full flex flex-col;
        @media screen and (max-width: 1024px) {
            @apply w-[calc(50%-8px)]
        }
        @media screen and (max-width: 620px) {
            @apply w-full;
        }
        &-images {
            @apply h-[287px] w-full overflow-hidden rounded-t-2xl rounded-b-none;
            @media screen and (max-width: 320px) {
                @apply h-[214px] rounded-t-xl;
            }
            img {
                @apply w-full h-full object-cover;
            }
        }
        &-content {
            @apply w-full min-h-[180px] bg-neutral-300 p-4 rounded-b-2xl flex flex-col justify-between;
            @media screen and (max-width: 320px) {
                @apply min-h-[134px] rounded-b-xl p-2;
            }
        }
        &-title {
            @apply text-2xl font-stratos text-secondary-500;
            @media screen and (max-width: 320px) {
                @apply text-xxl;
            }
        }
        &-bottom {
            @apply flex items-center justify-between border-t-[1px] border-secondary-500 pt-2;
        }
        &-caption {
            @apply text-xl font-stratos text-secondary-500;
        }
        &-number {
            @apply min-w-[90px] text-center text-2xl text-secondary-500 font-stratos  border-[1px] border-secondary-500 rounded-full pl-4 pr-4;
            @media screen and (max-width: 320px) {
                @apply text-xxl;
            }
        }
    }
</style>