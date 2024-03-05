import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import JobsView from '../views/jobs/Jobs.vue';
import JobDetailView from '../views/jobs/JobDetail.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
		component: AboutView,
	},
	{
		path: '/jobs',
		name: 'jobs',
		component: JobsView,
	},
	{
		path: '/jobs/:id',
		name: 'job-detail',
		component: JobDetailView,
		props: true,
	},
	// redirect
	{
		path: '/all-jobs',
		redirect: '/jobs',
	},
	// 404 page
	{
		path: '/:catchAll(.*)',
		name: 'not-found',
		component: NotFoundView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
