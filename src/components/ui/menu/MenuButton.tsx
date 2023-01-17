import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../navigation/AppRoute.class';
import * as styles from './Menu.module.css';

export const MenuButton = (props: {label: string, to?: AppRoute}) => {

    const navigate = useNavigate();

    const handleClick = (): void => {
        if(props.to) navigate(props.to.getUri());
        return;
    };

    return (
        <li className={styles.navLink}>
            <button onClick={handleClick}>{props.label}</button>
        </li>
    );
};