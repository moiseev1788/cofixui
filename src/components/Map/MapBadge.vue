<script setup>

import {defineProps} from "vue";

const props = defineProps({
    flag: {
        type: String,
        default: 'flag'
    },
    country: {
        type: String,
        default: 'country'
    },
})

function ImagesUrl() {
  return new URL(`../../assets/img/flag/${props.flag}`, import.meta.url)
}
</script>

<template>
    <div class="map-badge">
        <div class="map-badge-item israile">
            <div class="country"><img :src="ImagesUrl()" alt=""></div>
            <div class="name">{{ country }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .map-badge {
        @apply flex justify-center mt-4;
        &-item {
            @apply inline-flex items-center h-16 gap-4 border-[1px] border-neutral-500 rounded-full;
            @media screen and (max-width: 414px) {
                @apply h-12 gap-2;
            }
            .country {
                @apply w-16 h-16 rounded-full overflow-hidden border-neutral-500 border-[1px];
                @media screen and (max-width: 414px) {
                    @apply w-12 h-12;
                }
                img {
                    @apply w-full h-full;
                }
            }
            .name {
                @apply text-xl font-stratos text-secondary-500 pr-6;
                @media screen and (max-width: 414px) {
                    @apply pr-4;
                }
                @media screen and (max-width: 320px) {
                    @apply text-sm;
                }
            }
        }
    }
</style>