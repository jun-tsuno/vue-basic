<script setup>
const { count, increment, decrement } = useCounter();

const enableCustomLayout = () => {
	setPageLayout('custom');
};

useHead({
	title: 'About Page',
	meta: [{ name: 'description', content: 'About Page' }],
});

// definePageMeta({
// 	layout: false,
// });
</script>

<template>
	<div>
		<button @click="enableCustomLayout">Update Layout</button>
		<h2>Counter</h2>
		<p>Count: {{ count }}</p>
		<div>
			<button @click="increment" class="py-2 px-4 bg-gray-300 border-[1px]">
				+
			</button>
		</div>
	</div>
</template>
