<template>
  <div class="info_modal">
    <div class="info_modal_container">
      <CancelIcon class="cancel_button"></CancelIcon>
      <div class="info_modal_img_block">
        <img class="info_modal_img" :src="$props.img" alt="">
      </div>
      <div class="info_modal_skeleton">
        <div class="info_modal_skeleton_block_title info_modal_skeleton_block"></div>
        <div class="info_modal_skeleton_text">
          <div class="h-10 info_modal_skeleton_block info_modal_skeleton_block_lg"></div>
          <div class="h-10 info_modal_skeleton_block info_modal_skeleton_block_lg"></div>
          <div class="h-10 info_modal_skeleton_block info_modal_skeleton_block_lg"></div>
          <div class="h-10 info_modal_skeleton_block info_modal_skeleton_block_md"></div>
          <div class="h-10 info_modal_skeleton_block info_modal_skeleton_block_sm"></div>
        </div>
      </div>
      <div class="w-full">
        <button class="delete_button">
          Удалить предмет
        </button>
      </div>
      <div class="delete_block">
        <input class="delete_block_input" type="number">
        <div class="delete_block_buttons">
          <button class="delete_block_buttons_cancel">Отмена</button>
          <button class="delete_block_buttons_confirm">Подтвердить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Inventory } from '@/shared/types';
import { CancelIcon } from '@/components/icons'
const props = defineProps<Inventory>()
</script>

<style scoped lang="scss">
.info_modal {
  background-color: var(--info-modal-bg);
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 999999;
  backdrop-filter: blur(8px);
  border-left: 1px solid var(--primary-border);
  padding: 55px 15px 18px;
  width: 220px;
  height: calc(100% - 73px);

  &_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &_img {
    width: 130px;
    height: 130px;

    &_block {
      width: 100%;
      padding-bottom: 30px;
      margin-bottom: 16px;
      text-align: center;
      border-bottom: 1px solid var(--primary-border);
    }
  }
  &_skeleton {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    &_text {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--primary-border);
      margin-bottom: 18px;
    }
    &_block {
      background-color: var(--primary-color);
      border-radius: 12px;

      &_title {
        width: 211px;
        height: 30px;
      }
      &_lg {
        width: 211px;
      }
      &_md {
        width: 180px;
      }
      &_sm {
        width: 80px;
      }
    }
  }
}
.cancel_button {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.delete_button {
  color: white;
  width: 100%;
  padding: 11px;
  background-color: var(--red-color);
  border-radius: 12px;
  font-size: 14px;
  cursor: pointer;
}
.delete_block {
  position: absolute;
  bottom: 0;
  z-index: 9999;
  background-color: #2D2D2D;
  width: 100%;
}
</style>