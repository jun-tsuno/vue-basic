<template>
	<div v-if="job">
		<h1>Job Detail Page</h1>
		<p>The job id is {{ id }}</p>
		<h2>{{ job.title }}</h2>
		<p>{{ job.details }}</p>
	</div>
	<div v-else>
		<p>Loading....</p>
	</div>
</template>

<script>
export default {
	props: ['id'],
	// data() {
	// 	return {
	// 		id: this.$route.params.id,
	// 	};
	// },
	data() {
		return {
			job: null,
		};
	},
	mounted() {
		fetch(`http://localhost:3000/jobs/${this.id}`)
			.then((res) => res.json())
			.then((data) => (this.job = data))
			.catch((e) => console.log(e.message));
	},
};
</script>

<style></style>
