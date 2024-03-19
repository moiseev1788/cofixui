<template>
   <section class="service mb-page">
        <div class="container">
            <div class="wrapper-page mb-8 m-auto">
                <h2 class="text-center">Что дает наша франшиза?</h2>
            </div>
            <swiper
                class="service-carousel"
                :modules="modules"
                :slidesPerView="1"
                :space-between="10"
                :thumbs="{ swiper: thumbsSwiper }"
                :pagination="true"
                :breakpoints="{  
                    '320': { 
                        slidesPerView: 1,
                        spaceBetween: 0,
                        effect: 'slide',
                    }, 
                    '1024': { 
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    '1025': { 
                        slidesPerView: 1,
                        spaceBetween: 0,
                        effect: 'fade',
                    },
                }"
            >
                <swiper-slide class="service-box-slide">
                    <div class="service-card">
                        <div class="service-card-content">
                            <div class="service-card-title">Управление коммерческой недвижимостью</div>
                            <ul class="service-card-list">
                                <li class="service-card-list-item">Составление адресной программы</li>
                                <li class="service-card-list-item">Подбор помещений</li>
                                <li class="service-card-list-item">Бизнес-планирование, оценка локаций, утверждение на инвестиционном комитете</li>
                                <li class="service-card-list-item">Дизайн и проектирование кофеен</li>
                                <li class="service-card-list-item">Строительство объектов «под ключ»</li>
                            </ul>
                        </div>
                        <div class="service-card-images">
                            <img src="../../assets/img/illustration/service/1.svg" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="service-box-slide">
                    <div class="service-card service-card-n">
                        <div class="service-card-content">
                            <div class="service-card-title">Навыки и развитие</div>
                            <ul class="service-card-list">
                                <li class="service-card-list-item">Обучение партнеров ведению бизнеса</li>
                                <li class="service-card-list-item">Обучение менеджерского состава</li>
                                <li class="service-card-list-item">Обучение линейного персонала</li>
                                <li class="service-card-list-item">Стандарты, обучающая платформа,<br>системы мотивации</li>
                                <li class="service-card-list-item">Платформа для сотрудников<br>Cofix Connect</li>
                            </ul>
                        </div>
                        <div class="service-card-images">
                            <img src="../../assets/img/illustration/service/2.svg" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="service-box-slide">
                    <div class="service-card">
                        <div class="service-card-content">
                            <div class="service-card-title">Управление бизнесом</div>
                            <ul class="service-card-list">
                                <li class="service-card-list-item">IIKO кассовая и учетная система</li>
                                <li class="service-card-list-item">1С ERP для управления цепочками поставок</li>
                                <li class="service-card-list-item">Система ЭДО</li>
                                <li class="service-card-list-item">Портал партнера Cofix Business</li>
                                <li class="service-card-list-item">Система проведения аудита  Cofix Check, Oper Check, Business Rreview, Рейтинг Партнера</li>
                                <li class="service-card-list-item">Ежегодные конференции для партнеров</li>
                            </ul>
                        </div>
                        <div class="service-card-images">
                            <img src="../../assets/img/illustration/service/3.svg" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="service-box-slide">
                    <div class="service-card service-card-n">
                        <div class="service-card-content">
                            <div class="service-card-title">Продукт</div>
                            <ul class="service-card-list">
                                <li class="service-card-list-item">Создание продукта, сезонные ротации, управление ассортиментом</li>
                                <li class="service-card-list-item">Поставки сore-ассортимента</li>
                                <li class="service-card-list-item">Построение цепочки поставок</li>
                                <li class="service-card-list-item">Анализ результатов, PPWF</li>
                                <li class="service-card-list-item">Строительство региональной фабрики-кухни</li>
                            </ul>
                        </div>
                        <div class="service-card-images">
                            <img src="../../assets/img/illustration/service/4.svg" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="service-box-slide">
                    <div class="service-card">
                        <div class="service-card-content">
                            <div class="service-card-title">Маркетинг</div>
                            <ul class="service-card-list">
                                <li class="service-card-list-item">Исследования рынка</li>
                                <li class="service-card-list-item">Маркетинговая стратегия</li>
                                <li class="service-card-list-item">Мобильное приложение Cofix Club с программой лояльности</li>
                                <li class="service-card-list-item">SMM</li>
                                <li class="service-card-list-item">Трейд-маркетинг</li>
                                <li class="service-card-list-item">Разработка механик и создание рекламных материалов</li>
                                <li class="service-card-list-item">Обработка обратной связи</li>
                            </ul>
                        </div>
                        <div class="service-card-images">
                            <img src="../../assets/img/illustration/service/5.svg" alt="">
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <swiper
              class="service-nav"
              :modules="modules"
              :space-between="16"
              :slides-per-view="5"
              :watch-slides-progress="true"
              :prevent-clicks="false"
              :prevent-clicks-propagation="false"
              @swiper="setThumbsSwiper"
            >
            <swiper-slide class="service-nav-item">
                <div class="service-nav-btn">Управление<br>коммерческой<br>недвижимостью</div>
            </swiper-slide>
            <swiper-slide class="service-nav-item">
                <div class="service-nav-btn">Навыки и развитие</div>
            </swiper-slide>
            <swiper-slide class="service-nav-item">
                <div class="service-nav-btn">Управление<br>бизнесом</div>
            </swiper-slide>
            <swiper-slide class="service-nav-item">
                <div class="service-nav-btn">Продукт</div>
            </swiper-slide>
            <swiper-slide class="service-nav-item">
                <div class="service-nav-btn">Маркетинг</div>
            </swiper-slide>
            </swiper>
    </div>
    </section>
  </template>
  
  <script>
    import { defineComponent, ref } from "vue"
    import { Navigation, Pagination, Thumbs, EffectFade } from "swiper/modules"
    import { Swiper, SwiperSlide } from "swiper/vue"

    import "../../assets/css/swiper-custom/swiper-service.scss"
    import "swiper/css"
    import "swiper/css/navigation"
    import 'swiper/css/pagination'
    import "swiper/css/thumbs"
    import "swiper/css/effect-fade"

    export default defineComponent({
    components: {
        Swiper,
        SwiperSlide,
        Pagination
    },
    setup() {
        const thumbsSwiper = ref()
        const setThumbsSwiper = swiper => {
        thumbsSwiper.value = swiper
        }

        return {
        modules: [Navigation, Pagination, Thumbs, EffectFade],
            setThumbsSwiper,
            thumbsSwiper
        }
    }
    })
  </script>
  
  <style lang="scss" scoped>
    .service {
        &-card {
            @apply flex gap-[28px] p-16 bg-neutral-600 rounded-[32px];
            @media screen and (max-width: 1024px) {
                @apply flex-col p-8 gap-24;
            }
            @media screen and (max-width: 568px) {
                @apply gap-16 p-6 pt-8 rounded-2xl;
            }
            @media screen and (max-width: 320px) {
                @apply gap-8 p-4 pt-6 rounded-xl;
            }
            &-content {
                @apply w-1/2;
                @media screen and (max-width: 1024px) {
                    @apply w-full;
                }
            }
            &-title {
                @apply text-2xl font-stratos text-secondary-500 mb-16;
                @media screen and (max-width: 1024px) {
                    @apply mb-4;
                }
                @media screen and (max-width: 568px) {
                    @apply text-1xl;
                }
                @media screen and (max-width: 320px) {
                    @apply text-base;
                }
            }
            &-list {
                @apply flex flex-col gap-4;
                &-item {
                    @apply text-xl font-stratos text-secondary-500 relative pl-8;
                    @media screen and (max-width: 320px) {
                        @apply pl-5;
                    }
                    &::before {
                        @apply content-[''] absolute left-0 bg-[url(../../assets/img/icon/list.svg)] w-[25px] h-[24px];
                        @media screen and (max-width: 414px) {
                            @apply top-[-4px];
                        }
                        @media screen and (max-width: 320px) {
                            @apply w-[16px] h-[16px] bg-cover top-[-1px];
                        }
                    }
                    @media screen and (max-width: 414px) {
                        @apply text-base;
                    }
                    @media screen and (max-width: 320px) {
                        @apply text-sm;
                    }
                }
            }
            &-images {
                @apply h-[440px] w-1/2 flex items-center justify-center;
                @media screen and (max-width: 1024px) {
                    @apply w-full h-[420px];
                }
                @media screen and (max-width: 768px) {
                    @apply w-full h-auto;
                }
                img {
                    @apply w-full h-full;
                }
            }
        }
        &-card-n {
            @apply bg-neutral-500;
        }
        &-nav {
            @apply p-4 border-[1px] border-neutral-500 rounded-2xl mt-8;
            @media screen and (max-width: 1024px) {
                @apply hidden;
            }
        }
        &-nav-item {
            @apply cursor-pointer;
            &.swiper-slide-thumb-active {
                .service-nav-btn {
                    @apply bg-primary-500;
                }
            }
        }
        &-nav-btn {
            @apply text-center h-[108px] rounded-2xl p-4 bg-neutral-600 text-xl text-neutral-50 flex items-center justify-center;
            &:hover {
                @apply bg-primary-600;
            }
        }
    }
  </style>