const path = require('path')
const Prerender = require('prerender-spa-plugin')

module.exports = {
    publicPath: '/~proj2021-16/',

    configureWebpack: () => {
        return {
            plugins: [
                new Prerender({
                    staticDir: path.join(__dirname, 'dist'),

                    outputDir: path.join(__dirname, 'dist'),

                    indexPath: path.join(__dirname, "dist/index.html"),

                    routes: [ '/', '/akuryoubuster' ]
                })
            ]
        }
    }

};