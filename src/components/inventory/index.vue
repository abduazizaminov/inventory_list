<template>
  <div class="inventory_block">
    <img :src="props.img" alt="">
  </div>
</template>

<script setup lang="ts">
import type { Inventory } from '@/shared/types';
const props = defineProps<Inventory>()
</script>

<style scoped lang="scss">
.inventory_block {
  padding: 21px 25px;
  width: fit-content;
  border-color: var(--darken-color-2);
}
</style>