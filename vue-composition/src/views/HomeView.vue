<script>
import { getPosts } from '../composables/get-posts';
import PostList from '@/components/PostList.vue';

export default {
	name: 'Home',
	components: { PostList },
	setup() {
		const { posts, error, load } = getPosts();
		console.log(error.value);
		load();
		return { posts, error };
	},
};
</script>

<template>
	<div class="home">Home</div>
	<div v-if="error">
		<p>{{ error }}</p>
	</div>
	<div v-if="posts.length">
		<PostList :posts="posts" />
	</div>
	<div v-if="!posts.length && !error">
		<p>Loading...</p>
	</div>
</template>

<style scoped></style>
