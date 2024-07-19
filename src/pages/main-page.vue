<template>
  <div class="container main">
    <inventory-list></inventory-list>
    <InfoModal></InfoModal>
  </div>
</template>

<script setup lang="ts">
import InventoryList from '@/components/inventory-list/index.vue'
import InfoModal from '@/components/info-modal/index.vue'
</script>

<style lang="scss" scoped>

.main {
  overflow: hidden;
  position: relative;
}
</style>