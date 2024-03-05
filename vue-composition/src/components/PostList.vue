<template>
	<div class="post-list">
		<div v-if="posts.length">
			<div v-for="post in posts" :key="post.id">
				<SinglePost :post="post" />
			</div>
		</div>
	</div>
</template>

<script>
import SinglePost from './SinglePost.vue';

export default {
	props: ['posts'],
	components: { SinglePost },
	setup(props) {},
};
</script>

<style></style>
