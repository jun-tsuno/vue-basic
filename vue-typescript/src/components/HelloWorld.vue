<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '@/App.vue';
type Props = {
	msg: string;
	user: User;
};
defineProps<Props>();

// const emit = defineEmits<{
// 	(event: 'changeName', firstName: string): void;
// }>();
const emit = defineEmits(['changeName']);

const firstName = ref<string>('');
</script>

<template>
	<div class="greetings">
		<h1 class="green">{{ msg }}</h1>
		<p>{{ `${user.firstName} ${user.lastName}` }}</p>
	</div>
	<input type="text" v-model="firstName" />
	<button @click="emit('changeName', firstName)">Change name</button>
</template>

<style scoped>
h1 {
	font-weight: 500;
	font-size: 2.6rem;
	position: relative;
	top: -10px;
}

h3 {
	font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
	text-align: center;
}

@media (min-width: 1024px) {
	.greetings h1,
	.greetings h3 {
		text-align: left;
	}
}
</style>
