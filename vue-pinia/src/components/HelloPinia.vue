<template>
	<h2>Hello Pinia</h2>
	<p>Count: {{ counter.count }}</p>
	<button @click="counter.$reset">Reset</button>
	<button @click="patch">Patch</button>
	<button @click="replace">Replace</button>
</template>

<script setup>
import { useStoreCounter } from '../stores/counter';
const counter = useStoreCounter();

const patch = () => {
	counter.$patch({
		count: 100,
		user: {
			name: 'John',
		},
	});
};

const replace = () => {
	counter.$state = {
		count: 100,
		count2: 200,
		user: {
			name: 'Hoge',
		},
	};
};
</script>

<style></style>
