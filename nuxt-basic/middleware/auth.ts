export default defineNuxtRouteMiddleware((to, from) => {
  console.log('dashboard middleware');

  const isAdmin = true;
  if(!isAdmin) return navigateTo('/')
})