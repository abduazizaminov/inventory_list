<template>
  <div class="left_menu_container container">
    <div class="img_container">
      <img class="img" src="@/assets/images/nicebg.png" alt="">
    </div>
    <div>
      <div class="skeleton">
        <div class="skeleton_block skeleton_block_title"></div>
        <div class="skeleton_block_main">
          <div class="skeleton_block skeleton_block_first h-10"></div>
          <div class="skeleton_block skeleton_block_second h-10"></div>
          <div class="skeleton_block skeleton_block_third h-10"></div>
          <div class="skeleton_block skeleton_block_fourth h-10"></div>
          <div class="skeleton_block skeleton_block_fifth h-10"></div>
          <div class="skeleton_block skeleton_block_sixth h-10"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.left_menu_container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 18px 18px 24px;
}

.img {
  display: block;
  width: 100%;
  height: auto;
  filter: blur(8px);
  border-radius: 12px;
  &_container {
    position: relative;
    overflow: hidden;
    display: inline-block;
    border-radius: 12px;
  }
}
.skeleton {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  &_block {
    border-radius: 12px;
    background-color: var(--primary-color);

    &_title {
      width: 190px;
      height: 26px;
    }
    &_main {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    &_first {
      width: 155px;
    }
    &_second {
      width: 190px;
    }
    &_third {
      width: 170px;
    }
    &_fourth {
      width: 160px;
    }
    &_fifth {
      width: 140px;
    }
    &_sixth {
      width: 80px;
    }
  }
}
</style>
