import {matchRoutes} from 'react-router-config'
import routerConfig from '../routers/config'

export default (pathname,store)=>{
    const matches = matchRoutes(routerConfig,pathname)
    let arr = []
    for(let comp of matches){
        const {route:{component}} = comp
        if(component.loadData){
            arr.push(Promise.resolve(component.loadData(store)))
        }
    }
    return Promise.all(arr)
}