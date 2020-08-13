import React from  'react'
import RenderApp from './App.jsx';
import {renderToString} from 'react-dom/server'
import getHtml from './getHTML'
import lodaData from './loadData'
import storeFunc from '../store'

const render = async (req,res)=>{
    let store = storeFunc()
    const context = {}
    await lodaData(req.path,store)

    let app = renderToString(<RenderApp location={req.path} context={context} store={store}  /> ) // 渲染字符串信息

    let html = getHtml(app,req.path,store)

    res.send(html)

}

export default render