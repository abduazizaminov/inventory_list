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
        { id: 3, img: '/inventory/3.svg', count: 5 }
      ];
      while (list.value.length < 25) {
        list.value.push({ id: list.value.length + 1, img: '', count: null });
      }
      saveListToLocalStorage();
    }
  }

  function saveListToLocalStorage() {
    localStorage.setItem('inventoryList', JSON.stringify(list.value));
  }

  return {
    list,
    setListItems,
    saveListToLocalStorage
  };
});
