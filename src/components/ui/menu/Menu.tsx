import React from 'react';
import * as styles from './Menu.module.css';
import { MenuToggler } from './MenuToggler';

export const Menu = (props: {children: JSX.Element | JSX.Element[]}) => {
    return(
        <nav className={styles.navBar}>
            <MenuToggler/>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" style={{marginRight: 'auto'}}>
                    {props.children}
                </ul>
            </div>
        </nav>
    );
};