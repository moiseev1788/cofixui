<template>
    <section class="marquee mb-page">
        <Vue3Marquee :duration="30" :pause-on-hover="true">
            <div class="marquee-item">
                <div class="marquee-logo"><img src="../../assets/img/logo/rbk.svg" alt=""></div>
                <div class="marquee-top">TOП-4</div>
                <div class="marquee-text">самые популярные<br>франшизы 2020</div>
            </div>
            <div class="marquee-item">
                <div class="marquee-logo"><img src="../../assets/img/logo/rbk.svg" alt=""></div>
                <div class="marquee-top">TOП-10</div>
                <div class="marquee-text">крупнейших сетей<br>кофеен России 2022</div>
            </div>
            <div class="marquee-item">
                <div class="marquee-logo"><img src="../../assets/img/logo/forbes.svg" alt=""></div>
                <div class="marquee-top">TOП-10</div>
                <div class="marquee-text">крупнейших сетей<br>кофеен России 2022</div>
            </div>
            <div class="marquee-item">
                <div class="marquee-logo"><img src="../../assets/img/logo/franchizaru.svg" alt=""></div>
                <div class="marquee-top">TOП-6</div>
                <div class="marquee-text">франшиз<br>кофеен 2022</div>
            </div>
            <div class="marquee-item">
                <div class="marquee-logo"><img src="../../assets/img/logo/top2.svg" alt=""></div>
                <div class="marquee-top">TOП-2</div>
                <div class="marquee-text">в категории<br>«кофе с собой»</div>
            </div>
            <div class="marquee-item">
                <div class="marquee-logo"><img src="../../assets/img/logo/top30.svg" alt=""></div>
                <div class="marquee-top">TOП-30</div>
                <div class="marquee-text">лучших франшиз<br>России 2023</div>
            </div>
            <div class="marquee-item">
                <div class="marquee-logo"><img src="../../assets/img/logo/top1.svg" alt=""></div>
                <div class="marquee-top">TOП-1</div>
                <div class="marquee-text">в категории «кофейни»<br>по версии BEBOSS</div>
            </div>
            <div class="marquee-item">
                <div class="marquee-logo"><img src="../../assets/img/logo/foodservice.svg" alt=""></div>
                <div class="marquee-text">лидер по темпам<br>роста 2018</div>
            </div>
        </Vue3Marquee>
    </section>
  </template>

  <style lang="scss" scoped>
    .marquee {
        @apply border-t-[1px] border-b-[1px] border-neutral-600 pb-4 pt-4;
        &-item {
            @apply flex items-center gap-2 ml-16;
        } 
        &-logo {
            @apply h-[40px] max-w-full;
            img {
                @apply w-full h-full object-contain;
            } 
        }
        &-top {
            @apply text-2xl font-stratos text-secondary-500;
        }
        &-text {
            @apply text-[12px] font-stratos text-secondary-500;
        }
    }
  </style>
  
  <script>
  import { Vue3Marquee } from 'vue3-marquee'
  
  export default {
    components: {
      Vue3Marquee,
    },
  }
  </script>