<script setup>
const resetError = (error) => {
	error.value = null;
};
const someErrorLogger = (error) => {
	console.log('someErrorLogger', error);
};
</script>

<template>
	<div>
		<h1>Users Page</h1>
		<NuxtErrorBoundary @error="someErrorLogger">
			<NuxtPage />
			<template #error="{ error }">
				<p>{{ error }}</p>
				<button @click="resetError(error)" class="p-3 bg-blue-100">
					Clear Error
				</button>
			</template>
		</NuxtErrorBoundary>
	</div>
</template>
