export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'candyexam',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'anmolsinghwebdev@gmail.com',
      },
      smtp: {
        host: "mail.anmol-singh.com",
        port: 26,
        auth: {
          user: "webtest@anmol-singh.com",
          pass: "C@ndyb@nner",
        },
        tls: {
          rejectUnauthorized:false,
        },
      }, 
    }],
    
  ],

  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: {
    "/api/": {
      target: "http://localhost:5000",
      pathRewrite: { "^/api/": "/" }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
