<template>
  <div class="layout_container">
    <div class="layout_container_side_menu">
      <LeftMenu></LeftMenu>
      <RouterView class="layout_container_pages"/>
    </div>
    <BottomMenu></BottomMenu>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import LeftMenu from '@/components/left-menu/left-menu.vue'
import BottomMenu from '@/components/bottom-menu/bottom-menu.vue'
</script>

<style scoped lang="scss">
.layout_container {
  max-width: 787px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  margin: 0 auto;

  &_side_menu {
    display: flex;
    gap: 24px;
  }

  &_pages {
    flex: 1 1;
  }
}
</style>