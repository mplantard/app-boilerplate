import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../navigation/AppRoute.class';
import * as styles from './Menu.module.css';

export const MenuDropDownItem = (props: {label: string, to?: AppRoute}) => {

    const navigate = useNavigate();

    const handleClick = (): void => {
        if(props.to) navigate(props.to.getUri());
        return;
    };

    return (
        <button className={styles.dropdownItem} onClick={handleClick}>{props.label}</button>
    );
};