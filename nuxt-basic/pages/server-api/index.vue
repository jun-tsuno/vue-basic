<script setup>
const { data: tasks, refresh } = useFetch('/api/task');

const task = ref('');

const handleSubmit = async () => {
	if (!task.value) return;
	const data = await $fetch('/api/task', {
		method: 'POST',
		body: { task: task.value },
	});
	await refresh();
	task.value = '';
};
</script>

<template>
	<div>
		<h1>Server API Demo</h1>
		<form @submit.prevent="handleSubmit">
			<input type="text" v-model="task" class="border-[1px] border-gray-600" />
			<button type="submit" class="p-1 bg-green-300">Submit</button>
		</form>
		<ul class="list-disc">
			<li v-for="task in tasks" :key="task.id">
				{{ task.task }}
			</li>
		</ul>
	</div>
</template>
