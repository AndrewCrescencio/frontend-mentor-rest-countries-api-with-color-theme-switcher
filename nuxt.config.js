export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Frontend Mentor Challenge',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content:
          'Frontend Mentor Challenge - REST Countries API with color theme switcher by Andrew Crescencio',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content:
          'Answer to Frontend Mentor Challenge REST Countries API with color theme switcher by Andrew Crescencio',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content:
          'Answer to Frontend Mentor Challenge REST Countries API with color theme switcher by Andrew Crescencio',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Answer to Frontend Mentor Challenge REST Countries API with color theme switcher by Andrew Crescencio',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Made with NuxtJS, Windi CSS and Vuex',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: process.env.BASE_URL + '/images/open-graph-image.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  target: 'server',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/fonts/fonts.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-windicss',
    // https://v2.color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
  ],

  image: {},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
}
