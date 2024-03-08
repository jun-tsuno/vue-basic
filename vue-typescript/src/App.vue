<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';

export type User = {
	firstName: string;
	lastName: string;
	age: number;
};

const count = ref(0);
const input = ref<HTMLInputElement>();
const name = ref('Jane');
const user = ref<User>({
	firstName: 'John',
	lastName: 'Doe',
	age: 20,
});

const fullName = computed(
	() => `${user.value.firstName} ${user.value.lastName}`
);

const handleChangeName = (firstName: string) => {
	user.value.firstName = firstName;
};

const handleChangeInput = (event: Event, arg: string) => {
	console.log(`argument: ${arg}`);
	console.log((event.target as HTMLInputElement).value);
};

onMounted(() => {
	input.value?.focus();
	console.log(input.value?.value);
});
</script>

<template>
	<div>Count: {{ count }}</div>
	<button @click="count++">Add Count</button>
	<hr />
	<HelloWorld
		msg="hello from app"
		:user="user"
		@change-name="handleChangeName"
	/>
	<input
		ref="input"
		v-model="name"
		@change="handleChangeInput($event, 'argument')"
	/>
	<hr />
	<HomeView />
	<hr />
	<AboutView />
</template>

<style scoped></style>
