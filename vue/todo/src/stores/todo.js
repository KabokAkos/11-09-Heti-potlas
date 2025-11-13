import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useToDoStore = defineStore('task', () => {
  const task = ref(0)
  const deadline = ref(0)
  // const doubleCount = computed(() => count.value * 2)

  function save() {
    console.log(task)
  }

  return { task, deadline, save }
})
