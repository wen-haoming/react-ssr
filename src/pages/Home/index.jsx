import React,{useState} from 'react'
import styles from './style.css'

const Home = ()=>{
   const [num,setNum] = useState(0)
   return <>
        <h1>Home</h1>
        <span>{num}</span>
        <button onClick={()=>setNum(num+1)} >+</button>
        <div className={styles.wrap}>
            <div className={styles.item}></div>
        </div>
   </>
}

export default Home