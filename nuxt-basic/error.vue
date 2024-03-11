<!-- custom error page -->

<script setup>
const error = useError();
</script>

<template>
	<NuxtLayout>
		<h1>{{ error?.statusCode }}: {{ error?.message }}</h1>
		<p>Customized full page error</p>
		<button @click="clearError" class="p-3 bg-blue-100">Clear Error</button>
	</NuxtLayout>
</template>
