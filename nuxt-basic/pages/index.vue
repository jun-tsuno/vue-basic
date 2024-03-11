<script setup>
const show = ref(false);
const { count, increment, decrement } = useCounter(10);
const { $hello } = useNuxtApp();

const handleClick = () => {
	show.value = true;
};
</script>

<template>
	<div>
		<h1>Main Page</h1>
		<p>{{ $hello('form plugin') }}</p>
		<button @click="handleClick">Coupon Get</button>
		<LazyCoupon v-if="show" />
		<hr />
		<div>
			<p>Image form assets directory</p>
			<img src="~/assets/img/icon-green.png" alt="Nuxt3 Icon" />
			<p>Image form public directory</p>
			<img src="/img/logo-black.png" alt="Nuxt2 Icon 2" />
		</div>
		<hr />
		<p>Count: {{ count }}</p>
		<button @click="increment">increase</button>
		<button @click="decrement">decrease</button>
	</div>
</template>
