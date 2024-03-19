
<script setup>
    import MapCard from './MapCard.vue';
</script>

<template>
    <section class="map-grid mb-page">
        <div class="container">
            <div class="wrapper-page mb-8">
                <h2>Международный бренд</h2>
            </div>
            <div class="map-grid-row">
                <MapCard title="Россия" number="280+" img="RU.png" />
                <MapCard title="Израиль" number="70+" img="IL.png" />
                <MapCard title="Беларусь" number="52" img="BY.png" />
                <MapCard title="Польша" number="18" img="PL.png" />
                <MapCard title="Армения" number="2" img="AM.png" />
                <MapCard title="Испания" number="1" img="ES.png" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .map-grid {
        &-row {
            @apply flex flex-wrap gap-4;
        }
    }
</style>