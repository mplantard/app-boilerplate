import React from 'react';
import * as styles from './Title.module.css';

export const Title = (props: {children: string}) => {
    return (
        <h1 className={styles.title}>
            {props.children}
        </h1>
    );
};