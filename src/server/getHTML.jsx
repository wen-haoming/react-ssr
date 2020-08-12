import getScript from './getScript'
import getLink from './getLink'

export default (app)=>{
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
       ${getScript()}
    </body>
    </html>
    `
}