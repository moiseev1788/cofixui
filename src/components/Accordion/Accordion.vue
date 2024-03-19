  
  <script setup>
    import { computed, provide, ref } from 'vue'
    
    const expanded = ref(null)
    
    provide('accordion-register', () => {
        const id = Symbol()
    
        return {
            expanded: computed(() => expanded.value === id),
        
            toggle () {
                expanded.value = expanded.value === id ? null: id
            },
        
            unregister () {
                if (expanded.value === id) {
                    expanded.value = null
                }
            }
        }
    })
  </script>

<template>
    <div class="accordion">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
  .accordion {
    @apply flex flex-col border-b-[1px] border-neutral-600;
  }
</style>
  