<template>
    <swiper 
        :pagination="{clickable: true}"
        :effect="'fade'"
        :loop="true"
        :centeredSlides="true"
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }"
        :modules="modules"
        :navigation="true"
        class="banner-carousel"
    >
      <swiper-slide class="banner-carousel-slide"><img src="../../assets/img/banner-carousel/b1.png" alt=""></swiper-slide>
      <swiper-slide class="banner-carousel-slide"><img src="../../assets/img/banner-carousel/b2.png" alt=""></swiper-slide>
      <swiper-slide class="banner-carousel-slide"><img src="../../assets/img/banner-carousel/b3.png" alt=""></swiper-slide>
      <swiper-slide class="banner-carousel-slide"><img src="../../assets/img/banner-carousel/b4.png" alt=""></swiper-slide>
      <swiper-slide class="banner-carousel-slide"><img src="../../assets/img/banner-carousel/b5.png" alt=""></swiper-slide>
      <swiper-slide class="banner-carousel-slide"><img src="../../assets/img/banner-carousel/b6.png" alt=""></swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped>
    .banner-carousel {
        @apply h-[768px] max-w-full;
        @media screen and (max-width: 1024px) {
            @apply h-[540px];
        }
        @media screen and (max-width: 414px) {
            @apply h-[480px];
        }
        @media screen and (max-width: 320px) {
            @apply h-[412px];
        }
        &-slide {
            @apply h-full max-w-full;
            img {
                @apply h-full w-full object-cover;
            }
        }
    }
    
    .swiper {
        @apply overflow-visible;
    }
   
</style>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import '../../assets/css/swiper-custom/swiper-banner.scss'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Pagination, EffectFade, Autoplay, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, EffectFade, Autoplay, Navigation],
        };
    },
};
</script>

