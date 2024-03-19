<script setup>

import {defineProps} from "vue";

const props = defineProps({
    name: {
        type: String,
        default: 'name'
    },
    imagesPeople: {
        type: String,
        default: 'img'
    },
})

function ImagesUrl() {
  return new URL(`../../assets/img/testimonials/${props.imagesPeople}`, import.meta.url)
}
</script>

<template>
    <div class="testimonails-card">
        <div class="testimonails-card-images"><img :src="ImagesUrl()" alt=""></div>
        <span class="testimonails-card-name">{{ name }}</span>
        <div class="testimonails-card-description">
            <div class="icon-top">
                <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Quote">
                        <path id="Vector" d="M32 25.1875L32 12.0625L20.7919 12.0625C21.2675 6.81375 25.6925 2.6875 31.0625 2.6875L32 2.6875L32 0.8125L31.0625 0.8125C24.6581 0.812499 19.3913 5.77875 18.9106 12.0625C18.8869 12.3719 18.875 12.6844 18.875 13L18.875 25.1875L32 25.1875Z" fill="#D9D9D9"/>
                        <path id="Vector_2" d="M13.125 25.1875L13.125 12.0625L1.91688 12.0625C2.3925 6.81375 6.8175 2.6875 12.1875 2.6875L13.125 2.6875L13.125 0.8125L12.1875 0.8125C5.78313 0.812499 0.516252 5.77875 0.0356266 12.0625C0.0118763 12.3719 1.09306e-06 12.6844 1.06547e-06 13L0 25.1875L13.125 25.1875Z" fill="#D9D9D9"/>
                    </g>
                </svg>
            </div>
            <p><slot/></p>
            <div class="icon-bottom">
                <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Quote">
                        <path id="Vector" d="M0 0.8125L0 13.9375L11.2081 13.9375C10.7325 19.1863 6.3075 23.3125 0.9375 23.3125H0L0 25.1875H0.9375C7.34188 25.1875 12.6087 20.2213 13.0894 13.9375C13.1131 13.6281 13.125 13.3156 13.125 13L13.125 0.8125L0 0.8125Z" fill="#D9D9D9"/>
                        <path id="Vector_2" d="M18.875 0.8125V13.9375L30.0831 13.9375C29.6075 19.1863 25.1825 23.3125 19.8125 23.3125H18.875V25.1875H19.8125C26.2169 25.1875 31.4837 20.2213 31.9644 13.9375C31.9881 13.6281 32 13.3156 32 13V0.8125L18.875 0.8125Z" fill="#D9D9D9"/>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .testimonails {
        &-card {
            @apply flex flex-col bg-neutral-500 p-4 rounded-2xl w-full h-full gap-4;
            @media screen and (max-width: 320px) {
                    @apply gap-2 rounded-xl;
                }

            &-images {
                @apply max-w-full h-[280px] overflow-hidden rounded-lg;
                @media screen and (max-width: 320px) {
                    @apply h-[180px];
                }

                img {
                    @apply w-full h-full object-cover;
                }
            }
            &-name {
                @apply text-1xl font-stratos text-secondary-500 w-min;
                @media screen and (max-width: 320px) {
                    @apply text-xxl;
                }
            }
            &-description {
                @apply flex flex-col;
                p {
                    @apply text-xl font-stratos text-secondary-500;
                    @media screen and (max-width: 320px) {
                        @apply text-base;
                    }
                }
                .icon-top {
                    @apply mb-2;
                    @media screen and (max-width: 320px) {
                        @apply w-5 h-5;
                        svg {
                            @apply w-full h-full;
                        }
                    }
                }
                .icon-bottom {
                    @apply ml-auto mt-2;
                    @media screen and (max-width: 320px) {
                        @apply w-5 h-5;
                        svg {
                            @apply w-full h-full;
                        }
                    }
                }
            }
        }
    }
</style>