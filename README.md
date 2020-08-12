## react注水到页面

上一节使用express把react首页展示了出来，但是我们添加事件其实是没有效果的，因为我们需要用我们现在工程的client(客户端)去接管显然好的页面。

1. 我们首先编写client的代码，我们看到client有两个文件App和index.js，其实app.jsx是用于包裹根组件的，后面会比较有用，所以client拆分出两个文件，然后引入pages的业务代码，在index中我们使用hydrate去注水操作，那么我们的client的代码已经完成了。

2. 那么我们现在就需要把client的代码进行打包, 主要是配置好entry和output即可, 文件名最好添加文件指纹

3. 那么我们已经完成了客户端代码的打包，那么我们就需要把客户端的代码插入到server的render文件里面。
    - 编写脚本文件getScript，遍历public里的js
    - 然后把结果插入到render文件中
