<script setup>
const { count } = useCounter();
const { data: users } = await useFetch(
	'https://jsonplaceholder.typicode.com/user/'
);
if (!users.value)
	throw createError({ statusCode: 404, statusMessage: 'page not found' });

const handleClick = () => {
	// throw new Error('Error!!');

	// error boundary (recommended)
	// throw createError({
	// 	statusCode: '400',
	// 	statusMessage: 'Bad Request',
	// 	message: 'Error by createError',
	// });

	// full page error
	throw showError({
		statusCode: '400',
		statusMessage: 'Bad Request',
		message: 'Error by showError',
	});
};
</script>

<template>
	<div>
		<h1>User List Page</h1>
		<p>Count: {{ count }}</p>
		<button @click="handleClick" class="p-3 bg-blue-100">Create Error</button>

		<ul>
			<li v-for="user in users" :key="user.id">
				{{ user.name }}
			</li>
		</ul>
	</div>
</template>
