import React from  'react'
import RenderApp from './App.jsx';
import {renderToString} from 'react-dom/server'
import getScript from './getScript'
import getLink from './getLink'
import getHtml from './getHTML'

const render = (req,res)=>{
    const context = {}
    let app = renderToString( <RenderApp location={req.path} context={context}  /> ) // 渲染字符串信息

    let html = getHtml(app)

    res.send(html)

}

export default render