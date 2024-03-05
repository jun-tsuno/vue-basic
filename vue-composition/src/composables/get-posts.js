import { ref } from 'vue';

export const getPosts = () => {
	const posts = ref([]);
	const error = ref(null);

	const load = async () => {
		try {
			const res = await fetch('http://localhost:3000/posts');
			if (!res.ok) throw new Error('No data available');
			posts.value = await res.json();
		} catch (err) {
			error.value = err.message;
		}
	};

	return { posts, error, load };
};
