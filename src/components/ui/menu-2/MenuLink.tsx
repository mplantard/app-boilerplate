import React from 'react';
import { ArrowDown } from '../icons/ArrowDown';
import * as styles from './Menu.module.css';

export const MenuLink = (props: {label: string, icon?: JSX.Element, children?: JSX.Element | JSX.Element[]}) => {

    return(
        <li>
            <div className={styles.menuLink}>
                <a href="#">
                    <div className={styles.linkIcon}>{props.icon}</div>
                    <div className={styles.linkLabel}><span>{props.label}</span></div>
                    <div className={styles.expandArrow}>{props.children ? <ArrowDown settings={{strokeWidth: 2}}/> : <></>}</div>
                </a>
            </div>
        </li>
    );
};