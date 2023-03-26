<template>
  <div class="cart">
    <h2>我的购物车</h2>
    <p>
      <i>请添加一些商品到购物车</i>
    </p>
    <ul>
      <li v-for="item in cart.cartItems" :key="item.id">
        商品名称{{ item.title }} - 商品价格{{ item.price }} × 商品数量{{ item.num }}</li>
    </ul>
    <p>商品总价: {{ cart.totalSum }}</p>
    <p>
      <button>结算</button>
    </p>
    <p>结算成功 / 失败.</p>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '../stores/cart';


const cart = useCartStore()

</script>