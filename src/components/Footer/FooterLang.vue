<template>
    <div class="footer-lang">
        <div class="footer-lang-list">
            <span class="footer-lang-item">Английский</span>
            <span class="footer-lang-item">Польский</span>
        </div>
        <div class="footer-lang-title">
            <span class="title">Русский</span>
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1.13672 3.41748L8.91489 11.1957L7.97208 12.1385L0.19391 4.36029L1.13672 3.41748Z" fill="#FDFDFD"/>
                    <path d="M15.75 4.36035L7.97182 12.1385L7.02902 11.1957L14.8072 3.41754L15.75 4.36035Z" fill="#FDFDFD"/>
                </svg>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .footer-lang {
        @apply rounded-lg max-w-[400px] w-full ml-auto relative; 
        @media screen and (max-width: 1100px) {
            @apply max-w-[380px];
        }
        @media screen and (max-width: 1024px) {
            @apply max-w-full;
        }
        &:hover {
            .footer-lang-list {
                @apply flex;
            }
            .footer-lang-title {
                @apply border-t-0 rounded-b-lg rounded-t-none;
                .title {
                    @apply text-primary-500;
                }
            }
            .footer-lang-title .icon {
                @apply rotate-180;
            }
        }
        &-list {
            @apply hidden flex-col absolute bottom-[60px] w-full border-t-[1px] border-l-[1px] border-r-[1px] border-neutral-50 rounded-t-lg bg-secondary-500;
            @media screen and (max-width: 375px) {
               @apply bottom-[48px]; 
            }
        }
        &-item {
            @apply w-full h-full flex items-center justify-center relative h-[48px] text-xl text-neutral-50 font-stratos;
            &:hover {
                @apply text-primary-500;
            }
            @media screen and (max-width: 375px) {
                @apply text-base; 
            }
        }
        &-title {
            @apply w-full h-full flex items-center justify-center relative h-[64px] border-[1px] border-neutral-50 rounded-lg;
            @media screen and (max-width: 375px) {
               @apply h-[48px]; 
            }
            .title {
                @apply text-xl text-neutral-50 font-stratos;
                @media screen and (max-width: 375px) {
                    @apply text-base; 
                }
            }
            .icon {
                @apply absolute right-0 mr-4 w-[16px] h-[16px] flex items-center justify-center transition-all; 
                svg {
                    @apply w-[16px] h-[16px];
                }
            }
        }
    }
</style>