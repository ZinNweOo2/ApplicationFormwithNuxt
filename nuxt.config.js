export default {
    server: {
        port: 5008,
    },
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: process.env.APP_TITLE || 'nuxt-frame',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/vee-validate.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://auth.nuxtjs.org/
        '@nuxtjs/auth',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: process.env.API_BASE_URL,
    },

    // NuxtJS Auth module configration:
    auth: {
        redirect: {
            login: '/login',
            logout: '/login',
            callback: '/login',
            home: '/',
        },
        strategies: {
            local: {
                token: {
                    property: 'token',
                    global: true,
                    required: true,
                    type: 'Bearer',
                },
                user: false,
                endpoints: {
                    login: {
                        url: '/login',
                        method: 'post',
                    },
                    logout: false,
                    user: false,
                },
            },
        },
    },

    // Router configration
    router: {
        // Global middleware registration:
        middleware: ['auth'],
    },

    // PWA configration
    pwa: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vee-validate/dist/rules'],
    },

    // Env Variable: https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
    publicRuntimeConfig: {
        appTitle: process.env.APP_TITLE || 'App Title',
    },
}