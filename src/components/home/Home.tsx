import React from 'react';
import { Button } from '../ui/buttons/Button';
import * as styles from './Home.module.css';

export const Home = () => {
    return (
        <div className={styles.mainPane}>
            <h1>Welcome!</h1>
            <Button handleClick={(e) => {
                e.preventDefault();
                console.log(e);
            }}/>
        </div>
    );
}

export default Home;