<template>
	<p>{{ `Your Reaction Time - ${score}ms` }}</p>
	<p>{{ rank }}</p>
</template>

<script>
export default {
	props: ['score'],
	data() {
		return {
			rank: null,
		};
	},
	mounted() {
		if (this.score < 250) {
			this.rank = 'Lightning finger!';
		} else if (this.score < 350) {
			this.rank = 'So so';
		} else {
			this.rank = 'Are you snail?';
		}
	},
};
</script>

<style></style>
