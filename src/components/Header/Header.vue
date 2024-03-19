

<template>
    <header class="header">
        <div class="container">
            <nav class="nav">
                <a href="/" class="logo"><img src="../../assets/img/cofix.svg" alt=""></a>
                <div class="nav-modal" :class="{ active: activeShow }">
                    <HeaderNav />
                    <div class="choose">
                        <div class="coffee">
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                    <path d="M7.47278 16.0053L7.00806 15.6069C6.36741 15.0705 0.773438 10.2393 0.773438 6.70545C0.773438 3.00551 3.77284 0.00610352 7.47278 0.00610352C11.1727 0.00610352 14.1721 3.00551 14.1721 6.70545C14.1721 10.2394 8.57816 15.0705 7.94016 15.6096L7.47278 16.0053ZM7.47278 1.4547C4.57425 1.45798 2.22534 3.80689 2.22206 6.70542C2.22206 8.92548 5.66369 12.472 7.47278 14.0952C9.28191 12.4713 12.7235 8.92279 12.7235 6.70542C12.7202 3.80689 10.3713 1.45801 7.47278 1.4547Z" fill="#1B1B1B"/>
                                    <path d="M7.47197 9.36093C6.00534 9.36093 4.81641 8.17199 4.81641 6.70537C4.81641 5.23874 6.00534 4.0498 7.47197 4.0498C8.93859 4.0498 10.1275 5.23874 10.1275 6.70537C10.1275 8.17199 8.93862 9.36093 7.47197 9.36093ZM7.47197 5.37755C6.73866 5.37755 6.14419 5.97202 6.14419 6.70534C6.14419 7.43865 6.73866 8.03312 7.47197 8.03312C8.20528 8.03312 8.79975 7.43865 8.79975 6.70534C8.79975 5.97202 8.20531 5.37755 7.47197 5.37755Z" fill="#1B1B1B"/>
                                </svg>
                            </span>
                            <div class="coffee-title">кофейни</div>
                        </div>
                        <HeaderLang />   
                    </div>
                </div>
                <div class="header-burger" @click="activeShow = !activeShow">
                    <div class="burger" :class="{ active: activeShow }"></div>
                </div> 
            </nav>
        </div>
        <HeaderNavBottom />
    </header>
</template>

<style lang="scss" scoped>
    .header { 
        @apply w-full border-b-[1px] border-neutral-600 min-h-full relative flex items-center flex-col z-10;
        &-burger {
            @apply hidden;
            @media screen and (max-width: 1024px) {
                @apply flex ml-auto;
                .burger {
                    @apply relative h-[4px] w-[48px] bg-transparent bg-secondary-500;
                    @media screen and (max-width: 568px) {
                        @apply w-[36px];
                    }
                    &:after {
                        @apply content-[''] absolute bg-secondary-500 top-[10px] left-0 h-[4px] w-full;
                    }
                    &::before {
                        @apply content-[''] absolute bg-secondary-500 top-[-10px] left-0 h-[4px] w-full;
                    }
                    &.active {
                        @apply bg-transparent;
                        &::before {
                            @apply top-0 rotate-45;
                        }
                        &::after {
                            @apply top-0 -rotate-45;
                        }
                    }
                }
            }
        }
    }
    .nav {
        @apply flex items-center min-h-20 pt-2 pb-2;
        @media screen and (max-width: 568px) {
            @apply min-h-16;
        }
        .logo {
            @apply h-12 w-auto inline-flex justify-start;
            @media screen and (max-width: 1024px) {
                @apply h-10 w-auto;
            }
            img {
                @apply w-auto h-full;
            }
        }
        .choose {
            @apply flex items-center ml-auto gap-9 min-h-20;
            @media screen and (max-width: 1100px) {
                @apply gap-6;
            }
            @media screen and (max-width: 1024px) {
                @apply hidden gap-4 ml-0 items-start pl-4 pr-4;
            }
            .coffee {
                @apply flex items-center gap-2 relative min-h-20;
                @media screen and (max-width: 1024px) {
                    @apply min-h-[auto];
                }
                .icon {
                    @apply w-4 h-4 flex items-center justify-center;
                    svg {
                        @apply w-4 h-4;
                    }
                }
                &:hover {
                    &::before {
                        @apply content-[''] absolute bottom-[-9px] w-full h-[11px] bg-primary-500 rounded-t-[10px];
                    }
                }
                &-title {
                    @apply text-xl font-stratos text-secondary-500 cursor-pointer;
                    @media screen and (max-width: 1024px) {
                        @apply text-xxl;
                    }
                }
            }
        }
    }
    .nav-modal {
        @apply flex w-full relative;
        @media screen and (max-width: 1024px) {
            @apply absolute;
        }
        &.active {
            @apply flex-col absolute top-[81px] left-0 bg-neutral-50 rounded-b-2xl min-h-[560px] pb-12 pt-24 justify-around;
            @media screen and (max-width: 568px) {
                @apply top-[65px] min-h-full h-[calc(var(--vh,1vh)*91)];
            }
            .nav-list {
                @apply flex flex-col;
            }
            .choose {
                @apply flex flex-col mt-auto;
            }
        }
    }
</style>


<script>
    import HeaderNav from './HeaderNav.vue';
    import HeaderNavBottom from './HeaderNavBottom.vue';
    import HeaderLang from './HeaderLang.vue';
    import {ref, watchEffect} from 'vue';


    export default {
        components: {
            HeaderNav,
            HeaderNavBottom,
            HeaderLang,
        },
        setup() {
            const activeShow = ref(false);

            const toggleActiveShow = () => {
                activeShow.value = !activeShow.value;
            };

            watchEffect(() => {
                if (activeShow.value) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            });

            return {
                activeShow,
                toggleActiveShow
            }
        },
    }

</script>
