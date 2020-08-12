const path = require('path')
const resolve = (src)=>path.resolve(__dirname,src)
const {merge} = require('webpack-merge')
const webpackBase  = require('./webpack.base')

const config = {
    entry:resolve('./src/client/index.js'),
    devtool:'source-map',
    output:{
        filename:'js/bundle.[hash:5].js',
        path:resolve('./public'),
        publicPath:'/'
    },
    
}

module.exports = merge(webpackBase,config)