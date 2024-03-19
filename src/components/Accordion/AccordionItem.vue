<script setup>
    import { inject, onUnmounted } from 'vue'

    const props = defineProps({
        title: {
            required: true,
            type: String
        }
    })

    const register = inject('accordion-register')

    const { expanded, toggle, unregister } = register()

    onUnmounted(unregister)
</script>

<template>
    <div class="accordion-item" :class="{ expanded }">
        <div class="accordion-header" @click="toggle">
            <span class="accordion-title">{{ title }}</span>
            <span class="accordion-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect y="22" width="48" height="3.99999" fill="#1B1B1B"/>
                    <rect x="26" width="48" height="4" transform="rotate(90 26 0)" fill="#1B1B1B"/>
                </svg>
            </span>
        </div>
        <div v-if="expanded" class="accordion-body">
           <p>
                <slot />
           </p> 
        </div>
    </div>
  </template>
  
<style lang="scss" scoped>
    .accordion {
        &-item {
            @apply flex flex-col border-t-[1px] border-neutral-600;
            &.expanded {
                .accordion-header {
                    .accordion-title {
                        @apply text-primary-500;
                    }
                    .accordion-icon svg rect {
                        &:nth-child(2) {
                            @apply fill-none;
                        }
                    }
                }
            }
        }
        &-header {
            @apply flex items-center justify-between gap-4 cursor-pointer pt-4 pb-4;
            @media screen and (max-width: 414px) {
                @apply pt-3 pb-3;
            }
            &:hover {
                .accordion-title {
                    @apply text-primary-500;
                }
            }
        }
        &-icon {
            @apply w-[48px] h-[48px] flex items-center justify-center;
            @media screen and (max-width: 414px) {
                @apply w-[36px] h-[36px];
            }
            svg {
                @apply w-[48px] h-[48px];
                @media screen and (max-width: 414px) {
                    @apply w-[32px] h-[32px];
                }
            }
        }
        &-title {
            @apply text-xl text-secondary-500 font-stratos;
            @media screen and (max-width: 414px) {
                @apply text-xl;
            }
            @media screen and (max-width: 320px) {
                @apply text-base;
            }
        }
        &-body {
            @apply pb-8;
            @media screen and (max-width: 568px) {
                @apply pb-4;
            }
            p {
                @apply text-xl text-secondary-500 font-stratos;
                @media screen and (max-width: 414px) {
                    @apply text-base;
                }
                @media screen and (max-width: 375px) {
                    @apply text-sm;
                }
            }
        }
    }
</style>