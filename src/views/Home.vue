<template>
  <h1>Home Page</h1>
  counter:
  {{ counter }}
  <button @click="counter++">+</button>
  <hr>
  double:
  {{ double }}
  <hr>
  <button @click="changeValue"> add one</button>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { ref } from 'vue';
import { useStore } from '../stores/index'

const store = useStore()
const { counter, double, } = storeToRefs(store)
</script>
<style scoped></style>