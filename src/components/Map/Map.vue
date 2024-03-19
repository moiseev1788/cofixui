<script setup>
import Badge from '../Badge/Badge.vue';
import MapAnimate from './MapAnimate.vue';
import MapBadge from './MapBadge.vue';


</script>

<template>
    <section class="map mb-page">
        <div class="container">
            <div class="wrapper-page mb-8">
                <h2>Международный бренд</h2>
            </div>
            <div class="map-label mb-4">
                <Badge number="6" label="стран" />
                <Badge number="10" label="лет" />
                <Badge number="430+" label="кофеен" />
            </div>
            <div class="map-box">
                <MapAnimate />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .map {
        @apply relative mb-[200px];
        @media screen and (max-width: 768px) {
            @apply mb-[150px]
        }
        @media screen and (max-width: 568px) {
            @apply mb-[100px]
        }
        &-label {
            @apply flex gap-4 flex-wrap;
            @media screen and (max-width: 414px) {
                @apply gap-2;
            }
            @media screen and (max-width: 320px) {
                @apply gap-1;
            }
        }
    }

    .box {
        display: flex;
        flex-direction: column;
        &-item {
            border: 1px solid #000;
            width: 300px;
            height: 150px;
            border-radius: 20px;
            font-size: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            &.active {
                &:nth-child(1) {
                    background: red;
                }
                &:nth-child(2) {
                    background: blue;
                }
                &:nth-child(3) {
                    background: green;
                }
                &:nth-child(4) {
                    background: yellowgreen;
                }
                &:nth-child(5) {
                    background: pink;
                }
            }
        }
    }
</style>