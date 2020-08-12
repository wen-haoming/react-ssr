import React from 'react'
import Home from '../pages/Home'
import {StaticRouter} from 'react-router-dom'
import Router from '../routers/index'

const App = ({location,context})=>{
    return  <StaticRouter location={location} context={context}>
            <Router/>
        </StaticRouter> 
}

export default App