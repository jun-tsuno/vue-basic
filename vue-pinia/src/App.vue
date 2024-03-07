<script setup>
import HelloPinia from './components/HelloPinia.vue';
import ProductList from './components/ProductList.vue';
import Cart from './components/Cart.vue';
</script>

<template>
	<div id="app">
		<h1>商品一覧</h1>
		<ProductList />
		<hr />
		<Cart />
	</div>
</template>

<style scoped></style>
