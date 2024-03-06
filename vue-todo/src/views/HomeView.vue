<script setup>
import { onMounted, computed } from 'vue';
import { fetchAllTodo } from '../api/todo';
import { customDateFormatter } from '../../utils/date';
import TodoCard from '@/components/TodoCard.vue';
import AddTodo from '@/components/AddTodo.vue';

const { load, allTodo, errorMessage } = fetchAllTodo();
onMounted(() => load());

const formattedTodos = computed(() => {
	return allTodo.value.length > 0
		? allTodo.value.map((todo) => ({
				...todo,
				formattedDate: customDateFormatter(todo.date, 'yyyy-M-d'),
		  }))
		: [];
});

const countRemainTodo = computed(() => {
	const count =
		allTodo.value.length > 0
			? allTodo.value.reduce((acc, curr) => {
					if (!curr.isCompleted) {
						acc++;
					}
					return acc;
			  }, 0)
			: 0;
	return count;
});

const handleRefetch = async () => {
	await load();
};
</script>

<template>
	<section id="todo-display">
		<h1>ToDo List</h1>
		<AddTodo @todo-update="handleRefetch" />
		<p>Remain task: {{ countRemainTodo }}</p>
		<div v-if="allTodo.length" class="todo-list">
			<TodoCard
				v-for="todo in formattedTodos"
				:key="todo.id"
				:todo="todo"
				:allTodo="allTodo"
				@todo-update="handleRefetch"
			/>
		</div>
	</section>
</template>

<style scoped>
#todo-display {
	margin: 0 auto;
	max-width: 40rem;
}
.todo-list {
	display: grid;
	gap: 1rem;
	margin: 1rem 0;
}
</style>
