import fs  from 'fs' 

let getLink =  ()=>{
   let fileArr = fs.readdirSync(('./public/css')) // 注意这里最好使用相对路径,并且相对的路径是相对启动的路径
   return fileArr.filter(item=> item.endsWith('.css')).map(item=>{
       return `<link rel="stylesheet" href="/css/${item}" />`
   })
}


export default getLink