import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../navigation/AppRoutes.enum';
import * as styles from './Menu.module.css';

export const MenuButton = (props: {label: string, to: AppRoutes | null}) => {

    const navigate = useNavigate();

    const handleClick = (): void => {
        if(props.to) navigate(props.to);
        return;
    };

    return (
        <li className={styles.navItem}>
            <button className={styles.menuBtn} onClick={handleClick}>{props.label}</button>
        </li>
    );
};