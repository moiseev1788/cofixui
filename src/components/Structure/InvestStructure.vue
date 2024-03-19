<script setup>
    import StructureBanner from './StructureBanner.vue'
    import Donut from '../Donut/Donut.vue'
</script>

<template>
    <section class="invest-structure mb-page">
        <div class="container">
            <div class="wrapper-page mb-4">
                <h2>Структура инвестиций</h2>
            </div>
            <div class="invest-structure-row">
                <div class="invest-structure-card">
                    <StructureBanner />
                </div>
                <div class="invest-structure-card">
                    <div class="structure-card">
                        <span class="structure-card-content">Строительно-монтажные работы (СМР)</span>
                        <div class="structure-card-ellipse">
                            <Donut percent="23" />
                        </div>
                    </div>
                    <div class="structure-card">
                        <span class="structure-card-content">Паушальный взнос</span>
                        <div class="structure-card-ellipse">
                            <Donut percent="17" />
                        </div>
                    </div>
                    <div class="structure-card">
                        <span class="structure-card-content">Остров и барная мебель</span>
                        <div class="structure-card-ellipse">
                            <Donut percent="8" />
                        </div>
                    </div>
                    <div class="structure-card">
                        <span class="structure-card-content">IT <span class="small">касса, меню-борды<br>видеонаблюдение</span></span>
                        <div class="structure-card-ellipse">
                            <Donut percent="6" />
                        </div>
                    </div>
                    <div class="structure-card">
                        <span class="structure-card-content">Дизайн и проектирование</span>
                        <div class="structure-card-ellipse">
                            <Donut percent="2" />
                        </div>
                    </div>
                </div>
                <div class="invest-structure-card">
                    <div class="structure-card">
                        <span class="structure-card-content">Оборудование</span>
                        <div class="structure-card-ellipse">
                            <Donut percent="21" />
                        </div>
                    </div>
                    <div class="structure-card">
                        <span class="structure-card-content">Мебель зала</span>
                        <div class="structure-card-ellipse">
                            <Donut percent="10" />
                        </div>
                    </div>
                    <div class="structure-card">
                        <span class="structure-card-content">Операционные затраты  <span class="small">расходные материалы, товары, инвентарь</span></span>
                        <div class="structure-card-ellipse">
                            <Donut percent="8" />
                        </div>
                    </div>
                    <div class="structure-card">
                        <span class="structure-card-content">Рекламные конструкции и декор зала</span>
                        <div class="structure-card-ellipse">
                            <Donut percent="5" />
                        </div>
                    </div>
                    <div class="structure-card">
                        <span class="structure-card-content">Незапланированные расходы</span>
                        <div class="structure-card-ellipse">
                            <Donut percent="2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

    .structure {
        &-card {
            @apply rounded-2xl p-4 gap-2 flex items-center bg-neutral-500 h-[103px];
            @media screen and (max-width: 568px) {
                @apply h-auto min-h-[64px] p-3;
            }
            @media screen and (max-width: 568px) {
                @apply rounded-xl;
            }
            &-content {
                @apply text-xl text-secondary-500 font-stratos flex flex-col;
                @media screen and (max-width: 320px) {
                    @apply text-base;
                }
            }
            &-ellipse {
                @apply ml-auto
            }
        }
    }

    .invest-structure {
        &-row {
            @apply flex flex-row gap-4 min-h-[580px];
            @media screen and (max-width: 1024px) {
                @apply flex-wrap;
            }
        }
        &-card {
            @apply w-[33.3%] flex flex-col gap-4;
            @media screen and (max-width: 1024px) {
                &:first-child {
                    @apply order-3 w-full;
                }
                @apply w-[calc(50%-8px)];
            }
            @media screen and (max-width: 650px) {
                @apply w-full;
            }
        }
    }
    .small {
        @apply text-base font-stratos;
        @media screen and (max-width: 320px) {
            @apply text-sm;
        }
    }
</style> 