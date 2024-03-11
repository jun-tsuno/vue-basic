// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools', '@nuxtjs/tailwindcss'
  ],
  css: ['/assets/css/style.css'],
  app: {
    head: {
      // title: 'Nuxt 3 basic',
      // meta: [{name: 'description', content: 'Nuxt3 for beginners'}],
      link: [{rel: 'icon', href:'/img/icon-green.png'}],
    },
    pageTransition: {name: 'page', mode: 'out-in'}
  },
  routeRules: {
    '/posts/**': {ssr: true} // ページ単位でCSRにする
  }
})
