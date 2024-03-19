<template>
    <div class="nav-bottom">
        <div class="container">
            <div class="nav-bottom-list">
                <a href="" class="nav-bottom-title active">о франшизе</a>
                <a href="" class="nav-bottom-title">купить франшизу</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .nav-bottom {
        @apply w-full border-t-[1px] border-neutral-600;
        @media screen and (max-width: 1024px) {
            @apply hidden;
        }
        &-list {
            @apply flex gap-6 items-center min-h-12;
        }
        &-title {
            @apply text-base font-stratos text-secondary-500;
            &.active {
                @apply text-primary-500;
                &:hover {
                    @apply text-primary-500;
                }
            }
            &:hover {
                @apply text-neutral-900;
            }
        }
    }
</style>