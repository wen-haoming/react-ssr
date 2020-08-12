import React from 'react'
import Home from '@/pages/Home'
import '../assets/global.css'
import {BrowserRouter} from 'react-router-dom'
import Router from '../routers/index'

const App = ()=>{
    return  <BrowserRouter>
    <Router></Router>
    </BrowserRouter> 
}

export default App