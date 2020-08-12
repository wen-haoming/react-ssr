import React from 'react'
import styles from './index.less';
import {Link} from 'react-router-dom'

const Header  = ()=>{
    return <div className={styles.headerWrap}>
        <div className="item">
            <Link to="/">首页</Link>
        </div>
        <div className="item">
            <Link to="/admin">个人页面</Link>
        </div>
    </div>
}

export default Header