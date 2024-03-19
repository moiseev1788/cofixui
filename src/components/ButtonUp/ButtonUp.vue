


<template>
    <button @click="toTop" class="button-up">
        <span class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="23" viewBox="0 0 40 23" fill="none">
                <path d="M37.5176 22.3477L18.0721 2.90222L20.4292 0.545199L39.8746 19.9906L37.5176 22.3477Z" fill="#FDFDFD"/>
                <path d="M0.984375 19.9902L20.4298 0.544798L22.7868 2.90182L3.3414 22.3473L0.984375 19.9902Z" fill="#FDFDFD"/>
            </svg>  
        </span>
        <span class="title">наверх</span>
    </button>
</template>

<style lang="scss" scoped>
    .button-up {
        @apply bg-primary-500 text-neutral-50 font-stratos w-[64px] rounded-full inline-flex self-start flex-col items-center justify-center pt-2 pl-2 pr-2 pb-6 gap-2 animate-bounce;
        @media screen and (max-width: 756px) {
            @apply absolute bottom-0 right-0;
        }
        @media screen and (max-width: 568px) {
            @apply w-[48px] pb-5 gap-1;
        }
        &:hover {
            @apply bg-primary-600
        }
        .title {
            @apply [writing-mode:vertical-lr] text-xl font-stratos ml-[5px];
            @media screen and (max-width: 568px) {
                @apply text-base ml-[4px];
            }
        }
        .icon {
            @apply w-[40px] h-[40px] min-w-[40px];
            @media screen and (max-width: 568px) {
                @apply w-[30px] h-[30px] min-w-[30px];
            }
            svg {
                @apply w-full h-full;
            }
        }
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
    }
</style>

<script>
export default {
    methods: {
        toTop: function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
}
</script>