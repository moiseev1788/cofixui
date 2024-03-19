<script setup>
const props = defineProps({
    number: {
        type: String,
        default: '0',
    },
    label: {
        type: String,
        default: 'Label'
    },
});
</script>


<template>
    <div class="badge">
        <span class="badge-number">{{ number }}</span>
        <span class="badge-label">{{ label }}</span>
    </div>
</template>

<style lang="scss" scoped>
    .badge {
        @apply inline-flex items-center gap-2 px-5 py-2 border-[1px] border-neutral-500 rounded-full;
        @media screen and (max-width: 414px) {
            @apply px-4 py-2 gap-1;
        }
        &-number {
            @apply text-3xl text-primary-500 font-stratos;
            @media screen and (max-width: 568px) {
                @apply text-2xl;
            }
            @media screen and (max-width: 414px) {
                @apply text-1xl;
            }
        }
        &-label {
            @apply text-xl text-secondary-500 font-stratos;
            @media screen and (max-width: 320px) {
                @apply text-base;
            }
        }
    }
</style>