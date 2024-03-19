<script setup>
import FranchiseModels from './FranchiseModels.vue';
import Button from '../Button/Button.vue';
</script>

<template>
    <section class="franchise mb-page">
        <div class="container">
            <div class="wrapper-page mb-8">
                <h2>Другие продукты<br>и спецпредложения</h2>
            </div>
            <div class="franchise-block">
                <div class="franchise-block-images"><img src="../../assets/img/franchise-img.png" alt=""></div>
                <div class="franchise-block-content">
                    <div class="franchise-block-head">
                        <div class="franchise-block-subtitle">новый формат</div>
                        <div class="franchise-block-title">Bakery</div>
                    </div>
                    <div class="franchise-block-stats">
                        <div class="stats-row">
                            <div class="stats-col">
                                <div class="stats-col-number">
                                    <div class="number">0₽</div>
                                    <div class="title">паушальный<br>взнос</div>
                                </div>
                            </div>
                            <div class="stats-col">
                                <div class="stats-col-number">
                                    <div class="number">2%</div>
                                    <div class="title">роялти<br>(первый год)</div>
                                </div>
                            </div>
                        </div>
                        <div class="stats-row">
                            <div class="stats-col">
                                <div class="stats-col-wrap">
                                    <div class="stats-col-caption">инвестиции</div>
                                    <div class="stats-col-info">от 8 миллионов ₽</div>
                                </div>
                                <div class="stats-col-wrap">
                                    <div class="stats-col-caption">доходность</div>
                                    <div class="stats-col-info">от 35% годовых</div>
                                </div>
                            </div>
                            <div class="stats-col">
                                <div class="stats-col-wrap">
                                    <div class="stats-col-caption">окупаемость</div>
                                    <div class="stats-col-info">20 месяцев</div>
                                </div>
                                <div class="stats-col-wrap">
                                    <div class="stats-col-caption">чистая прибыль</div>
                                    <div class="stats-col-info">от 350 000 ₽/месяц</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button color="accent" label="узнать подробнее о формате"/>
                </div>
            </div>
            <FranchiseModels />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.franchise {
    &-block {
        @apply flex overflow-hidden bg-neutral-500 rounded-2xl h-[540px] mb-16;
        @media screen and (max-width: 1024px) {
            @apply flex-col h-auto;
        }
        @media screen and (max-width: 768px) {
            @apply mb-8;
        }
        @media screen and (max-width: 414px) {
            @apply mb-4;
        }
        &-images {
            @apply max-w-[600px] w-full overflow-hidden;
            @media screen and (max-width: 1024px) {
                @apply h-[424px] w-full max-w-full; 
            }
            img {
                @apply w-full h-full object-cover;
            }
        }
        &-content {
            @apply flex flex-col justify-between gap-9 p-5 w-full;
            @media screen and (max-width: 414px) {
                @apply gap-6;
            }
        }
        &-head {
            @apply flex flex-col pb-5 border-b-[1px] border-b-neutral-600;
        }
        &-subtitle {
            @apply text-xxl font-stratos text-secondary-500;
            @media screen and (max-width: 414px) {
                @apply text-xl;
            }
            @media screen and (max-width: 320px) {
                @apply text-xs;
            }
        }
        &-title {
            @apply text-5xl font-stratos text-primary-500;
            @media screen and (max-width: 414px) {
                @apply text-3xl;
            }
            @media screen and (max-width: 320px) {
                @apply text-2xl;
            }
        }
        &-stats {
            @apply flex flex-col w-full gap-8;
            @media screen and (max-width: 414px) {
                @apply gap-6;
            }
            @media screen and (max-width: 320px) {
                @apply gap-4;
            }
            .stats-row {
                @apply flex w-full;
                @media screen and (max-width: 568px) {
                    @apply flex-col gap-4;
                }
            }
            .stats-col {
                @apply flex flex-col max-w-[50%] w-full gap-4;
                @media screen and (max-width: 568px) {
                    @apply max-w-full;
                }

                &-number {
                    @apply flex items-center gap-4;
                    @media screen and (max-width: 320px) {
                        @apply gap-2;
                    }
                    .number {
                        @apply text-4xl font-stratos text-primary-500;
                        @media screen and (max-width: 414px) {
                            @apply text-3xl;
                        }
                        @media screen and (max-width: 320px) {
                            @apply text-1xl;
                        }
                    }
                    .title {
                        @apply text-xl font-stratos text-secondary-500;
                        @media screen and (max-width: 320px) {
                            @apply text-base;
                        }
                    }
                }
                &-wrap {
                    @apply flex flex-col gap-0.5;
                } 
                &-caption {
                    @apply text-sm font-stratos text-secondary-500;
                    @media screen and (max-width: 414px) {
                        @apply text-secondary-200;
                    }
                }
                &-info {
                    @apply text-xxl font-stratos text-secondary-500;
                    @media screen and (max-width: 320px) {
                        @apply text-sm;
                    }
                }
            }
        }
    }
    .button {
        @media screen and (max-width: 320px) {
            @apply min-h-12 text-base;
        }
    }
}
</style>