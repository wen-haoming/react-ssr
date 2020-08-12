const path = require('path')
const resolve = (src)=>path.resolve(__dirname,src)
const {merge} = require('webpack-merge')
const webpackBase  = require('./webpack.base')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry:resolve('./src/client/index.js'),
    devtool:'source-map',
    output:{
        filename:'js/bundle.[hash:5].js',
        path:resolve('./public'),
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader?modules", "postcss-loader"]
              },
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "css/bundle.[hash:5].css"
          })
    ]
    
}

module.exports = merge(webpackBase,config)