<script setup lang="ts">
import MapLayout from './MapLayout.vue';
import MethodLayout from './MethodLayout.vue';
</script>

<template>
<div class="map-main">
    <MapLayout class="overLayout"/>
    <MethodLayout class="overLayout"/>
</div>
</template>

<style scoped>
.map-main {
    width: 100%;
    height: 800px;
    position: relative;

    .overLayout {
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>
