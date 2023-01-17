import React from 'react';
import * as styles from './Menu.module.css';
import { MenuToggler } from './MenuToggler';

export const Menu = (props: {children: JSX.Element | JSX.Element[]}) => {
    return(
        <nav className={styles.navbar + ' ' + styles.navbarExpand}>
            <MenuToggler/>
            <div className={styles.collapse + ' ' + styles.navbarCollapse} id="navbarSupportedContent">
                <ul className={styles.navbarNav}>
                    {props.children}
                </ul>
            </div>
        </nav>
    );
};