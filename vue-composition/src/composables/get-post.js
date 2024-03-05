import { ref } from 'vue';

export const getPost = (id) => {
	const post = ref(null);
	const error = ref(null);

	const load = async () => {
		try {
			const res = await fetch(`http://localhost:3000/posts/${id}`);
			if (!res.ok) throw new Error('No data available');
			post.value = await res.json();
		} catch (err) {
			error.value = err.message;
		}
	};

	return { post, error, load };
};
