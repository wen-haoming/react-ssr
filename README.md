## 如何解决样式以及图片问题

> 1. 利用wbepack生成样式文件
> 1. 在页面源代码中加入link元素，链接到样式文件
> 1. mini-css-extract-plugin
> 1. css-loader

   1. **如何引入样式**问题来了 是在客户端引用还是服务端引用呢？主要思路就是服务器端生成和客户端相同的类名然后就能够对应的上，pages是使用css-module来设置对应的样式，那么如何设置呢？
      1.  server(主要引入全局样式)
         1.  由于我们的服务端也是引用page里面的东西，所以我们在会自动生成css文件，但是我们不能生成，所以需要webpack配置一下 ```{ test: /\.css$/, use: ["isomorphic-style-loader", "css-loader?modules"] }```
      2. client(主要引入文件样式)
         1. 我们客户端只需要设置 module: { rules: [ { test: /\.css$/, use:[MiniCssExtractPlugin.loader, "css-loader?modules"] } ] }
   2. 然后我们需要编写脚本插入到html当中
