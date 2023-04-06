import React from "react";
import styles from './Recipe.module.css';

export function Recipe({dishImg}) {
    return (
        <article>
            <div className={styles['img-container']}>
                <img src={dishImg} alt="image for dish"/>
            </div>
        </article>
    )
}