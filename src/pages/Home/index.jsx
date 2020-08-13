import React,{useState} from 'react'
import styles from './style.less'
import img from './img.jpeg'

const Home = ()=>{
   const [num,setNum] = useState(0)
   return <>
        <h1>Home</h1>
        <span>{num}</span>
        <button onClick={()=>setNum(num+1)} >+</button>
        <div className={styles.namesapce}>
            <div className='item'></div>
        </div>
        {/* <img src={img} alt=""/> */}
   </>
}

export default Home