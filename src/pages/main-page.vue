<template>
  <div class="container main">
    <inventory-list @openModal="openModal"></inventory-list>
    <InfoModal :img="inventory?.img" :count="inventory?.count" :id="inventory?.id" ref="infoModalRef"></InfoModal>
  </div>
</template>

<script setup lang="ts">
import InventoryList from '@/components/inventory-list/index.vue'
import InfoModal from '@/components/info-modal/index.vue'
import type { Inventory } from '@/shared/types'
import { ref, type Ref } from 'vue'
const infoModalRef = ref()
const inventory = ref() as Ref<Inventory>

const openModal = (el: Inventory) => {
  if (infoModalRef.value && el.count && el.img) {
    inventory.value = el
    infoModalRef.value.open()
  }
}
</script>

<style lang="scss" scoped>

.main {
  overflow: hidden;
  position: relative;
}
</style>