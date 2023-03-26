import { defineStore } from "pinia"
import { toRefs } from "vue"
import { IProduct } from "../api/shop"

/***
 * 这里如果要用Omit，则不能选择interface：
 * The issue is that the Omit type requires an object type as its first argument, 
 * but the cartProductType is an interface. 
 * To fix this, we can rewrite the code like this:
 */
type cartProductType = Omit<IProduct, 'inventory'> & { num: number }
/**
 * Omit  is a utility type in TypeScript, 
 * which allows you to create a new type 
 * that omits specific properties from an existing type.  
 */

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartItems: [] as cartProductType[]
    }
  },

  getters: {
    totalSum (state)  {
      let sum = 0;
      state.cartItems.forEach(item => {
        sum += item.price * item.num;
      });
      return sum;
    }

  },

  actions: {
    // 1. 添加到购物车
    addToCart(item: IProduct) {
      // 1.1 购物车中有的情况
      const choosenProduct = this.cartItems.find(product => product.id === item.id)
      if (choosenProduct) {
        choosenProduct.num++
      } else {
        // 1.2 购物车没有的情况
        this.cartItems.push({
          id: item.id,
          price : item.price,
          title : item.title,
          num: 1
        })
      }
    }
  }

})