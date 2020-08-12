const path = require('path')
const resolve = (src)=>path.resolve(__dirname,src)
const {merge} = require('webpack-merge')
const webpackBase  = require('./webpack.base')
const externals = require('webpack-node-externals');

const config = {
    entry:resolve('./src/server/index.js'),
    output:{
       filename:'server.js',
       path:resolve('./dist'),
       publicPath:'/'
    },
    target:'node', // node环境
    devtool:'none',// 不需要
    externals:[externals()] //排除所有node_modules的模块 
}

module.exports = merge(webpackBase,config)