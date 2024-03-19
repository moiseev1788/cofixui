<template>
    <ul class="nav-list">
        <HeaderItem />
        <li class="nav-item">
            <div class="nav-title">карьера</div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.nav {
    &-list {
        @apply flex items-center pl-14 gap-9 h-full min-h-20;
        @media screen and (max-width: 1100px) {
            @apply pl-8 gap-6;
        }
        @media screen and (max-width: 1024px) {
            @apply hidden items-start pl-4 pr-4 gap-4;
        }
    }
    &-item {
        @apply cursor-pointer flex items-center relative min-h-20;
        @media screen and (max-width: 1024px) {
            @apply min-h-[auto] static #{!important};
        }
        &:hover {
            &::before {
                @apply content-[''] absolute bottom-[-9px] w-full h-[11px] bg-primary-500 rounded-t-[10px];
                @media screen and (max-width: 1024px) {
                    @apply hidden;
                }
            }
        }
    }
    &-title {
        @apply text-xl font-stratos text-secondary-500;
        @media screen and (max-width: 1024px) {
            @apply text-xxl;
        }
    }
}

</style>

<script>

import HeaderItem from './HeaderItem.vue';

export default {
  components: {
    HeaderItem,
  }
}

</script>