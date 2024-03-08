<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const div = ref<HTMLDivElement>();
const x = ref(0);
const y = ref(0);

const handleMouseMove = (e: MouseEvent) => {
	x.value = e.pageX;
	y.value = e.pageY;
};

onMounted(() => {
	div?.value?.addEventListener('mousemove', handleMouseMove);
});
onUnmounted(() => {
	console.log('event removed');
	div?.value?.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
	<div ref="div" class="box">
		<p>Cursor here</p>
		<p>x: {{ x }}, y: {{ y }}</p>
	</div>
</template>

<style scoped>
.box {
	width: 400px;
	height: 300px;
	background-color: white;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
