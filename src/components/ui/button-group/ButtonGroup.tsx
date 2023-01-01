import React from "react";
import * as styles from './ButtonGroup.module.css';

export const ButtonGroup = (props: {children: JSX.Element | JSX.Element[]}) => { 
    return (
        <div className={styles.btnGroup}>
            {props.children}
        </div>
    );  
}