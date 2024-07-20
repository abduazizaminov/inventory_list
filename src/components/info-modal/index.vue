<template>
  <div ref="info_modal" class="info_modal">
    <div class="info_modal_container">
      <CancelIcon @click="close" class="cancel_button"></CancelIcon>
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
        <button @click="showDeleteBlock" class="delete_button">
          Удалить предмет
        </button>
      </div>
      <div ref="delete_block" class="delete_block">
        <input v-model="count" :max="props.count" placeholder="Введите количество" class="delete_block_input" type="number">
        <div class="delete_block_buttons">
          <button @click="close" class="delete_block_buttons_cancel box-shadow">Отмена</button>
          <button @click="deleteInventory" class="delete_block_buttons_confirm box-shadow">Подтвердить</button>
        </div>
      </div>
    </div>
  </div>
  <div @click="close" ref="hide_bg" class="hide_bg"></div>
</template>

<script setup lang="ts">
import type { Inventory } from '@/shared/types';
import { CancelIcon } from '@/components/icons'
import { inventoryModel } from '@/entities/inventory';
import { ref, defineExpose } from 'vue'

const props = defineProps<Inventory>()
const inventoryStore = inventoryModel()

const delete_block = ref()
const count = ref()
const info_modal = ref()
const hide_bg = ref()

const deleteInventory = () => {
  inventoryStore.removeItem(props.id, count.value)
  close()
}

const open = () => {
  info_modal.value.style.right = '0px'
  hide_bg.value.style.display = 'block'
}

const close = () => {
  info_modal.value.style.right = '-242px'
  hide_bg.value.style.display = 'none'
  hideDeleteBlock()
  count.value = null
}

const showDeleteBlock = () => {
  delete_block.value.style.bottom = '0px'
}
const hideDeleteBlock = () => {
  delete_block.value.style.bottom = '-135px'
  count.value = null
}

defineExpose({
  open,
  close
})
</script>

<style scoped lang="scss">
.hide_bg {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 40;
  top: 0;
  opacity: 0;
}
.info_modal {
  background-color: var(--info-modal-bg);
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 999999;
  backdrop-filter: blur(8px);
  border-left: 1px solid var(--primary-border);
  padding: 55px 15px 18px;
  height: calc(100% - 73px);
  transition: all 0.5s ease-out;
  right: -242px;

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
  background-color: var(--darken-color-2);
  width: calc(100% - 40px);
  border-top: 1px solid var(--primary-border);
  padding: 20px;
  bottom: -135px;
  transition: all 0.3s ease-out;

  &_input {
    border: 1px solid var(--primary-border);
    padding: 12px;
    border-radius: 4px;
    color: white;
    opacity: 0.4;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  &_buttons {
    display: flex;
    justify-content: space-between;

    &_cancel {
      cursor: pointer;
      background-color: white;
      border-radius: 8px;
      color: var(--primary-color);
      padding: 8px 15px;
      font-size: 14px;
    }

    &_confirm {
      cursor: pointer;
      background-color: var(--red-color);
      color: white;
      font-size: 14px;
      padding: 8px 15px;
      border-radius: 8px;
    }
  }

}
</style>