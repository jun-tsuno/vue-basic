<script setup>
import { onMounted, ref } from 'vue';
import { useStoreProducts } from '../stores/products';
import { useStoreCart } from '../stores/cart';
import { storeToRefs } from 'pinia';

const { products } = storeToRefs(useStoreProducts());
const { getProducts } = useStoreProducts();
const { addCart } = useStoreCart();

onMounted(() => {
	getProducts();
});
</script>

<template>
	<ul>
		<li v-for="product in products" :key="product.id">
			{{ product.title }} - ¥{{ product.price.toLocaleString() }}
			<button @click="addCart(product)" :disabled="!product.inventory">
				Add card
			</button>
		</li>
	</ul>
</template>
