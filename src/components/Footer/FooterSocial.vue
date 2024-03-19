<template>
    <div class="footer-social">
        <a href="" class="footer-social-item">IG</a>
        <a href="" class="footer-social-item">TG</a>
        <a href="" class="footer-social-item">VK</a>
    </div>
</template>

<style lang="scss" scoped>
    .footer-social {
        @apply flex gap-8;
        @media screen and (max-width: 1024px) {
            @apply gap-4;
        }
        &-item {
            @apply w-[64px] h-[64px] rounded-lg border-[1px] border-neutral-50 flex items-center justify-center text-xl text-neutral-50 font-stratos;
            &:hover {
                @apply border-primary-500 text-primary-500;
            }
            @media screen and (max-width: 375px) {
                @apply w-[48px] h-[48px] text-base;
            }
        }
    }
</style>