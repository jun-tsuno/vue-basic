import { ref } from 'vue';
import { api } from './axios';

export const fetchAllTodo = () => {
	const allTodo = ref([]);
	const errorMessage = ref(null);

	const load = async () => {
		try {
			const res = await api.get('/todos');
			allTodo.value = res.data;
		} catch (error) {
			errorMessage.value = error.message;
		}
	};

	return { allTodo, errorMessage, load };
};

export const updateTodo = async ({ id, completed }) => {
	try {
		const res = await api.patch(`/todos/${id}`, {
			isCompleted: completed,
		});
		return { data: res.data, error: '' };
	} catch (error) {
		return { data: null, error: error.message };
	}
};

export const addTodo = async (title) => {
	try {
		const res = await api.post(`/todos`, {
			title,
			date: new Date(),
			isCompleted: false,
		});
		return { data: res.data, error: '' };
	} catch (error) {
		return { data: null, error: error.message };
	}
};

export const deleteTodo = async (id) => {
	try {
		const res = await api.delete(`/todos/${id}`);
		return { data: res.data, error: '' };
	} catch (error) {
		return { data: null, error: error.message };
	}
};
