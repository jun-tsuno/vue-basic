import { defineStore } from 'pinia';
import { useStoreProducts } from './products';

export const useStoreCart = defineStore('cart', {
	state: () => ({
		items: [],
	}),
	getters: {
		total() {
			return this.items.reduce((acc, curr) => {
				return acc + curr.price * curr.quantity;
			}, 0);
		},
	},
	actions: {
		addCart(product) {
			const { decrementInventory } = useStoreProducts();
			const item = this.items.find((item) => item.id === product.id);
			if (item) {
				item.quantity++;
			} else {
				this.items.push({ ...product, quantity: 1 });
			}
			decrementInventory(product.id);
		},

		removeCart(product) {
			const { incrementInventory } = useStoreProducts();
			const item = this.items.find((item) => item.id === product.id);
			if (item) {
				this.items = this.items.filter((item) => item.id !== product.id);
				incrementInventory(product.id, product.quantity);
			}
		},
	},
});
