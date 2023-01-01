import React from "react";
import * as styles from './ToolBar.module.css';

export const ToolBar = (props: {children: JSX.Element | JSX.Element[]}) => { 
    return (
        <div className={styles.toolBar}>
            {props.children}
        </div>
    );  
}