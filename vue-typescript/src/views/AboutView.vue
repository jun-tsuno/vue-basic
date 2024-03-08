<script setup lang="ts">
import { ref } from 'vue';

interface User {
	id: number;
	name: string;
	email: string;
	address: {
		street: string;
	};
}

const users = ref<User[]>([]);

const fetchUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	users.value = data;
};
fetchUsers();
</script>

<template>
	<div>
		<h3>Fetch Users</h3>
		<div v-if="users.length" v-for="user in users" :key="user.id">
			{{ user.name }}
		</div>
	</div>
</template>
