import React from "react";
import styles from './FilterBar.module.css';

export function FilterBar() {
    return (
        <React.Fragment>
            <div className={styles['filter-bar']}>
                <div className={styles['filter']}>FILTER BY COOKING STYLE</div>
                <div className={styles['filter']}>BY MY COLLECTION </div>
            </div>
            <div className={styles['recipe-list']}>

            </div>
        </React.Fragment>
    )
}