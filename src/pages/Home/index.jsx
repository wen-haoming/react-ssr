import React,{useState} from 'react'
import styles from './style.less'
import img from './img.jpeg'
import { renderRoutes } from 'react-router-config'
import {Link} from 'react-router-dom'

const Home = ({route})=>{
   const [num,setNum] = useState(0)
   return <div className={styles.namesapce}>
        <h1>Home</h1>
        <span style={{fontSize:30}}>{num}</span>
        <button style={{width:100,height:100}} onClick={()=>setNum(num+1)} >+</button>
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