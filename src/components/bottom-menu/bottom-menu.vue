<template>
  <div class="bottom_menu container">
    <div class="skeleton"></div>
    <CancelIcon class="cancel_svg"/>
  </div>
</template>

<script setup lang="ts">
import { CancelIcon } from '@/components/icons'
</script>

<style scoped lang="scss">
.bottom_menu {
  padding: 18px 8px 18px 18px;
  display: flex;
  justify-content: space-between;
  gap: 36px;
}
.skeleton {
  width: 100%;
  height: 36px;
  border-radius: 12px;
  background-color: var(--primary-color);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.cancel_svg {
  width: 24px;
  height: 24px;
  position: relative;
  top: -10px;
}
</style>