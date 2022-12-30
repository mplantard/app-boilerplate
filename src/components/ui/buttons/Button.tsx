import React from "react";
import * as styles from './Button.module.css';
import { FilterIcon } from "./FilterIcon";

type ButtonInput = {
    handleClick: (e: React.MouseEvent<HTMLInputElement>) => void
};

export const Button = (props: ButtonInput) => {

    return <button className={styles.btn + ' flex items-center'} onClick={props.handleClick}>
        <FilterIcon />
    </button>;
};