<template>
    <section class="formats mb-page">
        <div class="container">
            <div class="wrapper-page mb-4">
                <h2>Форматы кофеен</h2>
            </div>
            <swiper
              class="formats-nav"
              :modules="modules"
              :space-between="16"
              :slides-per-view="3"
              :watch-slides-progress="true"
              :prevent-clicks="false"
              :prevent-clicks-propagation="false"
              @swiper="setThumbsSwiper"
            >
                <swiper-slide class="formats-nav-item">
                    <div class="formats-nav-btn">мини</div>
                </swiper-slide>
                <swiper-slide class="formats-nav-item">
                    <div class="formats-nav-btn">стандарт</div>
                </swiper-slide>
                <swiper-slide class="formats-nav-item">
                    <div class="formats-nav-btn">бейкери</div>
                </swiper-slide>
            </swiper>
            <swiper
                class="top-swiper"
                :modules="modules"
                :effect="'fade'"
                :space-between="10"
                :slides-per-view="1"
                :navigation="{
                    prevEl: prev,
                    nextEl: next,
                }"
                :thumbs="{ swiper: thumbsSwiper }"
            >
                <swiper-slide class="formats-box-slide">  
                    <div class="formats-box">
                        <div class="formats-card">
                            <div class="formats-head">
                                <div class="formats-title">Фокус на кофейных напитках, сокращенное меню десертов и снеков.</div>
                                <Button class="formats-btn" @click="show = !show" :label="`${ show ? 'назад' : 'посмотреть стоимость'}`" />
                            </div>
                            <div class="formats-content">
                                <div class="formats-images" v-if="!show">
                                    <img src="../../assets/img/formats/mini.png" alt="">
                                </div>
                                <div class="formats-tabel" :class="{ active: show }">
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">паушальный взнос (МО)</div>
                                        <div class="formats-tabel-info">420 000 ₽ </div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">паушальный взнос (регионы)</div>
                                        <div class="formats-tabel-info">300 000 ₽</div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">роялти</div>
                                        <div class="formats-tabel-info">4 <span class="small">%</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">маркетинг</div>
                                        <div class="formats-tabel-info">2 <span class="small">%</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">инвестиции</div>
                                        <div class="formats-tabel-info"><span class="small">от</span> 3 185 000 <span class="small">₽</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">средняя выручка</div>
                                        <div class="formats-tabel-info">800 000 <span class="small">₽</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">рентабельность</div>
                                        <div class="formats-tabel-info">10-13 % <span class="small">от выручки</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">чистая прибыль</div>
                                        <div class="formats-tabel-info"><span class="small">от</span> 130 000 <span class="small">₽</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">доход от инвестиций</div>
                                        <div class="formats-tabel-info">28 <span class="small">% годовых</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">средняя окупаемость</div>
                                        <div class="formats-tabel-info">24 <span class="small">месяца</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                  
                </swiper-slide>
                <swiper-slide class="formats-box-slide">
                    <div class="formats-box">
                        <div class="formats-card">
                            <div class="formats-head">
                                <div class="formats-title">Формат с фокусом на кофейные напитки, широкий ассортимент десертов и свежих салатов, сэндвичей, роллов и т.д.</div>
                                <Button class="formats-btn" @click="show = !show" :label="`${ show ? 'назад' : 'посмотреть стоимость'}`" />
                            </div>
                            <div class="formats-content">
                                <div class="formats-images" v-if="!show">
                                    <img src="../../assets/img/formats/formats.png" alt="">
                                </div>
                                <div class="formats-tabel" :class="{ active: show }">
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">паушальный взнос (МО)</div>
                                        <div class="formats-tabel-info">1 200 000 ₽</div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">паушальный взнос (регионы)</div>
                                        <div class="formats-tabel-info">720 000 ₽</div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">роялти</div>
                                        <div class="formats-tabel-info">6 <span class="small">%</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">маркетинг</div>
                                        <div class="formats-tabel-info">2 <span class="small">%</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">инвестиции</div>
                                        <div class="formats-tabel-info"><span class="small">от</span> 5 500 000 <span class="small">₽</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">средняя выручка</div>
                                        <div class="formats-tabel-info">1 800 000 <span class="small">₽</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">рентабельность</div>
                                        <div class="formats-tabel-info">12-18 % <span class="small">от выручки</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">чистая прибыль</div>
                                        <div class="formats-tabel-info"><span class="small">от</span> 230 000 <span class="small">₽</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">доход от инвестиций</div>
                                        <div class="formats-tabel-info">42 <span class="small">% годовых</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">средняя окупаемость</div>
                                        <div class="formats-tabel-info">25 <span class="small">месяца</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="formats-box-slide">
                    <div class="formats-box">
                        <div class="formats-card">
                            <div class="formats-head">
                                <div class="formats-title">Фокус на хлебе, выпечке и приготовлении блюд из-под ножа.</div>
                                <Button class="formats-btn" @click="show = !show" :label="`${ show ? 'назад' : 'посмотреть стоимость'}`" />
                            </div>
                            <div class="formats-content">
                                <div class="formats-images" v-if="!show">
                                    <img src="../../assets/img/formats/bakery.png" alt="">
                                </div>
                                <div class="formats-tabel" :class="{ active: show }">
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">паушальный взнос (МО)</div>
                                        <div class="formats-tabel-info">1 200 000 ₽</div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">паушальный взнос (регионы)</div>
                                        <div class="formats-tabel-info">720 000 ₽</div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">роялти</div>
                                        <div class="formats-tabel-info">6 <span class="small">%</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">маркетинг</div>
                                        <div class="formats-tabel-info">2 <span class="small">%</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">инвестиции</div>
                                        <div class="formats-tabel-info"><span class="small">от</span> 8 000 000 <span class="small">₽</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">средняя выручка</div>
                                        <div class="formats-tabel-info">2 200 000 <span class="small">₽</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">рентабельность</div>
                                        <div class="formats-tabel-info">15-22 % <span class="small">от выручки</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">чистая прибыль</div>
                                        <div class="formats-tabel-info"><span class="small">от</span> 345 000 <span class="small">₽</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">доход от инвестиций</div>
                                        <div class="formats-tabel-info">49 <span class="small">% годовых</span></div>
                                    </div>
                                    <div class="formats-tabel-row">
                                        <div class="formats-tabel-title">средняя окупаемость</div>
                                        <div class="formats-tabel-info">23 <span class="small">месяца</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { Navigation, Thumbs, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"
import Button from "../Button/Button.vue"

import "../../assets/css/swiper-custom/swiper-formats.scss"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/effect-fade"

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    Button
  },
  setup() {
    const thumbsSwiper = ref()
    const setThumbsSwiper = swiper => {
      thumbsSwiper.value = swiper
    }

    const show = ref(false)

    const prev = ref(null)
    const next = ref(null)

    return {
      modules: [Navigation, Thumbs, EffectFade],
      setThumbsSwiper,
      thumbsSwiper,
      prev,
      next,
      show
    }
  },

})
</script>

