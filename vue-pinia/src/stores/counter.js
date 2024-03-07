import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useStoreCounter = defineStore('counter', {
	state: () => ({
		count: 1,
		count2: 2,
		user: {
			name: 'hoge',
		},
	}),
	getters: {
		doubleCount: (state) => state.count * 2,
	},
	actions: {
		increment() {
			this.count++;
		},
	},
});

// export const useStoreCounter = defineStore('counter', () => {
// 	const count = ref(1);

// 	const increment = () => count.value++;

// 	const doubleCount = computed(() => count.value * 2);

// 	return { count, increment, doubleCount };
// });
