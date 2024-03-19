<template>
    <li 
        class="nav-item" 
        v-for="(item, i) in items"
        :key="i"
        :class="{show: item.show}"
    >
        <div class="nav-title nav-title-caption" @click="openItem(i)">{{item.title}}</div>
        <div class="nav-dropdown">
            <span class="nav-title" v-for="(listItem, index) in item.list" :key="index"><a href="">{{ listItem }}</a></span>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.nav {
    &-item {
        @apply cursor-pointer flex items-center relative min-h-20;
        @media screen and (max-width: 1024px) {
            @apply min-h-[auto] static #{!important};
        }
        &.active {
            @apply relative;
            @media screen and (max-width: 1024px) {
                .nav-title {
                    @apply text-primary-500;
                }
            }
            &::before {
                @apply content-[''] absolute bottom-[-9px] w-full h-[11px] bg-primary-500 rounded-t-[10px];
                @media screen and (max-width: 1024px) {
                    @apply hidden;
                }
            }
        }
        &:hover {
            &::before {
                @apply content-[''] absolute bottom-[-9px] w-full h-[11px] bg-primary-500 rounded-t-[10px];
                @media screen and (max-width: 1024px) {
                    @apply hidden;
                }
            }
            .nav-dropdown {
                @apply flex;
                @media screen and (max-width: 1024px) {
                    @apply hidden;
                }
            }
        }
        &:nth-child(1) {
            @apply z-[6];
            @media screen and (max-width: 1024px) {
                @apply z-[0];
            }
        }
        &:nth-child(2) {
            @apply z-[5];
            @media screen and (max-width: 1024px) {
                @apply z-[0];
            }
        }
        &:nth-child(3) {
            @apply z-[4];
            @media screen and (max-width: 1024px) {
                @apply z-[0];
            }
        }
        &:nth-child(4) {
            @apply z-[3];
            @media screen and (max-width: 1024px) {
                @apply z-[0];
            }
        }
        &:nth-child(5) {
            @apply z-[1];
            @media screen and (max-width: 1024px) {
                @apply z-[0];
            }
        }
        &.show {
            @media screen and (max-width: 1024px) {
                @apply z-20;
                .nav-title-caption {
                    @apply absolute top-[-81px] left-[0px] h-[80px] bg-neutral-50 flex items-center pl-4 pr-4 w-full text-secondary-500 flex items-center gap-2; 
                    &::before {
                        @apply content-[''] bg-[url(../../assets/img/icon/arrow-left.svg)] w-[32px] h-[32px] bg-no-repeat bg-contain relative top-[3px];
                    }
                    @media screen and (max-width: 568px) {
                        @apply h-[63px] top-[-64px];
                    }
                }
                .nav-dropdown {
                    @apply flex bg-neutral-50 w-full h-full justify-center;
                    .nav-title {
                        @apply text-secondary-500;
                    }
                }
            }
        }
    }
    &-title {
        @apply text-xl font-stratos text-secondary-500;
        @media screen and (max-width: 1024px) {
            @apply text-xxl;
        }
        &:nth-child(1) {
            @apply z-[6];
            @media screen and (max-width: 1024px) {
                @apply z-[0];
            }
        }
    }
    &-dropdown {
        @apply absolute hidden flex-col bg-neutral-50 box-border pt-4 pb-4 rounded-[0px_0px_16px_16px] border-neutral-600 border-[1px] w-max top-[63px] left-[-16px] z-[1];
        &:before {
            @apply content-[""] absolute w-[calc(100%+2px)] h-12 bg-neutral-50 rounded-[16px_16px_0px_0px] border-[1px] border-neutral-600 -left-px -top-12;
            @media screen and (max-width: 1024px) {
                @apply hidden;
            }
        }
        &:nth-child(1) {
            @apply z-[6];
            @media screen and (max-width: 1024px) {
                @apply z-[0];
            }
        }
        &:nth-child(2) {
            @apply z-[5];
            @media screen and (max-width: 1024px) {
                @apply z-[0];
            }
        }
        &:nth-child(3) {
            @apply z-[4];
            @media screen and (max-width: 1024px) {
                @apply z-[0];
            }
        }
        &:nth-child(4) {
            @apply z-[3];
            @media screen and (max-width: 1024px) {
                @apply z-[0];
            }
        }
        .nav-title {
            @apply pl-4 pr-4 pt-2 pb-2;
            &:hover {
                @apply bg-primary-500 text-neutral-50;
            }
        }
        @media screen and (max-width: 1024px) {
            @apply top-0 w-full h-[560px] border-none left-0 right-0 z-20;
        }
        @media screen and (max-width: 568px) {
            @apply  h-[calc(var(--vh,1vh)*91)];
        }
    } 
}
</style>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'для гостей',
                    show: false,
                    list: [
                       'меню',
                       'кофейни',
                       'акции',
                       'Cofix Voice',
                       'Cofix at Home',
                       'Cofix Club',
                       'клиентская поддержка',
                    ]
                },
                {
                    title: 'для бизнеса',
                    show: false,
                    list: [
                        'о франшизе',
                        'купить франшизу',
                    ]
                },
                {
                    title: 'о нас',
                    show: false,
                    list: [
                        'новости',
                        'СМИ о нас',
                        'галлерея',
                    ]
                },
                {
                    title: 'контакты',
                    show: false,
                    list: [
                        'обратная связь',
                        'арендодателям',
                        'поставщикам',
                        'PR',
                    ]
                },
           ]
        }
    },
    methods: {
      openItem(index) {
        this.items[index].show = !this.items[index].show
      },
    },
}
</script>