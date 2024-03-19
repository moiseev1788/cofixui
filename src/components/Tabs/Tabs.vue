
<script setup>
    import {ref} from 'vue'
    import Button from "../Button/Button.vue"

    const props = defineProps({
        names: {
            type: Array,
            required: true
        },
        selectedTab: {
            type: String,
            required: false
        }
    })

    const emit = defineEmits(['changeTab'])

    const clickOnTab = (tabName) => {
        emit('changeTab', tabName)
    }

</script>

<template>
    <div class="tabs-nav mb-4">
        <Button
            v-for="tab in names"
            :key="tab.name"
            :label="tab.label"
            rounded="rounded-full"
            :class="['tabs-item', {'selected': tab.name === selectedTab}]"
            @click="clickOnTab(tab.name)"
        />
    </div>
    <div class="tabs-content">
        <slot/>
    </div>
</template>

<style lang="scss" scoped>
    .tabs {
        &-nav {
            @apply flex flex-wrap gap-4;
            @media screen and (max-width: 414px) {
                @apply gap-2;
            }
            @media screen and (max-width: 375px) {
                @apply gap-1;
            }
            .button-large {
                @media screen and (max-width: 414px) {
                    @apply pt-[8px] pb-[10px] pl-3 pr-3  w-auto min-h-12 text-base cursor-pointer;
                }
            }
        }
        &-item {
            @apply bg-neutral-600;
            &.selected {
                @apply bg-primary-500;
            }
        }
    }
</style>