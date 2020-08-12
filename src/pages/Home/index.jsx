import React,{useState} from 'react'

const Home = ()=>{
   const [num,setNum] = useState(0)
   return <>
        <h1>Home</h1>
        <span>{num}</span>
        <button onClick={()=>setNum(num+1)} >+</button>
   </>
}

export default Home