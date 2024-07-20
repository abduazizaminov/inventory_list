<template>
  <div>
    <VueDraggableNext
      class="iventory_grid"
      :list="inventoryStore.list"
      @end="onDragEnd"
    >
      <div @click="emit('openModal', el)" v-for="el in inventoryStore.list" :key="el.id" class="column">
        <InventoryBlock  :img="el.img" :id="el.id" :count="el.count ?? 0"></InventoryBlock>
        <div v-if="el.count" class="inventory_count">
          {{ el.count }}
        </div>
      </div>
    </VueDraggableNext>
  </div>
</template>

<script setup lang="ts">
import InventoryBlock from '@/components/inventory/index.vue';
import { VueDraggableNext } from 'vue-draggable-next';
import { inventoryModel } from '@/entities/inventory';
import { onMounted, defineEmits } from 'vue';
import type { Inventory } from '@/shared/types' 

const inventoryStore = inventoryModel();
const emit = defineEmits(['openModal'])
onMounted(() => {
  inventoryStore.setListItems();
});

const onDragEnd = () => {
  inventoryStore.saveListToLocalStorage();
};

const log = (el: Inventory) => {
  console.log(el)
}
</script>

<style scoped lang="scss">
.iventory_grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
.column {
  grid-column: span 1 / span 1;
  background-color: var(--darken-color-2);
  height: 100px;
  position: relative;
  border-top: 1px solid var(--primary-color);
  border-left: 1px solid var(--primary-color);
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    background-color: var(--hover-bg);
  }
  
  &:nth-child(5n + 1) {
    border-left: none;
  }
  &:nth-child(-n + 5) {
    border-top: none;
  }
}
.inventory_count {
  background-color: var(--darken-color-2);
  position: absolute;
  border-top-left-radius: 6px;
  bottom: 0;
  right: 0;
  padding: 2px 4px;
  color: white;
  opacity: 0.4;
  font-size: 10px;
  font-weight: 500;
  border: 1px solid var(--primary-border);
}
</style>
