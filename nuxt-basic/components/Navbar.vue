<script setup>
const linkClass = 'hover:text-red-500';
</script>

<template>
	<nav class="flex items-center gap-3">
		<NuxtLink to="/" :class="linkClass">Home</NuxtLink>
		<NuxtLink to="/about" :class="linkClass">About</NuxtLink>
		<NuxtLink :to="{ name: 'users-list' }" :class="linkClass">Users</NuxtLink>
		<NuxtLink :to="{ name: 'posts' }" :class="linkClass">Posts</NuxtLink>
		<NuxtLink :to="{ name: 'server-api' }" :class="linkClass"
			>Server API</NuxtLink
		>
	</nav>
</template>
