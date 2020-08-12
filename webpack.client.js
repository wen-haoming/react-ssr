const path = require('path')
const resolve = (src)=>path.resolve(__dirname,src)
const {merge} = require('webpack-merge')
const webpackBase  = require('./webpack.base')

const config = {
    entry:{
              
    },
    
}

module.exports = merge(webpackBase,config)