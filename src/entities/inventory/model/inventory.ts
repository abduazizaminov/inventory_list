import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import type { Inventory } from '@/shared/types';

export const useInventoryStore = defineStore("inventory", () => {
  const list = ref([]) as Ref<Array<Inventory>>;

  function setListItems() {
    const storedList = localStorage.getItem('inventoryList');
    if (storedList) {
      list.value = JSON.parse(storedList);
    } else {
      list.value = [
        { id: 1, img: '/inventory/1.svg', count: 4 },
        { id: 2, img: '/inventory/2.svg', count: 2 },
        { id: 3, img: '/inventory/3.svg', count: 5 },
        { id: 4, img: '/inventory/1.svg', count: 15 },
        { id: 5, img: '/inventory/2.svg', count: 25 },
      ];
      while (list.value.length < 25) {
        list.value.push({ id: list.value.length + 1, img: '', count: 0 });
      }
      saveListToLocalStorage();
    }
  }

  function saveListToLocalStorage() {
    localStorage.setItem('inventoryList', JSON.stringify(list.value));
  }

  function removeItem(id: number, count: number) {
    const item = list.value.find(item => item.id === id);
    if (item && item.count !== undefined && item.count !== null) {
      if (count >= item.count) {
        item.img = '';
        item.count = undefined;
      } else {
        item.count -= count;
      }
      saveListToLocalStorage();
    }
  }

  return {
    list,
    setListItems,
    saveListToLocalStorage,
    removeItem
  };
});
