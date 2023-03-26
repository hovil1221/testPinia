<template>
  <ul>
    <li v-for="item in productsStore.all" :key="item.id">
      商品名称{{ item.title }} - 商品价格 {{ item.price }}
      <button @click="addToCart(item)"
      :disabled="!item.inventory">添加到购物车</button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useCartStore } from '../stores/cart';
import { useProdunctsStore } from '../stores/products'
import { IProduct } from "../api/shop"

const cartStore = useCartStore()

const productsStore = useProdunctsStore() // 先引用
productsStore.loadAllProducts() // 在调用actions中的方法

function addToCart(item: IProduct) {
  cartStore.addToCart(item)
  productsStore.decreProduct(item)
}
</script>