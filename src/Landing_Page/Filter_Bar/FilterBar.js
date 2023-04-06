import React from "react";
import { Recipe } from "../Recipe/Recipe";
import styles from './FilterBar.module.css';

export function FilterBar() {
    return (
        <React.Fragment>
            <div className={styles['filter-bar']}>
                <div className={styles['filter']}>FILTER BY COOKING STYLE</div>
                <div className={styles['filter']}>BY MY COLLECTION </div>
            </div>
            <div class='columns is-multiline is-variable is-1-mobile' style={{"width": '88vw', "margin": "2rem auto 1rem auto"}} >
                <div class='column is-6'>
                    <Recipe class='column is-half' dishImg="/adobong_pusit.png" />
                </div>
                <div class='column is-6'>
                    <Recipe class='column is-half' dishImg="/bihon_pancit.png" />
                </div>
                <div class='column is-6'>
                    <Recipe class='column' dishImg="/boiled_eggs_oyster.png" />
                </div>
            </div>
        </React.Fragment>
    )
}