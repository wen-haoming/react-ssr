import React,{useEffect} from 'react'
import styles from './style.less'
import {renderRoutes} from 'react-router-config'
import {Link} from 'react-router-dom'
import {getMovieAction} from '@/store/actions'
import {useDispatch,useSelector} from 'react-redux'

const Admin = ({routes})=>{
    const dispatch = useDispatch()
    const state = useSelector((state)=>state.dataArr)

    useEffect(()=>{
        if(window.requestPath === '/admin'){
            console.log('不需要加载数据')
        }else{
            console.log('需要加载数据')
             dispatch(getMovieAction())
        }
    },[])

    return <div>
        <h1>Admin</h1>
           {  state.map((item,idx)=>{
               return <div key={idx}>
                   {item.name}
               </div>
            })}
        <div className={styles.wrap}>
            { renderRoutes(routes)}
        </div>
    </div>
}

Admin.loadData = async (store)=>{
    await store.dispatch(getMovieAction())
}

export default Admin