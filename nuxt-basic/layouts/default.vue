<script setup lang="ts">
useHead({
	titleTemplate: (title: string | undefined) => {
		return title ? `${title} | Nuxt3 basic` : 'Nuxt3 basic';
	},
	// titleTemplate: '%s | Nuxt3',
});
</script>

<template>
	<div class="text-cetner max-w-[800px] mx-auto my-10">
		<Navbar />
		<slot />
	</div>
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
