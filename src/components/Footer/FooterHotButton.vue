<script setup>
    const props = defineProps({
        label: {
            type: String,
            default: 'Title'
        },
    })
</script>

<template>
    <a href="" class="hot-button">
        <div class="hot-button-content">
            <div class="hot-button-header">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M13.915 0.115234L16.8863 6.73865L23.6727 4.15736L21.0914 10.951L27.7148 13.9223L21.0914 16.8936L23.6727 23.6801L16.8863 21.0988L13.915 27.7293L10.9437 21.0988L4.15731 23.6801L6.73857 16.8936L0.115234 13.9223L6.73857 10.951L4.15731 4.15736L10.9437 6.73865L13.915 0.115234Z" fill="#F05633"/>
                    </svg>
                </div>
                <div class="title">{{ label }}</div>
            </div>
            <div class="hot-button-description">
                <slot/>
            </div>
        </div>
        <div class="hot-button-border">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                    <path d="M0.611328 14.6143L8.3895 6.83608L9.33231 7.77889L1.55414 15.5571L0.611328 14.6143Z" fill="#1B1B1B"/>
                    <path d="M1.55469 0.000976562L9.33286 7.77915L8.39005 8.72196L0.611879 0.943785L1.55469 0.000976562Z" fill="#1B1B1B"/>
                </svg>
            </div>
        </div>
    </a>
</template>

<style lang="scss" scoped>
    .hot-button {
        @apply flex min-h-[240px] w-full;
        @media screen and (max-width: 991px) {
            @apply min-h-[123px];
        }
        &:hover .hot-button-border {
            @apply bg-primary-500;
        }
        &-content {
            @apply border-t-[1px] border-l-[1px] border-b-[1px] rounded-l-2xl p-4 flex flex-col justify-between gap-4;
            @media screen and (max-width: 991px) {
                @apply w-full p-3;
            }
            @media screen and (max-width: 414px) {
                @apply w-full p-3 rounded-l-xl;
            }
        }
        &-header {
            @apply flex gap-2;
            .icon {
                @apply min-w-[36px] w-[36px] h-[36px] flex items-center justify-center;
                @media screen and (max-width: 414px) {
                    @apply min-w-[26px] w-[26px] h-[26px];
                }
                @media screen and (max-width: 375px) {
                    @apply min-w-[22px] w-[22px] h-[22px];
                }
                svg {
                    @apply w-full h-full;
                }
            }
            .title {
                @apply text-1xl text-neutral-50 font-stratos;
                @media screen and (max-width: 414px) {
                    @apply text-xl;
                }
            }
        }
        &-description {
            @apply text-base text-neutral-50 font-stratos;
            @media screen and (max-width: 375px) {
                @apply text-sm;
            }
        }
        &-border {
            @apply min-w-[64px] bg-neutral-50 flex items-center justify-center rounded-r-2xl;
            @media screen and (max-width: 414px) {
                    @apply min-w-[56px] rounded-r-xl;
                }
            @media screen and (max-width: 375px) {
                @apply min-w-[40px];
            }
        }
    }
</style>