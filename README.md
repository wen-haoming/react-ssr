
## server渲染react组件

先搭建工程目录，配置服务端打包环境，能够渲染react页面

1. 首先我们需要先在src中建立3个文件夹 client(客户端) pages(业务代码) server(服务端)

2. webpack建立三个文件，base，client，server
    - server 最好和client保持一致的**esm**语法，而不是**cjs**，配置详情可以查看该文件

3. express服务器的搭建
   -  src/server/index
   -  其中我把渲染app的中间件抽离出来

4. 组件编写
   -  src/pages/
