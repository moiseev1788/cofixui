<template>
    <div
        class="lang"
        v-for="(item, i) in items"
        :key="i"
        :class="{show: item.show}"
    >
        <div class="lang-header">
            <span class="icon-m">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <g clip-path="url(#clip0_1_10143)">
                        <path d="M14.6768 10.7278C14.6768 11.6505 13.9287 12.3986 13.006 12.3986H2.09764L4.29756 10.1987L3.51 9.41116L0.359355 12.5618C0.141934 12.7794 0.141934 13.1318 0.359355 13.3494L3.51 16.5L4.29756 15.7124L2.09764 13.5125H13.006C14.5432 13.5106 15.7888 12.265 15.7907 10.7278V8.5H14.6768V10.7278Z" fill="#1B1B1B"/>
                        <path d="M1.31018 6.27222C1.31018 5.34936 2.05818 4.60137 2.98103 4.60137H13.8894L11.6895 6.80129L12.477 7.58885L15.6277 4.4382C15.8451 4.22065 15.8451 3.8682 15.6277 3.65064L12.477 0.5L11.6895 1.28756L13.8894 3.48748H2.98103C1.44385 3.48924 0.198057 4.73503 0.196289 6.27222V8.50001H1.31018V6.27222Z" fill="#1B1B1B"/>
                    </g>
                </svg>
            </span>
            <div class="lang-action" @click="openItem(i)">
                <span class="lang-title">русский</span>
                <span class="lang-m-title">сменить язык</span>
            </div>
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M1.63672 3.41772L9.41489 11.1959L8.47208 12.1387L0.69391 4.36053L1.63672 3.41772Z" fill="#1B1B1B"/>
                    <path d="M16.25 4.3606L8.47182 12.1388L7.52902 11.196L15.3072 3.41779L16.25 4.3606Z" fill="#1B1B1B"/>
                </svg>
            </span>
        </div>
        <ul class="nav-dropdown">
            <li class="nav-title" v-for="(listItem, index) in item.list" :key="index"><a href="">{{ listItem }}</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.lang {
    @apply cursor-pointer flex items-center gap-2 relative;
    @media screen and (max-width: 1024px) {
        @apply static;
    }
    &:hover {
        .nav-dropdown {
            @apply flex;
            @media screen and (max-width: 1024px) {
                @apply hidden;
            }
        }
        .icon {
            @apply rotate-180;
        }
    }
    &-header {
        @apply flex items-center gap-2;
    }
    .icon {
        @apply w-4 h-4 flex items-center justify-center z-[6] transition-all;
        @media screen and (max-width: 1024px) {
            @apply hidden;
        }
    }
    .icon-m {
        @apply hidden;
        @media screen and (max-width: 1024px) {
            @apply  w-4 h-4 flex items-center justify-center block;
        }
    }
    &-title {
        @apply text-xl font-stratos text-secondary-500 z-[6] relative;
        @media screen and (max-width: 1024px) {
            @apply text-xxl hidden;
        }
    }
    .nav-dropdown {
        @apply absolute hidden flex-col bg-neutral-50 box-border pt-4 pb-4 rounded-[0px_0px_16px_16px] border-neutral-600 border-[1px] w-max top-[36px] right-[-16px] z-[1];
        &:before {
            @apply content-[""] absolute w-[calc(100%+2px)] h-12 bg-neutral-50 rounded-[16px_16px_0px_0px] border-[1px] border-neutral-600 -right-px -top-12;
            @media screen and (max-width: 1024px) {
                @apply hidden;
            }
        }
        .nav-title {
            @apply pl-4 pr-4 pt-2 pb-2 text-xl font-stratos text-secondary-500 flex justify-end;
            &:hover {
                @apply bg-primary-500 text-neutral-50;
                @media screen and (max-width: 1024px) {
                    @apply bg-transparent text-secondary-500;
                }
            }
        }
    }
    .lang-m-title {
        @apply hidden;
        @media screen and (max-width: 1024px) {
            @apply block text-xxl font-stratos text-secondary-500;
        }
    }
    &.show {
        @media screen and (max-width: 1024px) {
            .nav-dropdown {
                @apply flex items-start justify-center top-0 w-full h-[560px] border-none left-0 right-0 z-20;
            }
            .nav-title {
                @apply  text-xxl;
            }
            .lang-header {
                @apply absolute top-[-81px] left-[0px] h-[80px] bg-neutral-50 flex items-center pl-4 pr-4 w-full text-secondary-500 flex items-center gap-2 z-10; 
                &::before {
                    @apply content-[''] bg-[url(../../assets/img/icon/arrow-left.svg)] w-[32px] h-[32px] bg-no-repeat bg-contain relative top-[3px];
                }
                @media screen and (max-width: 568px) {
                    @apply h-[63px] top-[-64px];
                }
                .icon-m {
                    @apply hidden;
                }
            }
        }
        @media screen and (max-width: 568px) {
            .nav-dropdown {
                @apply  h-[calc(var(--vh,1vh)*91)];
            }
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
                    show: false,
                    list: [
                       'русский',
                       'английский',
                       'польский',
                    ]
                }
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