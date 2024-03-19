<template>
    <section class="testimonails mb-page">
        <div class="container">
            <div class="wrapper-page mb-4">
                <h2>Отзывы партнеров</h2>
            </div>
            <div class="testimonails-box">
                <swiper 
                    :slides-per-view="3"
                    :space-between="16"
                    :modules="modules"
                    :pagination="{clickable: true}"
                    :navigation="{
                        prevEl: prev,
                        nextEl: next,
                    }"
                    :breakpoints="{  
                        '320': { 
                            slidesPerView: 1,
                            spaceBetween: 0,
                            centeredSlides: true,
                        },
                        '650': { 
                            slidesPerView: 2,
                        },
                        '1024': { 
                            slidesPerView: 3,
                        },
                    }"
                    class="testimonails-carousel"
                >
                    <swiper-slide class="testimonails-carousel-slide">
                        <TestimonailsCard images-people="IB.png" name="Илья Баев">
                            На этапе открытия новой кофейни Cofix предлагает опцию «все включено». От момента, когда <span class="text-primary-500">мы нашли помещение до момента, когда мы открыли кофейню - прошел всего лишь месяц!</span>
                        </TestimonailsCard>
                    </swiper-slide>
                    <swiper-slide class="testimonails-carousel-slide">
                        <TestimonailsCard images-people="SY.png" name="Юлия Самоволкина">
                            Я понимаю, что с этой мощной компанией я могу <span class="text-primary-500">решить любые вопросы</span> и есть много примеров того, когда Cofix мне протягивал руку помощи.
                        </TestimonailsCard>
                    </swiper-slide>
                    <swiper-slide class="testimonails-carousel-slide">
                        <TestimonailsCard images-people="VK.png" name="Варвара Клиджан">
                            В Cofix достаточно четко прописаны <span class="text-primary-500">стандарты, бизнес-процессы, мануалы</span>, к которым всегда можно обратится, если даже ты новичок в бизнесе. Это очень помогает, потому что уберегает от большого количества ошибок.
                        </TestimonailsCard>
                    </swiper-slide>
                </swiper>
                <div ref="prev" class="swiper-button-prev">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15 18.788L4.29806 8.78797L3.00085 10.0001L13.7028 20.0001L15 18.788Z" fill="#FDFDFD"/>
                            <path d="M13.7031 0L3.00119 10L4.29839 11.2121L15.0003 1.21212L13.7031 0Z" fill="#FDFDFD"/>
                        </svg>
                    </div>
                </div>
                <div ref="next" class="swiper-button-next">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 18.788L15.7019 8.78797L16.9991 10.0001L6.2972 20.0001L5 18.788Z" fill="#FDFDFD"/>
                            <path d="M6.29688 0L16.9988 10L15.7016 11.2121L4.99967 1.21212L6.29688 0Z" fill="#FDFDFD"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TestimonailsCard from './TestimonailsCard.vue';
import { defineComponent, ref } from "vue"
import { Navigation, Thumbs, EffectFade, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

import "../../assets/css/swiper-custom/swiper-testimonails.scss"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/effect-fade"

export default defineComponent({
components: {
    Swiper,
    SwiperSlide,
    Pagination,
    TestimonailsCard
},
setup() {
    const prev = ref(null)
    const next = ref(null)

    return {
    modules: [Navigation, Thumbs, EffectFade, Pagination],
    prev, next
    }
}
})
</script>

<style lang="scss" scoped>
    .testimonails {
        &-box{
            @apply flex gap-4
        }

    }
</style>