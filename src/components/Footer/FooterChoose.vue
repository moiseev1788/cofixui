<script setup>
    import FooterLang from './FooterLang.vue';
    import FooterSocial from './FooterSocial.vue';
</script>

<template>
    <div class="footer-choose">
        <div class="footer-choose-col">
            <div class="footer-logo"><img src="../../assets/img/cofix-white.svg" alt=""></div>
        </div>
        <div class="footer-choose-col">
            <FooterSocial />
            <FooterLang />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .footer-choose {
        @apply flex w-full;
        @media screen and (max-width: 756px) {
            @apply flex-col-reverse gap-8;
        }
        &-col {
            @apply flex;
            &:nth-child(1) {
                @apply w-1/3;
                @media screen and (max-width: 756px) {
                    @apply w-full justify-center;
                }
            }
            &:nth-child(2) {
                @apply w-2/3 flex gap-4;
                @media screen and (max-width: 756px) {
                    @apply w-full flex-col items-center;
                }
            }
        }
    }
</style>