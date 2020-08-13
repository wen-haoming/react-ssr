import React from 'react'
import styles from './style.less'
import {renderRoutes} from 'react-router-config'
import {Link} from 'react-router-dom'

const Admin = ({routes})=>{
    return <div>
        <h1>Admin</h1>
        <div className={styles.wrap}>
       
       { renderRoutes(routes)}
        </div>
    </div>
}

export default Admin