<style lang="scss" scoped>
.formats {
    @apply relative pb-[80px] min-h-full;
    @media screen and (max-width: 568px) {
        @apply pb-0;
    }
    &-card {
        @media screen and (max-width: 568px) {
            @apply flex flex-col-reverse;
        }
    }
    &-head {
        @apply border-[1px] border-neutral-600 rounded-2xl min-h-[auto] relative bottom-[-1px] p-4 bg-neutral-50;
        @media screen and (max-width: 1024px) {
            @apply rounded-t-2xl rounded-none;
        }
        @media screen and (max-width: 568px) {
            @apply rounded-b-2xl rounded-t-none bottom-0 flex-col w-full border-t-0 gap-6 hidden;
        }
        @media screen and (max-width: 414px) {
            @apply p-3;
        }
    } 
    &-title {
        @apply text-xl text-secondary-500 font-stratos;
        @media screen and (max-width: 320px) {
            @apply text-sm;
        }
    }
    &-content {
        @apply flex w-full h-auto;
        @media screen and (max-width: 1024px) {
            @apply flex-col;
        }
    }
    &-images {
        @apply max-w-[420px] w-full overflow-hidden rounded-l-2xl;
        @media screen and (max-width: 1024px) {
            @apply max-w-full h-[320px] rounded-none;
        }
        @media screen and (max-width: 568px) {
            @apply h-[480px] rounded-t-2xl;
        }
        @media screen and (max-width: 320px) {
            @apply h-[420px] rounded-t-xl;
        }
        img {
            @apply w-full h-full object-cover;
        }
    }
    &-tabel {
        @apply w-full flex flex-col border-[1px] border-neutral-600 rounded-r-2xl bg-neutral-50;
        &.active {
            @apply flex;
        }
        @media screen and (max-width: 1024px) {
            @apply rounded-b-2xl rounded-t-none;
        }
        @media screen and (max-width: 568px) {
            @apply rounded-b-2xl rounded-none hidden;
        }
        @media screen and (max-width: 568px) {
            @apply rounded-t-2xl rounded-none;
        }
        @media screen and (max-width: 320px) {
            @apply rounded-t-xl;
        }
        &-row {
            @apply flex justify-between items-center gap-4 min-h-[64px] border-b-[1px] border-neutral-600 last:border-none px-4 py-2;
            @media screen and (max-width: 500px) {
                @apply gap-1;
            }
            @media screen and (max-width: 414px) { 
                @apply px-2 min-h-[56px];
            }
        }
        &-title {
            @apply text-xl font-stratos text-secondary-500;
            @media screen and (max-width: 500px) {
                @apply text-base;
            }
            @media screen and (max-width: 320px) {
                @apply text-sm whitespace-nowrap;
            } 
        }
        &-info {
            @apply text-xxl font-stratos text-secondary-500;
            @media screen and (max-width: 500px) {
                @apply text-xl whitespace-nowrap;
            }
            @media screen and (max-width: 360px) {
                @apply text-base whitespace-nowrap;
            }
            .small {
                @apply text-base font-stratos text-secondary-500 whitespace-nowrap;
                @media screen and (max-width: 360px) {
                    @apply text-sm whitespace-nowrap;
                }
            }
        }
    }
    &-nav-item {
        @apply cursor-pointer;
        &.swiper-slide-thumb-active {
            .formats-nav-btn {
                @apply bg-primary-500 relative;
                @media screen and (max-width: 568px) {
                    @apply bg-transparent text-secondary-500;
                    &::before {
                        @apply content-[''] absolute bottom-[-16px] w-full h-[11px] bg-primary-500 rounded-t-[10px];
                    }
                }
            }
        }
    }
    &-nav-btn {
        @apply text-center h-[64px] rounded-2xl p-4 bg-neutral-600 text-xl text-neutral-50 flex items-center justify-center;
        @media screen and (max-width: 568px) {
            @apply bg-transparent text-neutral-600 rounded-none h-0 pb-3;
        }
    }
    &-nav {
        @apply p-4 border-[1px] border-neutral-600 rounded-2xl mb-[-2px];
        @media screen and (max-width: 568px) {
            @apply p-0 border-b-[1px] border-[0px] mb-5 pb-4 rounded-none;
        }
        @media screen and (max-width: 320px) {
            @apply p-0 border-b-[1px] border-none mb-4 pb-3;
        }
    }
    .formats-btn {
        @apply hidden w-full;
        @media screen and (max-width: 568px) {
            @apply flex;
        }
        @media screen and (max-width: 320px) {
            &.button-large {
                @apply pt-[8px] pb-[10px] pl-3 pr-3  w-auto min-h-12 text-base cursor-pointer;
            }
        }
    }
    .swiper-slide-active {
        @media screen and (max-width: 568px) {
            .formats-head {
                display: flex;
            }
        }
    }
}
</style>