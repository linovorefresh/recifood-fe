import React, { useState } from "react";
import { Recipe } from "../Recipe/Recipe";
import styles from './FilterBar.module.css';

export function FilterBar() {

    const [ isCookingFilterExpanded, setIsCookingFilterExpanded ] = useState(false);
    const [ isCollectionFilterExpanded, setIsCollectionFilterExpanded ] = useState(false);

    const handleFilterExpanded = (id) => {
        console.log(id)
        switch (id) {
            case 'cs':
                setIsCookingFilterExpanded(!isCookingFilterExpanded);
                break;
            case 'col':
                setIsCollectionFilterExpanded(!isCollectionFilterExpanded);
                break;
            default:
                console.log('n c');
        }
    }

    return (
        <React.Fragment>
            <div className={styles['filter-bar']}>
                <div className={styles['filter']}>FILTER BY COOKING STYLE {isCookingFilterExpanded ? <span onClick={() => handleFilterExpanded('cs')}><img src="chevron-up.png" alt="^"/></span> : <span onClick={() => handleFilterExpanded('cs')}><img src="/arrow-down.png" alt="v"/></span> } </div>
                <div className={styles['filter']}>BY MY COLLECTION {isCollectionFilterExpanded ? <span onClick={() => handleFilterExpanded('col')}><img src="chevron-up.png" alt="^"/></span> : <span onClick={() =>handleFilterExpanded('col')}><img src="/arrow-down.png" alt="v"/></span> } </div>
            </div>
            <div class='columns is-multiline is-variable is-1-mobile' style={{"width": '88vw', "margin": "1rem auto 1rem auto"}} >
                <div class='column is-6'>
                    <Recipe class='column is-half' dishImg="/adobong_pusit.png" />
                </div>
                <div class='column is-6'>
                    <Recipe class='column is-half' dishImg="/bihon_pancit.png" />
                </div>
                <div class='column is-6'>
                    <Recipe class='column' dishImg="/boiled_eggs_oyster.png" />
                    <div class></div>
                </div>
            </div>
        </React.Fragment>
    )
}