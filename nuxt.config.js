export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        'bootstrap/dist/css/bootstrap.css',
        '~/assets/sass/style.sass'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [

    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        // '@nuxtjs/auth',
        '@nuxtjs/font-awesome'
    ],
    axios: {
        baseURL: 'http://locahost:8000/api',
        // browserBaseURL: 'http://localhost/api'
    },
    router: {
        // middleware: ['auth']
    },
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {url: '/auth/login', method: 'post', propertyName: 'token'},
                    logout: {url: '/auth/logout', method: 'post'},
                    user: {url: '/auth/user', method: 'get', propertyName: 'user'}
                },
            }
        }
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
