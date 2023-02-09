import React from 'react';
import * as styles from './Menu.module.css';
import { MenuToggler } from './MenuToggler';

const collapsableMenuId = crypto.randomUUID();

export const Menu = (props: {isVertical?: boolean, children: JSX.Element | JSX.Element[]}) => {

    const { isVertical, children} = props;

    return(
        <nav className={`${styles.navbar} ${styles.navbarExpand} ${isVertical ? styles.vertical : ''}`}>
            <MenuToggler menuId={collapsableMenuId}/>
            <div className={styles.collapse + ' ' + styles.navbarCollapse} id={collapsableMenuId}>
                <ul className={styles.navbarNav}>
                    {children}
                </ul>
            </div>
        </nav>
    );
};