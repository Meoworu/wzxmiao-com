module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'WZXmiao',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './static/image/me.png' },
      { rel:"stylesheet", integrity:"sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w",href:"https://unpkg.com/purecss@1.0.0/build/pure-min.css",crossorigin:"anonymous"},
      { rel:"stylesheet", href:"https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css"},
      { rel:"stylesheet", href:"https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
