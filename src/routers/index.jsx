import React from 'react'
import Header from '@/Components/Header'
import { renderRoutes } from 'react-router-config'
import routerConfig from './config'

export default ()=>{
   return  <div>
        <Header/>
        {renderRoutes(routerConfig)}    
    </div>
}