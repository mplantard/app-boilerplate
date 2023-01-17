import React from 'react';
import * as styles from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={styles.mainPane}>
            <div className={styles.pane}>
                <span>{'¯\\_(ツ)_/¯'}</span>
                <p>{`Sorry! We couldn't find anything for you here!`}</p>
            </div>
        </div>
    );
}

export default NotFound;