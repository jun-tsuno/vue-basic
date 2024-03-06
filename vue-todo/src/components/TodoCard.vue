<template>
	<div class="card">
		<div class="title">
			<input type="checkbox" v-model="isCompleted" />
			<p :class="{ completed: isCompleted }">{{ todo.title || '-' }}</p>
		</div>
		<div class="card-footer">
			<p>Created Date:{{ todo.formattedDate || '-' }}</p>
			<button @click="handleDelete">Delete</button>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { updateTodo, deleteTodo } from '../api/todo';

const props = defineProps(['todo', 'allTodo']);
const emit = defineEmits(['todo-update']);
const isCompleted = ref(props.todo.isCompleted || false);

watch(isCompleted, async () => {
	const completed = isCompleted.value;
	const result = await updateTodo({ id: props.todo.id, completed });
	if (result.error) {
		alert(error);
	}
});

const handleDelete = async () => {
	const result = await deleteTodo(props.todo.id);
	if (result.error) {
		alert('fail to delete');
	} else {
		emit('todo-update');
	}
};
</script>

<style scoped>
.card {
	border: 1px solid lightgray;
	border-radius: 8px;
	padding: 1rem;
}
.title {
	display: flex;
	gap: 1rem;
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
}
.completed {
	text-decoration: line-through;
}
.card-footer {
	display: flex;
	justify-content: space-between;
}
</style>
