import getScript from './getScript'
import getLink from './getLink'

export default (app,path,store)=>{
    return `
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
        <script>
       window.pageDatas = ${JSON.stringify(store.getState())}
        window.requestPath = "${path}";
       </script>
       ${getScript()}
    </body>
    </html>
    `
}