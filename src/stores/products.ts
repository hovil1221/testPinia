import { defineStore } from "pinia"
import { getProducts, IProduct } from "../api/shop" //相当于从服务器读取数据

export const useProdunctsStore = defineStore('products', {
  state: () => {
    return {
      all: [] as IProduct[],
    }
  },
  getters: {},
  actions: {
    async loadAllProducts() {
      const result = await getProducts()
      this.all = result
    },
    decreProduct(item:IProduct) {
      item.inventory--
    }
  }

})