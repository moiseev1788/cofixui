<script setup>
const props = defineProps({
    label: {
        type: String,
        default: 'Button'
    },
    color: {
        type: String,
        default: 'primary'
    },
    size: {
        type: String,
        default: 'large'
    },
    disabled: {
        type: Boolean,
        required: false
    },
    rounded: {
        type: String,
        default: 'rounded-small'
    }
});
</script>


<template>
    <button 
    :class="['button', `button-${color}`, `button-${rounded}`, `button-${size}`]"
    :disabled="disabled">{{ label }}</button>
</template>

<style lang="scss" scoped>
.button {
    @apply pt-[9px] pb-[10px] pl-4 pr-4  w-auto min-h-16 text-white text-xl cursor-pointer flex items-center justify-center;

    &:disabled {
        @apply bg-neutral-600 cursor-default;
    }

    // bgcolor
    &-primary {
        @apply bg-primary-500;
        &:enabled:hover {
            @apply bg-primary-600
        }
    }
    &-secondary {
        @apply bg-secondary-500;
        &:enabled:hover {
            @apply bg-secondary-600;
        }
    }
    &-success {
        @apply bg-success-500;
        &:enabled:hover {
            @apply bg-success-600;
        }
    }
    &-danger {
        @apply bg-danger-500;
        &:enabled:hover {
            @apply bg-danger-600;
        }
    }
    &-disabled {
        @apply bg-neutral-600 cursor-default;
    }
    &-warning {
        @apply bg-warning-500;
        &:enabled:hover {
            @apply bg-warning-600;
        }
    }
    &-tertiary {
        @apply border-[1px] border-secondary-500 bg-transparent text-secondary-500;
        &:enabled:hover {
            @apply bg-secondary-600 text-neutral-50;
        }
    }
    &-ghost {
        @apply bg-transparent text-secondary-500;
    }
    &-accent {
        @apply bg-accent-500;
        &:enabled:hover {
            @apply bg-accent-600;
        }
    }

    // rounded
    &-rounded-small {
        @apply rounded-lg;
    }
    &-rounded-medium {
        @apply rounded-2xl;
    }
    &-rounded-full {
        @apply rounded-full;
    }

    // size
    &-large {
        @apply pt-[9px] pb-[10px] pl-4 pr-4  w-auto min-h-16 text-xl cursor-pointer;
    }
    &-medium {
        @apply pt-[8px] pb-[10px] pl-3 pr-3  w-auto min-h-12 text-base cursor-pointer;
    }
    &-small {
        @apply pt-[9px] pb-[10px] pl-2 pr-2  w-auto min-h-8 text-sm cursor-pointer;
    }
}
</style>