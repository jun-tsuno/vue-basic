<template>
	<form @submit.prevent="handleSubmit">
		<label>Email:</label>
		<input type="email" required v-model="email" />
		<label>Password:</label>
		<input
			type="password"
			required
			v-model="password"
			autocomplete="new-password"
		/>
		<div v-if="passwordError" class="error">{{ passwordError }}</div>
		<label>Role:</label>
		<select v-model="role">
			<option value="developer">Web Developer</option>
			<option value="designer">Web Designer</option>
		</select>
		<label>Skills:</label>
		<input type="text" v-model="tempSkills" @keyup.space="addSkill" />
		<div v-for="skill in skills" :key="skill" class="pill">
			<span @click="removeSkill(skill)">{{ skill }}</span>
		</div>
		<div class="terms">
			<input type="checkbox" required v-model="terms" />
			<label>terms and conditions</label>
		</div>
		<div class="submit">
			<button>Create an Account</button>
		</div>
	</form>
	<p>Email: {{ email }}</p>
	<p>Password: {{ password }}</p>
	<p>Role: {{ role }}</p>
	<p>Terms: {{ terms }}</p>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			role: 'developer',
			terms: false,
			tempSkills: '',
			skills: [],
			passwordError: '',
		};
	},
	methods: {
		addSkill(e) {
			if (e.key === ' ' && this.tempSkills) {
				if (!this.skills.includes(this.tempSkills)) {
					this.skills.push(this.tempSkills);
				}
				this.tempSkills = '';
			}
		},
		removeSkill(removedSkill) {
			const newSkills = this.skills.filter((skill) => skill !== removedSkill);
			this.skills = newSkills;
		},
		handleSubmit() {
			this.passwordError =
				this.password.length > 5
					? ''
					: 'Password must be at least 6 chars long';

			if (!this.passwordError) {
				console.log({
					email: this.email,
					password: this.password,
					role: this.role,
					skills: this.skills,
				});
			}
		},
	},
};
</script>

<style>
form {
	max-width: 420px;
	margin: 30px auto;
	background: white;
	text-align: left;
	padding: 40px;
	border-radius: 10px;
}
label {
	color: #aaa;
	display: inline-block;
	margin: 25px 0 15px;
	font-size: 0.6rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: bold;
}
input,
select {
	display: block;
	padding: 10px 6px;
	width: 100%;
	box-sizing: border-box;
	border: none;
	border-bottom: 1px solid #ddd;
	color: #555;
}
input[type='checkbox'] {
	display: inline-block;
	width: 16px;
	margin: 0 10px 0 0;
	position: relative;
	top: 2px;
}
.pill {
	display: inline-block;
	margin: 20px 10px 0 0;
	padding: 6px 12px;
	background: #eee;
	font-size: 12px;
	letter-spacing: 1px;
	font-weight: bold;
	color: #777;
	cursor: pointer;
}
button {
	background: #0b6dff;
	border: 0;
	padding: 10px 20px;
	margin-top: 20px;
	color: white;
	border-radius: 20px;
}
.submit {
	text-align: center;
}
.error {
	color: red;
	margin-top: 10px;
	font-size: 0.8rem;
	font-weight: bold;
}
</style>
