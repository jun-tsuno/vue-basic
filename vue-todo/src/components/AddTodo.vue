<template>
	<form @submit.prevent="handleSubmit" class="input-area">
		<input type="text" v-model="title" placeholder="Todo..." />
		<button>Add</button>
	</form>
</template>

<script setup>
import { ref } from 'vue';
import { addTodo } from '../api/todo';

const title = ref('');
const emit = defineEmits(['todo-update']);

const handleSubmit = async () => {
	if (!title.value) return alert('Input Required');

	const result = await addTodo(title.value);
	let message;
	if (result.error) {
		message = result.error;
	} else {
		emit('todo-update');
		message = 'Added successfully';
	}
	title.value = '';
	alert(message);
};
</script>

<style scoped>
.input-area {
	display: flex;
	gap: 0.5rem;
}
.input-area input {
	padding: 0.5rem 1rem;
	width: 100%;
}
.input-area button {
	width: 8rem;
	background-color: aquamarine;
}
</style>
