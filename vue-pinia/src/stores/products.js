import { defineStore } from 'pinia';
import shop from '../api/shop.js';

export const useStoreProducts = defineStore('products', {
	state: () => ({
		products: [],
	}),
	actions: {
		getProducts() {
			shop.getProducts((products) => (this.products = products));
		},
		decrementInventory(productId) {
			const product = this.products.find((product) => product.id === productId);
			if (product) return product.inventory--;
		},
		incrementInventory(productId, quantity) {
			const product = this.products.find((product) => product.id === productId);
			if (product) return (product.inventory += quantity);
		},
	},
});
