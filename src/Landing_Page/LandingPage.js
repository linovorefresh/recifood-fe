import React from 'react';
import { TopNav } from './Top_Nav/TopNav';
import { FilterBar } from './Filter_Bar/FilterBar';
import styles from './LandingPage.module.css';

export function LandingPage() {
    return (
        <React.Fragment className={styles['landing-page']}>
            <TopNav />
            <FilterBar />
        </React.Fragment>
    );
}
