import express from 'express'
import path from 'path'
import render from './render'
import {createProxyMiddleware} from 'http-proxy-middleware'

// const resolve = (src)=>path.resolve(__dirname,src)

const app = express()

app.use("api", createProxyMiddleware({
    target: "http://yuanjin.tech:5005/",
    changeOrigin: true
  }))

app.use(express.static(('./public')))


app.get('*',render)

app.listen(8080,()=>{
    console.log('服务器8080已经启动')
})