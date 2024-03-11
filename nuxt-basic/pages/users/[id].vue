<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);
</script>

<template>
	<p>User ID: {{ $route.params.id }}</p>
</template>
