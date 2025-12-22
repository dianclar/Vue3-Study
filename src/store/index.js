import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const store = defineStore('data', () => {
  const data = ref(100)
  const adddata = () => data.value++
  const dbdata = computed(() => data.value * 2)
  return {
    data,
    adddata,
    dbdata
  }
}, { persist: true })