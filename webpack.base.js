const path = require('path')
const resolve = (src)=>path.resolve(__dirname,src)
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    resolve:{
        alias:{
            '@':resolve('./src'),
        },
        extensions: [".js", ".jsx", ".css"] // 配置识别文件路径
    },
    mode:'development',
    watch:true, // 热更新
    module:{
       rules:[
           {
               test:/.jsx?$/,
               exclude: /node_modules/, 
               use:[
                   {
                       loader:'babel-loader',
                       options:{
                           presets:['@babel/preset-react']
                       }
                   }
               ]
           },
           {
               test:/.(png|jpeg|jpg)$/,
               use:[
                   {
                       loader:'url-loader',
                       options:{
                           limit:300
                       }
                   }
               ]
           }
          
       ] 
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico*'],
        })
    ]
}