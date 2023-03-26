<template>
  <h1>Pinia - 购物车展示</h1>
  <hr>
  <h2>商品列表</h2>
  <ProductList></ProductList>
  <hr>
  <h2>购物车</h2>
  <ShoppingCart></ShoppingCart>
</template>


<script setup lang="ts">
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
</script>