import express from 'express'
import path from 'path'
import render from './render'

// const resolve = (src)=>path.resolve(__dirname,src)

const app = express()

app.use(express.static(('./public')))

app.get('*',render)

app.listen(8080,()=>{
    console.log('服务器8080已经启动')
})