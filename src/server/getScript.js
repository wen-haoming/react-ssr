import fs  from 'fs' 
import path from 'path'

let getScript =  ()=>{
   let fileArr = fs.readdirSync(('./public/js')) // 注意这里最好使用相对路径,并且相对的路径是相对启动的路径
   return fileArr.filter(item=> item.endsWith('.js')).map(item=>{
       return `<script src="/js/${item}"></script>`
   })
     
}


export default getScript