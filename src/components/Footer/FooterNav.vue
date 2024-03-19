<script setup>
    import ButtonUp from '../ButtonUp/ButtonUp.vue';
</script>

<template>
    <nav class="nav">
        <div class="list-item">
            <span class="list-title">ДЛЯ ГОСТЕЙ</span>
            <ul class="list-nav">
                <li class="list-nav-item"><a href="">Меню</a></li>
                <li class="list-nav-item"><a href="">Кофейни</a></li>
                <li class="list-nav-item"><a href="">Акции</a></li>
                <li class="list-nav-item"><a href="">Cofix Voice</a></li>
                <li class="list-nav-item"><a href="">Cofix At Home</a></li>
                <li class="list-nav-item"><a href="">Клиентская служба</a></li>
            </ul>
        </div>
        <div class="list-item">
            <span class="list-title">ДЛЯ БИЗНЕСА</span>
            <ul class="list-nav">
                <li class="list-nav-item"><a href="">О франшизе</a></li>
                <li class="list-nav-item"><a href="">Купить франшизу</a></li>
            </ul>
        </div>
        <div class="list-item">
            <span class="list-title">О НАС</span>
            <ul class="list-nav">
                <li class="list-nav-item"><a href="">СМИ о  нас</a></li>
                <li class="list-nav-item"><a href="">Новости</a></li>
                <li class="list-nav-item"><a href="">Галерея</a></li>
            </ul>
        </div>
        <div class="list-item">
            <span class="list-title">КОНТАКТЫ</span>
            <ul class="list-nav">
                <li class="list-nav-item"><a href="">Обратная связь</a></li>
                <li class="list-nav-item"><a href="">Арендодателям</a></li>
                <li class="list-nav-item"><a href="">Поставщикам</a></li>
                <li class="list-nav-item"><a href="">PR</a></li> 
                <li class="list-nav-item jobs"><a href="">Работа в Cofix</a></li> 
            </ul>
        </div>
        <ButtonUp />
    </nav>
</template>

<style lang="scss" scoped>
    .nav {
        @apply flex gap-12 w-2/3 relative;
        @media screen and (max-width: 1024px) {
            @apply w-full justify-between;
        }
        @media screen and (max-width: 756px) {
            @apply flex-wrap gap-x-4 gap-y-8;
        }
        .list-nav {
            @apply flex flex-col;
        }
        .list-item {
            @apply flex flex-col text-neutral-50 gap-4;

            @media screen and (max-width: 756px) {
                @apply w-[calc(50%-8px)];
                &:nth-child(4) {
                    order: 2;
                }
                &:nth-child(3) {
                    order: 4;
                }
                &:nth-child(2) {
                    order: 3;
                }
            }
            
        }
        .list-title {
            @apply text-xl text-neutral-50 font-stratos pt-2 pb-2;
            @media screen and (max-width: 568px) {
                @apply pt-1 pb-1;
            }
            @media screen and (max-width: 375px) {
                @apply text-base p-0;
            }
        }
        .list-nav {
            @apply h-full;
            &-item {
                @apply pt-2 pb-2;
                @media screen and (max-width: 375px) {
                    @apply p-0;
                }
                a {
                    @apply text-xl text-neutral-50 font-stratos;
                    &:hover {
                        @apply text-primary-500;
                    }
                    @media screen and (max-width: 375px) {
                        @apply text-sm;
                    }
                }
            }
            .jobs {
                @apply mt-auto
            }
        }
    }
</style>