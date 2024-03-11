<script setup lang="ts">
definePageMeta({
	middleware: 'auth',
});
</script>

<template>
	<div>
		<div>Catch all route</div>
		<p>{{ $route.params.slug }}</p>
	</div>
</template>
