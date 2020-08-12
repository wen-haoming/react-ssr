module.exports = {
    resolve:{
        alias:{
            '@':'./src',
        },
        extensions: [".js", ".jsx", ".css"] // 配置识别文件路径
    },
    mode:'development',
    watch:true,
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
           }
       ] 
    }
}