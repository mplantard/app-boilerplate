import React from "react";
import * as styles from './Button.module.css';

export const Button = (props: {handleClick: LazyFunction, children: JSX.Element}) => {

    return <button className={styles.btn + ' flex items-center'} onClick={props.handleClick}>
        {props.children}
    </button>;
};