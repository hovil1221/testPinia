import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      counter: 100,
      name : 'asdf'
    }
  },
  getters: {
    double: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
  }
})