<script setup>
// const { data: posts } = await useFetch(
// 	'https://jsonplaceholder.typicode.com/posts/'
// );

// const { data: posts, error } = await useAsyncData('posts', () => {
// 	return $fetch('https://jsonplaceholder.typicode.com/posts/');
// });
// console.log(useNuxtApp().payload.data);

// const {
// 	data: posts,
// 	error,
// 	pending,
// } = await useLazyFetch('https://jsonplaceholder.typicode.com/posts/');

const {
	data: posts,
	error,
	pending,
} = await useLazyAsyncData('posts', () => {
	return $fetch('https://jsonplaceholder.typicode.com/posts/');
});
</script>

<template>
	<div>
		<div>Posts</div>
		<div v-if="error">{{ error }}</div>
		<div v-if="pending">Loading...</div>
		<ul>
			<li v-for="post in posts" :key="post.id">
				{{ post.title }}
			</li>
		</ul>
	</div>
</template>
