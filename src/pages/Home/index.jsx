import React,{useState} from 'react'
import styles from './style.less'
import img from './img.jpeg'
import { renderRoutes } from 'react-router-config'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {addCountAction,subCountAction} from '@/store/actions'

const Home = ({route})=>{

    const [num,setNum] = useState(0)
    const dataNum = useSelector(state=>state.num);
    const dispatch = useDispatch();
    
   return <div className={styles.namesapce}>
        <h1>Home</h1>
        <span style={{fontSize:30}}>{dataNum}</span>
        <button style={{width:100,height:100}} onClick={()=>dispatch(addCountAction())} >+</button>
        <div className={styles.namesapce}>
        </div>
        <Link to="/home/base1">base1</Link>
        <Link to="/home/base2">base2</Link>
        <div className='wrap'>
          {renderRoutes(route.routes)}
        </div>
        {/* <img src={img} width="550" height="350"  alt=""/> */}
   </div>
}

export default Home