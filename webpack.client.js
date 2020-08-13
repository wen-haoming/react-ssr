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
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader?modules","less-loader"]
              },
              {
                test:/.(png|jpeg|jpg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                           name:'img/[name].[hash:5].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "css/bundle.[hash:5].css"
          })
    ]
    
}

module.exports = merge(webpackBase,config)