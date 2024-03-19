<script>
    import Button from '../Button/Button.vue';
    import BannerCarousel from '../BannerCarousel/BannerCarousel.vue';

    export default {
        components: {
            Button,
            BannerCarousel
        },
  methods: {
    scrollToForm() {
      const formElement = document.getElementById("form");
      if(formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
}


</script>

<template>
    <section class="intro mb-page">
        <div class="container">
            <div class="intro-wrap">
                <div class="intro-content">
                    <div class="intro-caption">
                        <h1>стань партнером <span class="line">международной</span> сети кофеен cofix!</h1>
                        <p>открой кофейню своей мечты и начинай зарабатывать</p>
                    </div>
                    <div class="intro-numbers">
                        <div class="intro-numbers-caption">чистая<br>прибыль</div>
                        <div class="intro-numbers-price"><span>от <span class="price">230 000₽</span></span></div>
                    </div>
                    <div class="intro-nav">
                        <Button @click="scrollToForm" color="primary" rounded="rounded-medium" label="оставить заявку"/>
                        <Button color="secondary" rounded="rounded-medium" label="подробнее"/>
                    </div>
                </div>
                <div class="intro-banner">
                    <BannerCarousel />
                </div>
                <div class="intro-nav-mobile">
                    <Button color="primary" rounded="rounded-medium" label="оставить заявку"/>
                    <Button color="secondary" rounded="rounded-medium" label="подробнее"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.intro {
    @apply mt-[44px];
    @media screen and (max-width: 414px) {
        @apply mt-4;
    }
    &-wrap {
        @apply flex gap-[75px] min-h-[768px];
        @media screen and (max-width: 1200px) {
            @apply gap-7;
        }
        @media screen and (max-width: 1024px) {
            @apply flex-col-reverse;
        }
        @media screen and (max-width: 414px) {
            @apply flex-col gap-4;
        }
        @media screen and (max-width: 320px) {
            @apply gap-3;
        }
    }
    &-content {
        @apply flex w-1/2 flex-col justify-center pt-[32px] pb-[32px] gap-[64px]; 
        @media screen and (max-width: 1200px) {
            @apply gap-12;
        }
        @media screen and (max-width: 1024px) {
            @apply w-full items-center;
        }
        @media screen and (max-width: 768px) {
            @apply pt-2 gap-0 pb-0;
        }
        @media screen and (max-width: 414px) {
            @apply pt-0;
        }
    }
    &-caption {
        @apply flex flex-col gap-2 relative;
        @media screen and (max-width: 1024px) {
            @apply text-center;
        }
        @media screen and (max-width: 768px) {
            @apply pt-2 mb-8;
        }
        @media screen and (max-width: 414px) {
            @apply pt-0 mb-6;
        }
        h1 {
            .line {
                @apply relative inline-block;
                &::before {
                    @apply content-[''] absolute bg-line bg-contain bg-no-repeat bottom-0 w-full h-[8px] bg-center;
                }
            }
        }
        p {
            @apply text-xl font-stratos text-secondary-500;
            @media screen and (max-width: 320px) {
                @apply text-base;
            }
        }
    }
    &-numbers {
        @apply flex items-center max-w-[512px] w-full h-[80px];
        @media screen and (max-width: 1024px) {
            @apply max-w-full;
        }
        @media screen and (max-width: 768px) {
            @apply mb-2;
        }
        @media screen and (max-width: 414px) {
            @apply h-auto h-16 mb-0;
        }
        @media screen and (max-width: 340px) {
            @apply h-14;
        }
        &-caption {
            @apply text-base text-secondary-500 font-stratos border-[1px] border-neutral-500 rounded-l-xl h-full flex items-center p-4 relative left-[1px];
        }
        &-price {
            @apply text-1xl text-secondary-500 font-stratos border-[1px] border-neutral-500 rounded-r-xl h-full w-full flex items-center justify-end p-4;
            @media screen and (max-width: 380px) {
                @apply text-xxl;
            }
            @media screen and (max-width: 340px) {
                @apply text-xl;
            }
            .price {
                @apply text-3xl text-primary-500 font-stratos;
                @media screen and (max-width: 414px) {
                    @apply text-2xl;
                }
                @media screen and (max-width: 380px) {
                    @apply text-1xl;
                }
                @media screen and (max-width: 340px) {
                    @apply text-xxl;
                }
            }
        }
    }
    &-nav {
        @apply flex flex-col gap-2 max-w-[512px] w-full;
        @media screen and (max-width: 1024px) {
            @apply max-w-full;
        }
        @media screen and (max-width: 414px) {
            @apply hidden;
        }
    }
    &-banner {
        @apply flex w-1/2;
        @media screen and (max-width: 1100px) {
            @apply w-[45%];
        }
        @media screen and (max-width: 1024px) {
            @apply w-full;
        }
    }
    &-nav-mobile {
        @apply hidden;
        @media screen and (max-width: 414px) {
            @apply flex flex-col gap-2 max-w-full w-full mt-8; 
        }
        @media screen and (max-width: 320px) {
            .button-large {
                @apply pt-[8px] pb-[10px] pl-3 pr-3 w-auto min-h-12 text-base cursor-pointer;
            }
        }
    }
}
</style>