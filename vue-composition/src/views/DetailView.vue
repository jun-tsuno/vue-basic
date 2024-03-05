<template>
	<div>Post Detail</div>
	<div v-if="post">
		<h2>{{ post.title }}</h2>
		<p>{{ post.body }}</p>
		<span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
	</div>
</template>

<script>
import { getPost } from '../composables/get-post';

export default {
	props: ['id'],
	setup(props) {
		const { post, error, load } = getPost(props.id);
		load();
		return { post, error };
	},
};
</script>

<style></style>
