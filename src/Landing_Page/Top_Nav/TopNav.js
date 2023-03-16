import React from "react";
// import logo from '../../assets/R.png';
import styles from './TopNav.module.css';

export function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                {/* <img src={logo} className={styles.logo} alt='logo'/> */}
                <span>RECIFOOD</span>
            </div>
            
            <div className={styles.right}>
                <span>Search</span>
                <button className='button'>Sign In</button>
            </div>
        </div>
    )
}