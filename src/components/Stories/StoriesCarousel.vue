<template>
        <swiper
            :slidesPerView="5"
            :spaceBetween="24"
            :centeredSlides="true"
            :loop="true"
            :watchSlidesProgress="true"
            :modules="modules"
            :loopAdditionalSlides="60"
            :pagination="{clickable: true}"
            :navigation="{
                prevEl: prev,
                nextEl: next,
            }"
            :breakpoints="breakpoints"
            ref="mySwiper"
            class="stories-carousel"
            @swiper="onSwiper"
        >
            <swiper-slide class="stories-item">
                <div class="stories-box">
                    <div class="stories-img">
                        <video src="../../assets/video/stories/1.mp4" preload="none" autoplay muted></video>
                        <img src="../../assets/img/stories/1.png" alt="">
                    </div>
                    <div class="stories-title">Коллаборация</div>
                </div>
            </swiper-slide>
            <swiper-slide class="stories-item">
                <div class="stories-box">
                    <div class="stories-img">
                        <video src="../../assets/video/stories/2.mp4" preload="none" autoplay muted></video>
                        <img src="../../assets/img/stories/2.png" alt="">
                    </div>
                    <div class="stories-title">Производство</div>
                </div> 
            </swiper-slide>
            <swiper-slide class="stories-item">
                <div class="stories-box">
                    <div class="stories-img">
                        <video src="../../assets/video/stories/3.mp4" preload="none" autoplay muted></video>
                        <img src="../../assets/img/stories/3.png" alt="">
                    </div>
                    <div class="stories-title">Продукция</div>
                </div>
            </swiper-slide>
            <swiper-slide class="stories-item">
                <div class="stories-box">
                    <div class="stories-img">
                        <video src="../../assets/video/stories/4.mp4" preload="none" autoplay muted></video>
                        <img src="../../assets/img/stories/4.png" alt="">
                    </div>
                    <div class="stories-title">Интерьер</div>
                </div>
            </swiper-slide>
            <swiper-slide class="stories-item"> 
                <div class="stories-box">
                    <div class="stories-img">
                        <video src="../../assets/video/stories/2.mp4" preload="none" autoplay muted></video>
                        <img src="../../assets/img/stories/5.png" alt="">
                    </div>
                    <div class="stories-title">Кофе</div>
                </div>
            </swiper-slide>
            <swiper-slide class="stories-item">
                <div class="stories-box">
                    <div class="stories-img">
                        <video src="../../assets/video/stories/2.mp4" preload="none" autoplay muted></video>
                        <img src="../../assets/img/stories/6.png" alt="">
                    </div>
                    <div class="stories-title">Наши гости</div>
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
</template>

<style lang="scss" scoped>
    .stories {
        @apply relative;
        &-img {
            @apply w-full h-[520px] overflow-hidden rounded-2xl opacity-[0.5] transition;
            @media screen and (max-width: 430px) {
                @apply h-[360px]
            }
            img {
                @apply w-full h-full object-cover hidden;
                @media screen and (max-width: 1366px) {
                    @apply block;
                }
            }
            video {
                @apply w-full h-full object-fill;
                @media screen and (max-width: 1366px) {
                    @apply hidden;
                }
            }
        }
        &-box {
            @apply w-full h-full flex flex-col items-center gap-2;
        }
        &-title {
            @apply text-center text-xxl text-secondary-500 font-stratos;
            @media screen and (max-width: 320px) {
                @apply text-base;
            }
        }
    }

    .stories-carousel {
        @apply max-w-[1520px] m-auto relative;
        @media screen and (max-width: 1024px) {
            @apply max-w-full w-full;
        }
    }

    .swiper-slide-active {
        .stories-img {
            @apply h-[640px] opacity-[1];
            @media screen and (max-width: 430px) {
                @apply h-[400px] opacity-[1];
            }
        }
    }
</style>

<script>
import { defineComponent, onMounted, ref, watchEffect } from "vue"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

    import '../../assets/css/swiper-custom/swiper-stories.scss'

    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import 'swiper/css/effect-fade';

    export default defineComponent({
        components: {
            Swiper,
            SwiperSlide,
            Pagination,
            Navigation,
            Autoplay
        },
    setup() {
        const swiperRef = ref(null);

        const breakpoints = ref({
            320: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            375: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            414: {
                slidesPerView: 2,
            },
            568: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1025: {
                slidesPerView: 5,
            },
        });

        const onSwiper = (swiperInstance) => {
            swiperRef.value = swiperInstance;
        };

        const setupVideoEndListener = (videoEl, swiper) => {
            videoEl.addEventListener('ended', () => {
                swiper.slideNext();
            });
        };

        onMounted(() => {
            if (swiperRef.value) {
                swiperRef.value.on('slideChange', function () {
                const videos = document.querySelectorAll(".swiper-slide video");
                videos.forEach((video) => {
                    video.pause();
                    video.currentTime = 0;
                });
                const activeSlide = swiperRef.value.slides[swiperRef.value.activeIndex];
                const activeVideo = activeSlide.querySelector("video");
                if (activeVideo) {
                    setupVideoEndListener(activeVideo, swiperRef.value);
                    activeVideo.play();
                }
                });

                const checkAndRemoveVideo = () => {
                    if (window.innerWidth <= 1366) {
                        const videoElements = document.querySelectorAll("video");
                        videoElements.forEach((videoElement) => {
                            videoElement.parentNode.removeChild(videoElement); 
                        });
                    }
                };

                checkAndRemoveVideo();

                window.addEventListener('resize', checkAndRemoveVideo);
            }

            watchEffect(() => {
                if (window.innerWidth <= 1366) {
                    swiperRef.value.params.autoplay = {
                        delay: 4000,
                        disableOnInteraction: false
                    };
                    swiperRef.value.autoplay.start();
                } else {
                    if (swiperRef.value.autoplay.running) {
                        swiperRef.value.autoplay.stop();
                    }
                }
            });
        });

        const prev = ref(null)
        const next = ref(null)

        return {
        modules: [Pagination, Navigation, Autoplay],
        prev,
        next,
        onSwiper,
        breakpoints
        }
    },

    })
</script>