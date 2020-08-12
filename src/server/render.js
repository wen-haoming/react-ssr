import React from  'react'
import RenderApp from './App.jsx';
import {renderToString} from 'react-dom/server'
import getScript from './getScript'
import getLink from './getLink'


const render = (req,res)=>{

    let app = renderToString( <RenderApp/> ) // 渲染字符串信息

    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        ${getLink()}
    </head>
    <body>
        <div id="root" >${app}</div>
       ${getScript()}
    </body>
    </html>
    `
    res.send(html)

}

export default render