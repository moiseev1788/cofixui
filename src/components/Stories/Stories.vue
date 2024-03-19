<script setup>
    import StoriesCarousle from './StoriesCarousel.vue'
</script>

<template>
    <section class="stories mb-page">
        <div class="container">
            <div class="wrapper-page mb-8">
                <h2>Больше чем,<br>просто <span class="molniya">франшиза</span></h2>
            </div>
        </div>
        <StoriesCarousle />
    </section>
</template>

<style lang="scss" scoped>
    .stories {
        @apply relative;
        h2 {
      
            .molniya {
                @apply relative;
                &:after {
                    @apply content-[''] absolute bottom-[-8px] bg-[url('../../assets/img/icon/molniya.svg')] w-[52px] h-[35px] right-[-30px];
                    @media screen and (max-width: 568px) {
                        @apply right-[-30px] bottom-[-12px];
                    }
                }
            }
       
        }
    }
</style>

